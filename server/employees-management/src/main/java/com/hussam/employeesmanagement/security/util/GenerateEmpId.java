package com.hussam.employeesmanagement.security.util;

import java.util.Random;

public class GenerateEmpId {

    public String empIdGenerator (String firstName, String lastName){
        Random random = new Random();
        String part1 = firstName.substring(0,3);
        String part2 = lastName.substring(0,3);
        String part3 = part1 + "0" + part2;
        int part4 =random.nextInt((999-100) +1 ) +100;

        return part3 + part4;
    }
}
