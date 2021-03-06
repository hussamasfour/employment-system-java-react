package com.hussam.employeesmanagement.service.impl;

import com.hussam.employeesmanagement.dto.request.NewEmployeeRequest;
import com.hussam.employeesmanagement.entity.Department;
import com.hussam.employeesmanagement.entity.Employee;
import com.hussam.employeesmanagement.entity.Gender;
import com.hussam.employeesmanagement.entity.User;
import com.hussam.employeesmanagement.exception.NotFoundException;
import com.hussam.employeesmanagement.exception.UserAlreadyExistException;
import com.hussam.employeesmanagement.repository.EmployeeRepository;
import com.hussam.employeesmanagement.security.userService.UserDetailsImp;
import com.hussam.employeesmanagement.security.util.GenerateEmpId;
import com.hussam.employeesmanagement.service.DepartmentService;
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

    @Autowired
    private DepartmentService departmentService;

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
    public void addEmployee(NewEmployeeRequest employee, UserDetailsImp userDetail) {
        User user = userService.getUserByUsername(userDetail.getUsername());
        if(employeeRepository.existsByEmail(employee.getEmail())){
            throw new UserAlreadyExistException("Failed!! Email is already exists ");
        }

        Department selectedDepartment = departmentService.getDepartmentByName(employee.getDepartment());
        if(selectedDepartment == null){
            throw new NotFoundException("Please enter a valid department name");
        }
        GenerateEmpId generateEmpId = new GenerateEmpId();
        String empId =  generateEmpId.empIdGenerator(employee.getFirstName(), employee.getLastName());
        Employee newEmployee = new Employee();

        newEmployee.setEmpId(empId);
        newEmployee.setFirstName(employee.getFirstName());
        newEmployee.setLastName(employee.getLastName());
        newEmployee.setSalary(employee.getSalary());
        newEmployee.setDob(employee.getDob());
        newEmployee.setEmail(employee.getEmail());
        newEmployee.setDepartment(selectedDepartment);
        if("male".equalsIgnoreCase(employee.getGender())){
            newEmployee.setGender(Gender.MALE);
        }else{
            newEmployee.setGender(Gender.FEMALE);
        }
        newEmployee.setUser(user);

        employeeRepository.save(newEmployee);
    }

    @Override
    public List<Employee> getAllEmployeesOfCurrentUser(UserDetailsImp userDetails) {
        User user = userService.getUserByUsername(userDetails.getUsername());

        return employeeRepository.getAllByUser(user);
    }

    @Override
    public void removeEmployeeById(Long id, UserDetailsImp userDetails) {
        User user = userService.getUserByUsername(userDetails.getUsername());
        Optional<Employee> employee = employeeRepository.findByIdAndUser(id, user);
        if(!employee.isPresent()){
            throw new NotFoundException("Error there is no employee with selected id");
            }
        employeeRepository.deleteById(id);
    }

    @Override
    public Employee updateEmployee(Long id, Employee employee, UserDetailsImp userDetails) {
        User user = userService.getUserByUsername(userDetails.getUsername());
        Optional<Employee> selectedEmployee = employeeRepository.findByIdAndUser(id, user);
        if(selectedEmployee.isPresent()){
            selectedEmployee.get().setFirstName(employee.getFirstName());
            selectedEmployee.get().setLastName(employee.getLastName());
            selectedEmployee.get().setEmail(employee.getEmail());
            selectedEmployee.get().setSalary(employee.getSalary());
        }

        return employeeRepository.save(selectedEmployee.get());
    }
}
