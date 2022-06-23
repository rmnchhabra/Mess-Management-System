package com.example.service;

import com.example.dao.StudentdetailsRepository;
import com.example.model.Loginrequest;
import com.example.model.Studentdetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private StudentdetailsRepository studentdetailsRepository;

    public Loginrequest SignIn_Service(Loginrequest loginrequest){
        Studentdetails studentdetails = studentdetailsRepository.findByEmail(loginrequest.getEmail());
        System.out.println(studentdetails);
        if(passwordEncoder.matches(loginrequest.getPassword(), studentdetails.getPassword()) && studentdetails.getRole().equals(loginrequest.getRole())){
            return loginrequest;
        }
        return loginrequest;
    }
}
