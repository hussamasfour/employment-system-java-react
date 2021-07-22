package com.hussam.employeesmanagement.controller;

import com.hussam.employeesmanagement.entity.Employee;
import com.hussam.employeesmanagement.security.userService.CurrentUser;
import com.hussam.employeesmanagement.security.userService.UserDetailsImp;
import com.hussam.employeesmanagement.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/employees")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> addEmployee(@RequestBody Employee employee , @CurrentUser UserDetailsImp userDetails){

        employeeService.addEmployee(employee, userDetails);
        return new ResponseEntity("added new Employee", HttpStatus.CREATED);
    }
    @GetMapping("/employee/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> getEmployeeById(@PathVariable("id") Long id, @CurrentUser UserDetailsImp userDetails) {
        Optional<Employee> employee = employeeService.getEmployeeById(id, userDetails);
        return new ResponseEntity(employee, HttpStatus.OK);
    }
    @GetMapping("/employees")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> getAllEmployeesOfSpecificUser( @CurrentUser UserDetailsImp userDetails){
        List<Employee> employees  = employeeService.getAllEmployeesOfCurrentUser(userDetails);

        return new ResponseEntity(employees, HttpStatus.OK);
    }
}
