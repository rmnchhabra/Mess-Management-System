package com.example.schedular;

import com.example.service.EmailService;
import com.example.service.FetchemailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class Schedulemail {

  @Autowired
  private EmailService emailservice;

  @Autowired
  private FetchemailService fetchemailService;

    @Scheduled(cron = "0 0 22 * * *")
    public void sentnotification()
    {
        System.out.println("working");
       String subject ="set your Meal";
       String message="If You have not selected Your meal, Please Fill it before 12:01 am";
      List<String> email= fetchemailService.fetchallemail();
        for (int i = 0; i < email.size(); i++) {
            String to= email.get(i);
            emailservice.sendEmail(subject,message,to);
        }


    }





}
