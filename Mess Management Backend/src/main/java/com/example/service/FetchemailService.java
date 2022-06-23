package com.example.service;

import com.example.dao.StudentdetailsRepository;
import com.example.model.Studentdetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FetchemailService {

    @Autowired
    private StudentdetailsRepository studentdetailsRepository;

    public List<String> fetchallemail(){
        return studentdetailsRepository.getallemails();
    }
}
