package com.example.dao;

import com.example.model.Instruction;
import com.example.model.Messtime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface InstructionRepository extends JpaRepository<Instruction,Integer> {
    @Query(value="select * from instruction where id=?1",
            nativeQuery = true)
    public Instruction findById1(Integer id);
}
