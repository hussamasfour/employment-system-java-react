package com.hussam.employeesmanagement.dto.request;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class SignUpRequest {


    private String username;

    private String email;
    private String password;
}
