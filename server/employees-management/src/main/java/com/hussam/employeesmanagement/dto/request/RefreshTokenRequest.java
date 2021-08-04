package com.hussam.employeesmanagement.dto.request;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Data
@Getter
@Setter
public class RefreshTokenRequest {

    @NotBlank(message = "refreshToken must not be blank")
    private String refreshToken;
}
