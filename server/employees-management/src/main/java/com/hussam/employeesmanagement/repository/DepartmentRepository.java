package com.hussam.employeesmanagement.repository;

import com.hussam.employeesmanagement.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartmentRepository  extends JpaRepository<Department, Long> {

    public Department findDepartmentByDepartmentName(String name);
    public boolean existsDepartmentsByDepartmentName(String name);
}
