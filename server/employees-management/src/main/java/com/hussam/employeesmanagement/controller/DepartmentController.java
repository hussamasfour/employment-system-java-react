package com.hussam.employeesmanagement.controller;

import com.hussam.employeesmanagement.entity.Department;
import com.hussam.employeesmanagement.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/dpt")
public class DepartmentController {
    @Autowired
    private DepartmentService departmentService;
    @PostMapping("/add")
    public ResponseEntity<?> addDepartment(@Valid @RequestBody Department departmentName){
        departmentService.addDepartment(departmentName);
        return new ResponseEntity<>("Department created",HttpStatus.CREATED);
    }
}
