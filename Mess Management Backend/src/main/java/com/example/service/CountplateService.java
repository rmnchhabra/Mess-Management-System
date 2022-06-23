package com.example.service;

import com.example.dao.CountplatesRepository;
import com.example.model.Countplates;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class CountplateService {

    @Autowired
    private CountplatesRepository countplatesRepository;

    public List<Integer> fetchplatecount(){
//        List<Integer> res;
//
//        res=countplatesRepository.getcountofplates();
//        System.out.println(res);
//        return res;
        Integer b,l,d;
        b=countplatesRepository.getcountofbreakfast();
        l=countplatesRepository.getcountoflunch();
        d=countplatesRepository.getcountofdinner();
        List<Integer> res = new ArrayList<Integer>();
        res.add(b);
        res.add(l);
        res.add(d);
        return res;

    }

    public List<Integer> getPlatehistory(Integer studentid){
        return countplatesRepository.getcountofplateshistory(studentid);
    }

    public Countplates postPlate(Countplates countplates){
        Countplates c1=countplatesRepository.fetchCol(countplates.getStudentid());
        System.out.println(c1);
        c1.setBreakfast(countplates.getBreakfast());
        c1.setLunch(countplates.getLunch());
        c1.setDinner(countplates.getDinner());
       // c1.setFeedback(countplates.getFeedback());
        return countplatesRepository.save(c1);
    }

    //for dummy data store for testing purpose
    public void populate(){
        Countplates countplates = new Countplates(20,new Date(),1,0,0,1,1,3,"bhut bekar");
        countplatesRepository.save(countplates);
    }

}
