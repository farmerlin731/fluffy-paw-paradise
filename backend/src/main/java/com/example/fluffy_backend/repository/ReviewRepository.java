package com.example.fluffy_backend.repository;


import com.example.fluffy_backend.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Integer> {
}
