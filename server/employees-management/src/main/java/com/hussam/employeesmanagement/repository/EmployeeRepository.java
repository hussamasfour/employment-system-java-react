package com.hussam.employeesmanagement.repository;

import com.hussam.employeesmanagement.entity.Employee;
import com.hussam.employeesmanagement.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    List<Employee> getAllByUser(User user);


    Optional<Employee> findByIdAndUser(Long aLong, User user);

    void deleteByIdAndUser(Long id, User user);

    boolean existsByEmail(String email);
}
