DROP TABLE IF EXISTS user_posts;
DROP TABLE IF EXISTS user_reels;
DROP TABLE IF EXISTS post_tags;
DROP TABLE IF EXISTS reel_tags;
DROP TABLE IF EXISTS post_comments;
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
  id integer PRIMARY KEY,
  username varchar(255),
  biography_name varchar(255),
  biography_content varchar(255),
  biography_url varchar(255),
  profile_img varchar(255),
  created_at timestamp
);

CREATE TABLE posts (
  id integer PRIMARY KEY,
  title varchar(255),
  url varchar(255),
  status varchar(255),
  created_at timestamp
);

CREATE TABLE user_posts (
  id integer PRIMARY KEY,
  user_id integer,
  post_id integer
);

CREATE TABLE reels (
  id integer PRIMARY KEY,
  url varchar(255),
  title varchar(255),
  status varchar(255),
  created_at timestamp
);

CREATE TABLE user_reels (
  id integer PRIMARY KEY,
  user_id integer,
  reel_id integer
);

CREATE TABLE tags (
  id integer PRIMARY KEY,
  name varchar(255)
);

CREATE TABLE post_tags (
  id integer PRIMARY KEY,
  post_id integer,
  tag_id integer
);

CREATE TABLE reel_tags (
  id integer PRIMARY KEY,
  reel_id integer,
  tag_id integer
);

CREATE TABLE comments (
  id integer PRIMARY KEY,
  content varchar(255),
  created_at timestamp
);

CREATE TABLE post_comments (
  id integer PRIMARY KEY,
  user_id integer,
  post_id integer,
  comment_id integer
);

CREATE TABLE notifications (
  id integer PRIMARY KEY,
  user_id integer,
  action_type varchar(255),
  action_user_id integer,
  related_entity_id integer,
  related_entity_type varchar(255),
  content varchar(255),
  created_at timestamp,
  read bool
);

CREATE TABLE stories (
  id integer PRIMARY KEY,
  title varchar(255),
  url varchar(255),
  miniature_url varchar(255),
  created_at timestamp
);

CREATE TABLE user_stories (
  id integer PRIMARY KEY,
  user_id integer,
  story_id integer
);

CREATE TABLE messages (
  id integer PRIMARY KEY,
  user_id integer,
  action_user_id integer,
  content varchar(255),
  created_at timestamp,
  read bool
);

CREATE TABLE post_likes (
  id integer PRIMARY KEY,
  user_id integer,
  post_id integer
);

CREATE TABLE message_likes (
  id integer PRIMARY KEY,
  user_id integer,
  message_id integer
);

CREATE TABLE reel_likes (
  id integer PRIMARY KEY,
  user_id integer,
  reel_id integer
);

CREATE TABLE comment_likes (
  id integer PRIMARY KEY,
  user_id integer,
  comment_id integer
);

CREATE TABLE story_likes (
  id integer PRIMARY KEY,
  user_id integer,
  story_id integer
);
