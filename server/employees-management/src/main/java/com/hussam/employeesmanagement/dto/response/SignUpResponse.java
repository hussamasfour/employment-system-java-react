package com.hussam.employeesmanagement.dto.response;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class SignUpResponse {

    private String message ;

    public SignUpResponse(String message){
        this.message = message;
    }
}
