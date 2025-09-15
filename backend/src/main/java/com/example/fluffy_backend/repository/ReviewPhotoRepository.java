package com.example.fluffy_backend.repository;

import com.example.fluffy_backend.model.ReviewPhoto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewPhotoRepository extends JpaRepository<ReviewPhoto, Integer> {
}
