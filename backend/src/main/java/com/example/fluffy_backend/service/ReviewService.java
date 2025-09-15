package com.example.fluffy_backend.service;

import com.example.fluffy_backend.model.Review;
import com.example.fluffy_backend.repository.ReviewRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {
    private final ReviewRepository reviewRepository;

    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    public List<Review> getAll() {
        return reviewRepository.findAll();
    }

    public Review getById(Integer id) {
        return reviewRepository.findById(id).orElse(null);
    }

    public Review create(Review review) {
        // Cascade 設定會自動存入 photos
        review.getPhotos().forEach(photo -> photo.setReview(review));
        return reviewRepository.save(review);
    }

    public Review update(Integer id, Review reviewData) {
        return reviewRepository.findById(id)
                .map(existing -> {
                    existing.setAuthor(reviewData.getAuthor());
                    existing.setComment(reviewData.getComment());
                    existing.setRating(reviewData.getRating());
                    existing.setAvatarUrl(reviewData.getAvatarUrl());
                    existing.getPhotos().clear();
                    reviewData.getPhotos().forEach(photo -> {
                        photo.setReview(existing);
                        existing.getPhotos().add(photo);
                    });
                    return reviewRepository.save(existing);
                })
                .orElse(null);
    }

    public void delete(Integer id) {
        reviewRepository.deleteById(id);
    }
}

