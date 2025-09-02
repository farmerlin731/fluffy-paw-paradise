package com.example.fluffy_backend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

@Controller
public class HomeController {

    @GetMapping("/")
    public String welcome(Model model) {
        // 傳送一些測試資料到 Thymeleaf
        System.out.println(">>> Entered welcome controller");

        model.addAttribute("appName", "My Spring Boot Dashboard");
        model.addAttribute("now", LocalDateTime.now());
        model.addAttribute("welcomeMessage", "Welcome to your backend system!");

        List<String> features = Arrays.asList("User Management", "Analytics", "Settings", "Logout");
        model.addAttribute("features", features);

        return "welcome";  // 對應到 templates/welcome.html
    }
}
