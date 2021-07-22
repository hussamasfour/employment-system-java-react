package com.hussam.employeesmanagement.exception;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import javax.validation.ConstraintViolationException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@ControllerAdvice
public class CustomizedExceptionHandler extends ResponseEntityExceptionHandler {
    @ExceptionHandler(Exception.class)
    public final ResponseEntity<ExceptionResponse> handleAllException(Exception ex, WebRequest webRequest){
        List<String> details =  new ArrayList<>();
        details.add(ex.getLocalizedMessage());
        ExceptionResponse exceptionResponse = new ExceptionResponse(new Date(),"Internal Server Error" ,details, webRequest.getDescription(false));

        return new ResponseEntity(exceptionResponse, new HttpHeaders(), HttpStatus.INTERNAL_SERVER_ERROR);
        }

    @ExceptionHandler(NotFoundException.class)
    public final ResponseEntity<ExceptionResponse> handleNotFoundException(NotFoundException ex, WebRequest webRequest){
        List<String> details = new ArrayList<>();
        details.add(ex.getLocalizedMessage());
        ExceptionResponse exceptionResponse = new ExceptionResponse(new Date(),"Record is Not Found" ,details, webRequest.getDescription(false));

        return new ResponseEntity(exceptionResponse, new HttpHeaders(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(InvalidArgumentException.class)
    public final ResponseEntity<ExceptionResponse> handleInvalidArgumentExceptions(
            InvalidArgumentException ex,  WebRequest webRequest) {
        List<String> details = new ArrayList<>();
        details.add( ex.getLocalizedMessage());
        ExceptionResponse exceptionResponse=  new ExceptionResponse(new Date(), "Validation Failed", details,webRequest.getDescription(false) );
        return new ResponseEntity(exceptionResponse, new HttpHeaders(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(ConstraintViolationException.class)
    public final ResponseEntity<Object> handleConstraintViolationExceptions(
            ConstraintViolationException ex) {
        String exceptionResponse = String.format("Invalid input parameters: %s\n", ex.getMessage());
        return new ResponseEntity(exceptionResponse, HttpStatus.BAD_REQUEST);
    }

}
