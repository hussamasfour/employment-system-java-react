package com.hussam.employeesmanagement.service.impl;

import com.hussam.employeesmanagement.dto.request.LoginRequest;
import com.hussam.employeesmanagement.dto.request.SignUpRequest;
import com.hussam.employeesmanagement.dto.response.JwtResponse;
import com.hussam.employeesmanagement.entity.Role;
import com.hussam.employeesmanagement.entity.RoleType;
import com.hussam.employeesmanagement.entity.User;
import com.hussam.employeesmanagement.exception.InvalidArgumentException;
import com.hussam.employeesmanagement.repository.RoleRepository;
import com.hussam.employeesmanagement.repository.UserRepository;
import com.hussam.employeesmanagement.security.userService.UserDetailsImp;
import com.hussam.employeesmanagement.security.util.JwtUtils;

import com.hussam.employeesmanagement.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private AuthenticationManager authenticationManager;

//    @Autowired
//    private RefreshTokenUtil refreshTokenUtil;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtils jwtUtils;

    @Override
    public User signUp(SignUpRequest signUpRequest)  {

        // checking if email is already exists
        if(userRepository.existsByEmail(signUpRequest.getEmail())){
            throw new IllegalArgumentException("Error!! email is already in use!!");
        }

        if(userRepository.existsByUsername(signUpRequest.getUsername())){
            throw new IllegalArgumentException("Error!! Username is already in use!!");
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
        user.setCreatedAt(new Date());

        //saving the new user to the database
        return userRepository.save(user);
    }

    @Override
    public JwtResponse signIn(LoginRequest loginRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

            SecurityContextHolder.getContext().setAuthentication(authentication);

            UserDetailsImp userDetails = (UserDetailsImp) authentication.getPrincipal();

            String jwt = jwtUtils.generateJwtToken(userDetails);

//        RefreshToken refreshToken = refreshTokenUtil.createRefreshToken(userDetails.getId());

            List<String> roles = userDetails.getAuthorities().stream().map(item -> item.getAuthority())
                    .collect(Collectors.toList());


            JwtResponse jwtResponse = new JwtResponse();

            jwtResponse.setEmail(userDetails.getEmail());
            jwtResponse.setUsername(userDetails.getUsername());
            jwtResponse.setAccessToken(jwt);
            jwtResponse.setId(userDetails.getId());
//        jwtResponse.setRefreshToken(refreshToken.getToken());
            jwtResponse.setRoles(roles);

            return jwtResponse;
        }catch (BadCredentialsException e){
            throw new BadCredentialsException("Username/Password is not correct");
        }
    }

    @Override
    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }
}
