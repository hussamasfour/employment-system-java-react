package com.hussam.employeesmanagement.dto.request;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;

@Data
@Getter
@Setter
public class NewEmployeeRequest {
    @NotBlank(message = "You must enter a first name")
    @Size(min=3, message = "First name must be at least 3 characters")
    private String firstName;
    @NotBlank(message = "You must enter last name")
    @Size(min=3, message = "LastName must be at least 3 characters")
    private String lastName;

//    @JsonFormat( pattern="yyyy-MM-dd")
    private Date dob;
    @NotBlank
    private Long salary;
    @NotBlank(message = "Must specify a gender")
    private String gender;

    @Email(message = "Please enter a valid email")
    @NotBlank(message = "Email is required")
    private String email;

}
