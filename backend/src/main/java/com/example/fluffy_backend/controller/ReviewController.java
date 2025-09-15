package com.example.fluffy_backend.controller;


import com.example.fluffy_backend.model.Review;
import com.example.fluffy_backend.service.ReviewService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
@CrossOrigin(origins = "*")
public class ReviewController {
    private final ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @GetMapping
    public List<Review> getAll() {
        return reviewService.getAll();
    }

    @GetMapping("/{id}")
    public Review getById(@PathVariable Integer id) {
        return reviewService.getById(id);
    }

    @PostMapping
    public Review create(@RequestBody Review review) {
        return reviewService.create(review);
    }

    @PutMapping("/{id}")
    public Review update(@PathVariable Integer id, @RequestBody Review review) {
        return reviewService.update(id, review);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        reviewService.delete(id);
    }
}
