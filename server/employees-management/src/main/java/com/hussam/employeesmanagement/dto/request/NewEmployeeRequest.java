package com.hussam.employeesmanagement.dto.request;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;


import javax.validation.constraints.*;
import java.util.Date;

@Data
@Getter
@Setter
public class NewEmployeeRequest {
    @NotBlank(message = "You must enter a first name")
    @Size(min=3, max=30 ,message = "FirstName must be between 3-30 characters")
    private String firstName;
    @NotBlank(message = "You must enter last name")
    @Size(min=3, max=30 ,message = "LastName must be between 3-30 characters")
    private String lastName;

//    @JsonFormat( pattern="yyyy-MM-dd")
    private Date dob;
    @NotNull(message = "Salary is required")
    private Long salary;
    @NotBlank(message = "Must specify a gender")
    private String gender;

    @Email(message = "Please enter a valid email")
    @NotBlank(message = "Email is required")
    private String email;

    @NotBlank(message = "Department is required")
    private String department;
}
