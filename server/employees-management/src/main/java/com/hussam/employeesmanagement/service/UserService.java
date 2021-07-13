package com.hussam.employeesmanagement.service;

import com.hussam.employeesmanagement.dto.request.LoginRequest;
import com.hussam.employeesmanagement.dto.request.SignUpRequest;
import com.hussam.employeesmanagement.entity.User;
import org.springframework.stereotype.Service;

public interface UserService {
    public User signUp(SignUpRequest signUpRequest) throws Exception;
    public User signIn(LoginRequest loginRequest);
}
