package com.hussam.employeesmanagement.repository;

import com.hussam.employeesmanagement.entity.Role;
import com.hussam.employeesmanagement.entity.RoleType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {

    public Role findByRoleType(RoleType roleType);
}
