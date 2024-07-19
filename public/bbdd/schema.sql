DROP TABLE IF EXISTS user_posts;
DROP TABLE IF EXISTS user_reels;
DROP TABLE IF EXISTS post_tags;
DROP TABLE IF EXISTS reel_tags;
DROP TABLE IF EXISTS post_comments;
DROP TABLE IF EXISTS user_notifications;
DROP TABLE IF EXISTS user_stories;
DROP TABLE IF EXISTS user_messages;
DROP TABLE IF EXISTS post_likes;
DROP TABLE IF EXISTS message_likes;
DROP TABLE IF EXISTS reel_likes;
DROP TABLE IF EXISTS comment_likes;
DROP TABLE IF EXISTS story_likes;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS reels;
DROP TABLE IF EXISTS tags;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS notifications;
DROP TABLE IF EXISTS stories;
DROP TABLE IF EXISTS messages;
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    username TEXT,
    biography_name TEXT,
    biography_content TEXT,
    biography_url TEXT,
    profile_img TEXT,
    created_at TIMESTAMP
);

CREATE TABLE posts (
    id INTEGER PRIMARY KEY,
    title TEXT,
    url TEXT,
    status TEXT,
    created_at TIMESTAMP
);

CREATE TABLE user_posts (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    post_id INTEGER
);

CREATE TABLE reels (
    id INTEGER PRIMARY KEY,
    url TEXT,
    title TEXT,
    status TEXT,
    created_at TIMESTAMP
);

CREATE TABLE user_reels (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    reel_id INTEGER
);

CREATE TABLE tags (
    id INTEGER PRIMARY KEY,
    name TEXT
);

CREATE TABLE post_tags (
    id INTEGER PRIMARY KEY,
    post_id INTEGER,
    tag_id INTEGER
);

CREATE TABLE reel_tags (
    id INTEGER PRIMARY KEY,
    reel_id INTEGER,
    tag_id INTEGER
);

CREATE TABLE comments (
    id INTEGER PRIMARY KEY,
    content TEXT,
    created_at TIMESTAMP
);

CREATE TABLE post_comments (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    post_id INTEGER,
    comment_id INTEGER
);

CREATE TABLE notifications (
    id INTEGER PRIMARY KEY,
    content TEXT,
    created_at TIMESTAMP
);

CREATE TABLE user_notifications (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    notification_id INTEGER
);

CREATE TABLE stories (
    id INTEGER PRIMARY KEY,
    title TEXT,
    miniature_url TEXT,
    url TEXT,
    created_at TIMESTAMP
);

CREATE TABLE user_stories (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    story_id INTEGER
);

CREATE TABLE messages (
    id INTEGER PRIMARY KEY,
    content TEXT,
    created_at TIMESTAMP
);

CREATE TABLE user_messages (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    message_id INTEGER
);

CREATE TABLE post_likes (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    post_id INTEGER
);

CREATE TABLE message_likes (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    message_id INTEGER
);

CREATE TABLE reel_likes (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    reel_id INTEGER
);

CREATE TABLE comment_likes (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    comment_id INTEGER
);

CREATE TABLE story_likes (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    story_id INTEGER
);
