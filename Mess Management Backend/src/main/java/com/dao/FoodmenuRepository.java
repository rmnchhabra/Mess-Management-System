package com.example.dao;

import com.example.model.Countplates;
import com.example.model.Foodmenu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FoodmenuRepository extends JpaRepository<Foodmenu,Integer> {
    public List<Foodmenu> getFoodmenuByDays(String day);
}
