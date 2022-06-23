package com.example.service;

import com.example.dao.MesstimeRepository;
import com.example.model.Countplates;
import com.example.model.Messtime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TimeService {

    @Autowired
    private MesstimeRepository messtimeRepository;



    public Messtime  updatemessTime(Messtime messtime,Integer id)
    {
        Messtime b = messtimeRepository.findById1(id);
        if(b == null) {
            System.out.println("entries not found");
            return null;
        }else {
            b.setBreakfastin(messtime.getBreakfastin());
            b.setBreakfastout(messtime.getBreakfastout());
            b.setLunchin(messtime.getLunchin());
            b.setLunchout(messtime.getLunchout());
            b.setDinnerin(messtime.getDinnerin());
            b.setDinnerout(messtime.getDinnerout());
            messtimeRepository.save(b);
        }
                return messtime;
    }
    public List<Messtime> fetchTime(){
        return messtimeRepository.fetch();
    }


    public void populatemesstime(){
        Messtime messtime= new Messtime(1,2.3,2.4,3.5,5.6,5.6,4.5);
        messtimeRepository.save(messtime);
    }
}
