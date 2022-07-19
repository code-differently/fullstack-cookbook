package com.chambers.employeemgrserver.domain.employee.models;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class EmployeeTest {

    @Test
    public void constructorTest01(){
        Employee employee = new Employee("Demo","User", "demo@user.com");
        employee.setId(1l);

        String expected = "1 Demo User demo@user.com";
        String actual = employee.toString();

        Assertions.assertEquals(expected, actual);
    }
}
