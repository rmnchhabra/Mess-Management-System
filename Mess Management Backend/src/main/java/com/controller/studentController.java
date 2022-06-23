package com.example.controller;

import com.example.model.Countplates;
import com.example.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
public class studentController {

    @Autowired
    private TimeService timeService;

    @Autowired
    private InstructionService instructionService;

    @Autowired
    private MenuService menuService;

    @Autowired
    private CountplateService countplateservice;

    @Autowired
    private RateService rateService;

    @Autowired
    private StudentdetailspopulateService studentdetailspopulateService;

    @GetMapping("/getMesstime")
    public ResponseEntity<?> getMesstime(){
        return ResponseEntity.ok(timeService.fetchTime());
    }

    @GetMapping("/getInstruction/{id}")
    public ResponseEntity<?> getInstruction(@PathVariable("id") Integer id){
        return ResponseEntity.ok(instructionService.fetchInstruction(id));
    }

    @GetMapping("/getTodaymenu")
    public ResponseEntity<?> getTodaymenu(){
        return ResponseEntity.ok(menuService.fetchTodaymenu());
    }

    @GetMapping("/getmenu/{day}")
    public ResponseEntity<?> getMenubyday(@PathVariable("day") String day){
        return ResponseEntity.ok(menuService.getMenubyday(day));
    }

    @GetMapping("/history/{id}")
    public ResponseEntity<?> getHistory(@PathVariable("id") Integer id){
        return ResponseEntity.ok(countplateservice.getPlatehistory(id));
    }

//    requestmapping used when we r sending more than 1 column hv to save
    @PostMapping("/postplatecount")
    public ResponseEntity<?> postPlatecount(@RequestBody Countplates countplates){
        return ResponseEntity.ok(countplateservice.postPlate(countplates));
    }
    @PostMapping("/postrating")
    public ResponseEntity<?> postuserRating(@RequestBody Countplates countplates){
        return ResponseEntity.ok(rateService.postRating(countplates));
    }


    //for data store (testing purpose)
    @PostMapping("/populate")
    public ResponseEntity<?> populate(){
        countplateservice.populate();
        return ResponseEntity.ok("Working");
    }

    @PostMapping("/populatestudententries")
    public ResponseEntity<?> populatestudententries(){
        studentdetailspopulateService.populate();
        return ResponseEntity.ok("Working");
    }
}
