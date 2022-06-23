package com.example.model;

import lombok.*;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Getter
@Setter
@ToString
@Entity
@Table
public class Instruction {
    @Id
    private Integer id;
    private String instruction1;
    private String instruction2;
    private String instruction3;
    private String instruction4;
}
