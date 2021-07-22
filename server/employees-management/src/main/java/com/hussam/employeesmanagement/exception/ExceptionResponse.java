package com.hussam.employeesmanagement.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Date;
import java.util.List;

@AllArgsConstructor
@Getter
public class ExceptionResponse {

    private Date timeStamp;
    private String title;
    private List<String> message;
    private String path;

}
