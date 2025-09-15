USE fluffy_test_0915;

-- -- 如果已存在，先刪掉避免重複
-- DROP TABLE IF EXISTS review_photos;
-- DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    author VARCHAR(100) NOT NULL,
    comment TEXT,
    rating INT CHECK (rating BETWEEN 1 AND 5),
    avatar_url VARCHAR(255),  -- 存大頭照的圖片 URL
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- 生活照：多張對一個 review
CREATE TABLE review_photos (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    review_id INT NOT NULL,
    photo_url VARCHAR(255) NOT NULL,
    FOREIGN KEY (review_id) REFERENCES reviews(id) ON DELETE CASCADE
);
