package com.example.service;

import com.example.dao.StudentdetailsRepository;
import com.example.model.Countplates;
import com.example.model.Studentdetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class StudentdetailspopulateService {

    @Autowired
    StudentdetailsRepository studentdetailsRepository;
    public void populate(){
        Studentdetails studentdetails = new Studentdetails(2,"nikunj","njkhakhkhar@gmail.com","123","stdent","mtech","MT2021136");
        System.out.println(studentdetails);
        studentdetailsRepository.save(studentdetails);
    }
}
