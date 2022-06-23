package com.example.model;


import lombok.*;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter

public class Loginrequest {
    private String email;
    private String password;
    private String role;
}
