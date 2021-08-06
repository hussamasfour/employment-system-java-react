package com.hussam.employeesmanagement.service.impl;

import com.hussam.employeesmanagement.entity.Department;
import com.hussam.employeesmanagement.exception.UserAlreadyExistException;
import com.hussam.employeesmanagement.repository.DepartmentRepository;
import com.hussam.employeesmanagement.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DepartmentServiceImpl implements DepartmentService {
    @Autowired
    private DepartmentRepository departmentRepository;

    @Override
    public Department getDepartmentByName(String name) {
        return departmentRepository.findDepartmentByDepartmentName(name);
    }

    @Override
    public void addDepartment(Department department) {
        if(departmentRepository.existsDepartmentsByDepartmentName(department.getDepartmentName())){
            throw new UserAlreadyExistException("Department " + department.getDepartmentName()+ " already exists!!");
        }

        departmentRepository.save(department);
    }
}
