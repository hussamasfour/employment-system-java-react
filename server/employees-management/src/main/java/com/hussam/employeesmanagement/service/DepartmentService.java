package com.hussam.employeesmanagement.service;

import com.hussam.employeesmanagement.entity.Department;

public interface DepartmentService {

    public  Department getDepartmentByName(String name);

    public void addDepartment (Department name);
}
