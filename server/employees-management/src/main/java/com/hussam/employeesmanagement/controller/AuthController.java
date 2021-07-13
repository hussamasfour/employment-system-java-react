package com.hussam.employeesmanagement.controller;

import com.hussam.employeesmanagement.dto.request.LoginRequest;
import com.hussam.employeesmanagement.dto.request.SignUpRequest;
import com.hussam.employeesmanagement.dto.response.SignUpResponse;
import com.hussam.employeesmanagement.entity.User;
import com.hussam.employeesmanagement.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
public class AuthController {
    @Autowired
    private UserService userService;
    @PostMapping("/signup")
    ResponseEntity<SignUpResponse>  Register(@Valid @RequestBody SignUpRequest signUpRequest) throws Exception {
       User user =  userService.signUp(signUpRequest);
       if(user == null){
           throw new Exception("error");
       }

       return ResponseEntity.ok( new SignUpResponse("Successfully created"));
    }
//    @PostMapping("/login")
//    ResponseEntity<Object> login(@Valid @RequestBody LoginRequest loginRequest){
//
//    }
}
