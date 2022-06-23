package com.example.service;

import com.example.dao.InstructionRepository;
import com.example.model.Instruction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PopulatedataService {

    @Autowired
    private InstructionRepository instructionRepository;

    public void populateinstruction(){
        Instruction instruction= new Instruction(1,"ghgjj","guhi","hukh","uiyhiu");
        instructionRepository.save(instruction);
    }
}
