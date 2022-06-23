package com.example.controller;

import com.example.model.Foodmenu;
import com.example.model.Instruction;
import com.example.model.Messtime;
import com.example.service.InstructionService;
import com.example.service.MenuService;
import com.example.service.PopulatedataService;
import com.example.service.TimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
public class foodcomController {

    @Autowired
    private PopulatedataService populatedataService;
    @Autowired
    private TimeService timeService;

    @Autowired
    private InstructionService instructionService;

    @Autowired
    private MenuService menuService;

    @PutMapping("/updateTime/{id}")
    public Messtime updateTime(@RequestBody Messtime messtime, @PathVariable("id") Integer id) {
        return timeService.updatemessTime(messtime, id);
    }


    @PutMapping("/updateInstruction/{id}")
    public ResponseEntity<?> updateInstruction(@RequestBody Instruction instruction, @PathVariable("id") Integer id) {
        return ResponseEntity.ok(instructionService.updatemessInstruction(instruction, id));
    }

    @PostMapping("/updateMenu")
    public ResponseEntity<?> updateMenu(@RequestBody Foodmenu foodmenu) {
        return ResponseEntity.ok(menuService.updateFoodMenu(foodmenu));
    }

    @PostMapping("/populatemesstime")
    public ResponseEntity<?> populatemesstime() {
        timeService.populatemesstime();
        return ResponseEntity.ok("Working");
    }

    @PostMapping("/populateinstruction")
    public ResponseEntity<?> populateinstruction() {
        populatedataService.populateinstruction();
        return ResponseEntity.ok("Working");
    }
}
