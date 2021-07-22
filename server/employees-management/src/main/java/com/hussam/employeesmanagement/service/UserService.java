package com.hussam.employeesmanagement.service;

import com.hussam.employeesmanagement.dto.request.LoginRequest;
import com.hussam.employeesmanagement.dto.request.SignUpRequest;
import com.hussam.employeesmanagement.dto.response.JwtResponse;
import com.hussam.employeesmanagement.entity.User;
import org.springframework.stereotype.Service;

public interface UserService {
    public User signUp(SignUpRequest signUpRequest) throws Exception;
    public JwtResponse signIn(LoginRequest loginRequest);
    public User getUserByUsername(String username);
}
