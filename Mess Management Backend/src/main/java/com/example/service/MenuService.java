package com.example.service;

import com.example.dao.FoodmenuRepository;
import com.example.dao.MesstimeRepository;
import com.example.model.Foodmenu;
import com.example.model.Instruction;
import com.example.model.Messtime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuService {

    @Autowired
    private FoodmenuRepository foodmenuRepository;

    public Foodmenu updateFoodMenu(Foodmenu foodmenu){
        return foodmenuRepository.save(foodmenu);
    }



    public List<Foodmenu> fetchTodaymenu(){
        return foodmenuRepository.findAll();
    }

    public List<Foodmenu> getMenubyday(String days) {
        return foodmenuRepository.getFoodmenuByDays(days);
    }

}
