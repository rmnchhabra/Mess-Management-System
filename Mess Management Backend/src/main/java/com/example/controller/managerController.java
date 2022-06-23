package com.example.controller;

import com.example.service.CountplateService;
import com.example.service.RateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
public class managerController {

    @Autowired
    private CountplateService countplateservice;

    @Autowired
    private RateService rateService;

    @GetMapping("/getCountplates")
    public ResponseEntity<?> getCountplates(){
        return ResponseEntity.ok(countplateservice.fetchplatecount());
    }


    @GetMapping("/getRating/{id}")
    public ResponseEntity<?> getRating(@PathVariable("id") Integer id){
        return ResponseEntity.ok(rateService.fetchRate(id));
    }



//    @GetMapping("/getmenu/{day}")
//    public ResponseEntity<?> getMenubyday(@PathVariable("day") String day){
//        return ResponseEntity.ok(menuService.getMenubyday(day));
//    }


}
