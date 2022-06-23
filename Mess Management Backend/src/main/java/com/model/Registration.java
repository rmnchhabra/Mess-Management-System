package com.example.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Data
public class Registration {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @NotBlank(message="Name required")
    @Size(min=2, max = 20, message = "min 2 and max 20 characters are allowed !!")
    private String username;
    private String password;
    @Email
    private String email;
    private String role;

}
