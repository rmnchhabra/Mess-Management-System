package com.example.dao;

import com.example.model.Countplates;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CountplatesRepository extends JpaRepository<Countplates, Integer> {


//    @Query(value = "select sum(breakfast),sum(lunch),sum(dinner) from countplates",
//    nativeQuery = true)
//    public List<Integer> getcountofplates();

    @Query(value = "select sum(breakfast) from countplates where date=curdate()",
            nativeQuery = true)
    public Integer getcountofbreakfast();

    @Query(value = "select sum(lunch) from countplates   ",
            nativeQuery = true)
    public Integer getcountoflunch();

    @Query(value = "select sum(dinner) from countplates where date=curdate()",
            nativeQuery = true)
    public Integer getcountofdinner();


    @Query(value = "select count(*) from countplates where breakfastrating=?1 " ,
        nativeQuery = true)
    public Integer getbybreakfastrating(Integer ratingNo);

    @Query(value = "select count(*) from countplates where lunchrating=?1",
            nativeQuery = true)
    public Integer getbylunchrating(Integer ratingNo);

    @Query(value = "select count(*) from countplates where dinnerrating=?1",

            nativeQuery = true)
    public Integer getbydinnerrating(Integer ratingNo);

//    @Query(
//            value="select sum(c.breakfast) as breakfast,sum(c.lunch) as l,sum(c.dinner) as d from countplates c",
//            nativeQuery = true
//    )
//    public List<Integer> getcountofplateshistory();



    @Query(
            value="select date,breakfast,lunch,dinner from countplates where studentid=?1",
            nativeQuery = true
    )
    public List<Integer> getcountofplateshistory(Integer studentid);

    @Query(
            value="select * from countplates c where c.studentid=?1",
            nativeQuery = true
    )
    public Countplates fetchCol(Integer req);

}
