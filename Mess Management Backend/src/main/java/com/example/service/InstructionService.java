package com.example.service;

import com.example.dao.InstructionRepository;
import com.example.model.Instruction;
import com.example.model.Messtime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class InstructionService {
    @Autowired
    private InstructionRepository instructionRepository;

    public Instruction updatemessInstruction(Instruction instruction){
        return instructionRepository.save(instruction);
    }

    public Instruction updatemessInstruction(Instruction instruction,Integer id)
    {
        Instruction b = instructionRepository.findById1(id);
        if(b == null) {
            System.out.println("entries not found");
            return null;
        }else {
            b.setInstruction1(instruction.getInstruction1());
            b.setInstruction2(instruction.getInstruction2());
            b.setInstruction3(instruction.getInstruction3());
            b.setInstruction4(instruction.getInstruction4());

            instructionRepository.save(b);
        }
        return instruction;
    }

    public Optional<Instruction> fetchInstruction(Integer id){
        return instructionRepository.findById(id);
    }


}
