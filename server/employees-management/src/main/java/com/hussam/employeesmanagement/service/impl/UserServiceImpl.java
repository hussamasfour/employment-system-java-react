package com.hussam.employeesmanagement.service.impl;

import com.hussam.employeesmanagement.dto.request.LoginRequest;
import com.hussam.employeesmanagement.dto.request.SignUpRequest;
import com.hussam.employeesmanagement.entity.Role;
import com.hussam.employeesmanagement.entity.RoleType;
import com.hussam.employeesmanagement.entity.User;
import com.hussam.employeesmanagement.repository.RoleRepository;
import com.hussam.employeesmanagement.repository.UserRepository;
import com.hussam.employeesmanagement.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public User signUp(SignUpRequest signUpRequest) throws Exception {

        // checking if email is already exists
        if(userRepository.existsByEmail(signUpRequest.getEmail())){
            throw new Exception("Error email is already in use!!");
        }

        Set<Role> roles = new HashSet<>();
        Role role = roleRepository.findByRoleType(RoleType.ROLE_ADMIN);
        roles.add(role);

        // create new user instance
        User user = new User();

        user.setEmail(signUpRequest.getEmail());
        user.setUsername(signUpRequest.getUsername());
        user.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));



        user.setListRole(roles);

        //saving the new user to the database
        return userRepository.save(user);
    }

    @Override
    public User signIn(LoginRequest loginRequest) {
        return null;
    }
}
