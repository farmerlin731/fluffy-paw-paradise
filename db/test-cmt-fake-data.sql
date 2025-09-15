-- 插入假資料到 reviews
INSERT INTO reviews (author, comment, rating, avatar_url)
VALUES 
('Alice', '我的貓咪在這裡洗澡超開心！', 5, '/static/images/avatar_cat1.jpg'),
('Bob', '服務不錯，但等候時間有點長。', 3, '/static/images/avatar_dog1.jpg'),
('Cathy', '美容師超有耐心，狗狗很放鬆。', 4, '/static/images/avatar_dog2.jpg');

-- 插入假資料到 review_photos (一個 review 多張照片)
INSERT INTO review_photos (review_id, photo_url)
VALUES
(1, '/static/images/cat1_bath1.jpg'),
(1, '/static/images/cat1_bath2.jpg'),
(2, '/static/images/dog1_waiting.jpg'),
(3, '/static/images/dog2_before.jpg'),
(3, '/static/images/dog2_after.jpg');