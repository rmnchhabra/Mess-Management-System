package com.example.model;


import lombok.*;

import javax.persistence.*;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
@ToString
@Entity
@Table
public class Studentdetails {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer studentid;
    private String name;
    private String email;
    private String password;
    private String role; //student,foodcom,manager
    private String course;
    private String rollno;



}
