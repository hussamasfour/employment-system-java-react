package com.hussam.employeesmanagement.exception;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
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

    @ExceptionHandler(UserAlreadyExistException.class)
    public final ResponseEntity<ExceptionResponse> handleUserAlreadyExistExceptions(
            UserAlreadyExistException ex,  WebRequest webRequest) {
        List<String> details = new ArrayList<>();
        details.add( ex.getLocalizedMessage());
        ExceptionResponse exceptionResponse=  new ExceptionResponse(new Date(), "Validation Failed", details,webRequest.getDescription(false) );
        return new ResponseEntity(exceptionResponse, new HttpHeaders(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(TokenRefreshException.class)
    public final ResponseEntity<ExceptionResponse> handleTokenRefreshExceptions(
            TokenRefreshException ex,  WebRequest webRequest) {
        List<String> details = new ArrayList<>();
        details.add( ex.getLocalizedMessage());
        ExceptionResponse exceptionResponse=  new ExceptionResponse(new Date(), "Validation Failed", details,webRequest.getDescription(false) );
        return new ResponseEntity(exceptionResponse, new HttpHeaders(), HttpStatus.FORBIDDEN);
    }

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatus status, WebRequest webRequest) {

        List<String > details = new ArrayList<>();
        for (ObjectError error: ex.getBindingResult().getAllErrors()){
            details.add(error.getDefaultMessage());
        }
        ExceptionResponse exceptionResponse =  new ExceptionResponse(new Date(), "Validation Failed", details,webRequest.getDescription(false) );
        return  new ResponseEntity<>(exceptionResponse, headers, HttpStatus.BAD_REQUEST);
    }
}
