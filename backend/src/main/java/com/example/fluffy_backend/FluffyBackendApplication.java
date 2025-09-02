package com.example.fluffy_backend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class FluffyBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(FluffyBackendApplication.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner() {
        return runner -> {
            System.out.println("Hello world :)");
        };
    }
}
