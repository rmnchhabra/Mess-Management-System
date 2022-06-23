package com.example.controller;

import com.example.model.Loginrequest;
import com.example.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin(origins ="*")
public class loginController {

    @Autowired
    private LoginService loginService;


    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Loginrequest loginrequest) throws Exception{
        System.out.println(loginrequest);
        return ResponseEntity.ok(loginService.SignIn_Service(loginrequest));
    }

}
