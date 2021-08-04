package com.hussam.employeesmanagement.controller;

import com.hussam.employeesmanagement.dto.request.LoginRequest;
import com.hussam.employeesmanagement.dto.request.RefreshTokenRequest;
import com.hussam.employeesmanagement.dto.request.SignUpRequest;
import com.hussam.employeesmanagement.dto.response.JwtResponse;
import com.hussam.employeesmanagement.dto.response.RefreshTokenResponse;
import com.hussam.employeesmanagement.dto.response.SignUpResponse;
import com.hussam.employeesmanagement.entity.RefreshToken;
import com.hussam.employeesmanagement.entity.User;
import com.hussam.employeesmanagement.exception.TokenRefreshException;
import com.hussam.employeesmanagement.security.util.JwtUtils;
import com.hussam.employeesmanagement.service.RefreshTokenService;
import com.hussam.employeesmanagement.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class AuthController {
    @Autowired
    private  UserService userService;

    @Autowired
    JwtUtils jwtUtils;

    @Autowired
    private RefreshTokenService refreshTokenService;
    @PostMapping("/signup")
    ResponseEntity<SignUpResponse>  register(@Valid @RequestBody SignUpRequest signUpRequest) throws Exception {
        userService.signUp(signUpRequest);

       return ResponseEntity.ok( new SignUpResponse("Successfully created"));
    }

    @PostMapping("/login")
    ResponseEntity<JwtResponse> login(@Valid @RequestBody LoginRequest loginRequest){
        JwtResponse jwtResponse =  userService.signIn(loginRequest);

        return ResponseEntity.ok(jwtResponse);
    }

    @PostMapping("/refreshtoken")
    public ResponseEntity<?> refreshtoken(@Valid @RequestBody RefreshTokenRequest request) {
        String requestRefreshToken = request.getRefreshToken();

        return refreshTokenService.findByToken(requestRefreshToken)
                .map(refreshTokenService::verifyExpiration)
                .map(RefreshToken::getUser)
                .map(user -> {
                    String token = jwtUtils.generateTokenFromUsername(user.getUsername());
                    return ResponseEntity.ok(new RefreshTokenResponse(token, requestRefreshToken));
                })
                .orElseThrow(() -> new TokenRefreshException(requestRefreshToken,
                        "Refresh token is not in database!"));
    }

//    @PostMapping("/logout")
//    public ResponseEntity<?> logoutUser(@Valid @RequestBody LogOutRequest logOutRequest) {
//        refreshTokenService.deleteByUserId(logOutRequest.getUserId());
//        return ResponseEntity.ok(new MessageResponse("Log out successful!"));
//    }

}
