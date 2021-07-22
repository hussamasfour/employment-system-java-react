package com.hussam.employeesmanagement.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message ="Please enter a username")
    @Column(unique = true)
    @Pattern(regexp = "^[A-Za-z]\\w{5,29}$", message = "username is not valid")
    private String username;

    @Column(unique = true, updatable = false)
    private String email;
    @JsonIgnore
    @NotBlank(message = "Please enter a password")
    private String password;

    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name="role_id"))
    private Set<Role> listRole;

    @OneToMany(cascade = CascadeType.ALL )

    private List<Employee> employeeList;
}
