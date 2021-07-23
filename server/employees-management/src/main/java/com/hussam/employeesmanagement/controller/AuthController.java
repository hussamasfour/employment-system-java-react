package com.hussam.employeesmanagement.controller;

import com.hussam.employeesmanagement.dto.request.LoginRequest;
import com.hussam.employeesmanagement.dto.request.SignUpRequest;
import com.hussam.employeesmanagement.dto.response.JwtResponse;
import com.hussam.employeesmanagement.dto.response.SignUpResponse;
import com.hussam.employeesmanagement.entity.User;
import com.hussam.employeesmanagement.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class AuthController {
    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/signup")
    ResponseEntity<SignUpResponse>  register(@Valid @RequestBody SignUpRequest signUpRequest) throws Exception {
       User user =  userService.signUp(signUpRequest);
       if(user == null){
           return ResponseEntity.badRequest().body(new SignUpResponse("Sorry failed signing up !"));
       }

       return ResponseEntity.ok( new SignUpResponse("Successfully created"));
    }

    @PostMapping("/login")
    ResponseEntity<JwtResponse> login(@Valid @RequestBody LoginRequest loginRequest, HttpServletResponse response){
        JwtResponse jwtResponse =  userService.signIn(loginRequest);

        Cookie jwtCookie = new Cookie("auth" , jwtResponse.getAccessToken());

        jwtCookie.setHttpOnly(true);
        jwtCookie.setSecure(false);
        jwtCookie.setPath("/");
        jwtCookie.setMaxAge(7 * 24 * 60 * 60);
        response.addCookie(jwtCookie);


        return ResponseEntity.ok(jwtResponse);
    }

//    @PostMapping("/refreshtoken")
//    public ResponseEntity<?> refreshtoken(@Valid @RequestBody TokenRefreshRequest request) {
//        String requestRefreshToken = request.getRefreshToken();
//
//        return refreshTokenService.findByToken(requestRefreshToken)
//                .map(refreshTokenService::verifyExpiration)
//                .map(RefreshToken::getUser)
//                .map(user -> {
//                    String token = jwtUtils.generateTokenFromUsername(user.getUsername());
//                    return ResponseEntity.ok(new TokenRefreshResponse(token, requestRefreshToken));
//                })
//                .orElseThrow(() -> new TokenRefreshException(requestRefreshToken,
//                        "Refresh token is not in database!"));
//    }
//
//    @PostMapping("/logout")
//    public ResponseEntity<?> logoutUser(@Valid @RequestBody LogOutRequest logOutRequest) {
//        refreshTokenService.deleteByUserId(logOutRequest.getUserId());
//        return ResponseEntity.ok(new MessageResponse("Log out successful!"));
//    }

}
