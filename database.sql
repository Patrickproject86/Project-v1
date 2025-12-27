-- 创建数据库
CREATE DATABASE IF NOT EXISTS infectious_disease_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE infectious_disease_db;

-- 创建诊断记录表
CREATE TABLE diagnosis_records (
    id INT AUTO_INCREMENT PRIMARY KEY,
    symptoms JSON NOT NULL,
    result VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 创建用户反馈表
CREATE TABLE user_feedback (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    feedback TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);