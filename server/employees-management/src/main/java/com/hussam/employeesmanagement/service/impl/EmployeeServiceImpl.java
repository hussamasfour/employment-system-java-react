package com.hussam.employeesmanagement.service.impl;

import com.hussam.employeesmanagement.entity.Employee;
import com.hussam.employeesmanagement.entity.Gender;
import com.hussam.employeesmanagement.entity.User;
import com.hussam.employeesmanagement.exception.NotFoundException;
import com.hussam.employeesmanagement.repository.EmployeeRepository;
import com.hussam.employeesmanagement.security.userService.UserDetailsImp;
import com.hussam.employeesmanagement.service.EmployeeService;
import com.hussam.employeesmanagement.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private UserService userService;

    @Override
    public Optional<Employee> getEmployeeById(Long id, UserDetailsImp userDetails) {
        User user = userService.getUserByUsername(userDetails.getUsername());
        Optional<Employee> employee = employeeRepository.findByIdAndUser(id, user);

        if(employee.isEmpty()) {
            throw new NotFoundException("Sorry! there is no employee with selected id");
        }

        return employee;
    }

    @Override
    public void addEmployee(Employee employee, UserDetailsImp userDetail) {
        User user = userService.getUserByUsername(userDetail.getUsername());

        employee.setUser(user);
        List<Employee> employeeList = new ArrayList<>();
        employeeList.add(employee);

        user.setEmployeeList(employeeList);


        employeeRepository.save(employee);
    }

    @Override
    public List<Employee> getAllEmployeesOfCurrentUser(UserDetailsImp userDetails) {
        User user = userService.getUserByUsername(userDetails.getUsername());
        if(user == null){
            throw new DataIntegrityViolationException("Please Sign in first");
        }
        List<Employee> employees = employeeRepository.getAllByUser(user);
        return employees;

    }
}
