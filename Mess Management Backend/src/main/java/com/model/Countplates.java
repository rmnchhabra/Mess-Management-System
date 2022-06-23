package com.example.model;


import lombok.*;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor

@Getter
@Setter
@ToString
@Entity
@Table
public class Countplates {

    @Id
    private Integer studentid;
    private Date date;

    private Integer breakfast;

    private Integer lunch;
    private Integer dinner;
    private Integer breakfastrating;
    private Integer lunchrating;
    private Integer dinnerrating;
    private String  feedback;

    }



