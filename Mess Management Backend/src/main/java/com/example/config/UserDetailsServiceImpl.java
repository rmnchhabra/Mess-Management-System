package com.example.config;

import com.example.dao.StudentdetailsRepository;
import com.example.model.Studentdetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private StudentdetailsRepository studentdetailsRepository;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Studentdetails studentdetails=studentdetailsRepository.findByName(username);
        if(studentdetails==null){
            throw new UsernameNotFoundException("No User Found!!");
        }
        CustomUserDetails customUserDetails=new CustomUserDetails(studentdetails);
        return customUserDetails;
    }
}