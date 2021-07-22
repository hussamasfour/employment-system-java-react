package com.hussam.employeesmanagement.dto.request;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
@Getter
@Setter
public class SignUpRequest {

    @NotBlank(message = "Please enter a username")
    @Size(min=5, max=30, message ="username must be at least 5 characters" )
    private String username;

    @NotBlank(message = "Please enter an email")
    @Email(message = "Please enter a valid email!!")
    private String email;

    @NotBlank
    @Size(min = 8, message = "Password must be more than 8 characters")
    private String password;
}
