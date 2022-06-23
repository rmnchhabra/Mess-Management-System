package com.example.dao;

import com.example.model.Messtime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MesstimeRepository extends JpaRepository<Messtime, Integer> {

    @Query(value = "select * from messtime where id=1",

            nativeQuery = true)
    public List<Messtime> fetch();

    @Query(value = "select * from messtime where id=1",

            nativeQuery = true)
    public void savebyid(Messtime messtime);


    @Query(value="select * from messtime where id=?1",
    nativeQuery = true)
    public Messtime findById1(Integer id);

}
