package com.hussam.employeesmanagement.service;

import com.hussam.employeesmanagement.entity.Employee;
import com.hussam.employeesmanagement.security.userService.UserDetailsImp;


import java.util.List;
import java.util.Optional;


public interface EmployeeService {

    Optional<Employee> getEmployeeById(Long id, UserDetailsImp userDetails);

    void addEmployee(Employee employee, UserDetailsImp userDetails);

    List<Employee> getAllEmployeesOfCurrentUser(UserDetailsImp userDetails);

}
