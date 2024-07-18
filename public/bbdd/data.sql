-- Insert data into users
INSERT INTO users (id, username, biography_name, biography_content, biography_url, profile_img, created_at) VALUES
(1, 'john_doe', 'John Doe', 'Just a regular guy.', 'http://example.com/johndoe', 'https://robohash.org/exipsumquidem.png?size=50x50&set=set1', '2024-01-01 10:00:00'),
(2, 'jane_smith', 'Jane Smith', 'Love traveling and photography.', 'http://example.com/janesmith', 'https://robohash.org/exipsumquidem.png?size=50x50&set=set1', '2024-01-02 11:00:00');

-- Insert data into posts
INSERT INTO posts (id, title, url, status, created_at) VALUES
(1, 'First Post', 'https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'active', '2024-01-03 12:00:00'),
(2, 'Second Post', 'https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'active', '2024-01-04 13:00:00');

-- Insert data into user_posts
INSERT INTO user_posts (id, user_id, post_id) VALUES
(1, 1, 1),
(2, 2, 2);

-- Insert data into reels
INSERT INTO reels (id, url, title, status, created_at) VALUES
(1, 'https://images.pexels.com/photos/433989/pexels-photo-433989.jpeg', 'First Reel', 'active', '2024-01-05 14:00:00'),
(2, 'https://images.pexels.com/photos/433989/pexels-photo-433989.jpeg', 'Second Reel', 'active', '2024-01-06 15:00:00');

-- Insert data into user_reels
INSERT INTO user_reels (id, user_id, reel_id) VALUES
(1, 1, 1),
(2, 2, 2);

-- Insert data into tags
INSERT INTO tags (id, name) VALUES
(1, 'Travel'),
(2, 'Photography');

-- Insert data into post_tags
INSERT INTO post_tags (id, post_id, tag_id) VALUES
(1, 1, 1),
(2, 2, 2);

-- Insert data into reel_tags
INSERT INTO reel_tags (id, reel_id, tag_id) VALUES
(1, 1, 1),
(2, 2, 2);

-- Insert data into comments
INSERT INTO comments (id, content, created_at) VALUES
(1, 'Great post!', '2024-01-07 16:00:00'),
(2, 'Nice reel!', '2024-01-08 17:00:00');

-- Insert data into post_comments
INSERT INTO post_comments (id, user_id, post_id, comment_id) VALUES
(1, 1, 1, 1),
(2, 2, 2, 2);

-- Insert data into notifications
INSERT INTO notifications (id, content, created_at) VALUES
(1, 'You have a new follower.', '2024-01-09 18:00:00'),
(2, 'Your post received a like.', '2024-01-10 19:00:00');

-- Insert data into user_notifications
INSERT INTO user_notifications (id, user_id, notification_id) VALUES
(1, 1, 1),
(2, 2, 2);

-- Insert data into stories
INSERT INTO stories (id, url, created_at) VALUES
(1, 'http://example.com/story1', '2024-01-11 20:00:00'),
(2, 'http://example.com/story2', '2024-01-12 21:00:00');

-- Insert data into user_stories
INSERT INTO user_stories (id, user_id, story_id) VALUES
(1, 1, 1),
(2, 2, 2);

-- Insert data into messages
INSERT INTO messages (id, content, created_at) VALUES
(1, 'Hello!', '2024-01-13 22:00:00'),
(2, 'How are you?', '2024-01-14 23:00:00');

-- Insert data into user_messages
INSERT INTO user_messages (id, user_id, message_id) VALUES
(1, 1, 1),
(2, 2, 2);

-- Insert data into post_likes
INSERT INTO post_likes (id, user_id, post_id) VALUES
(1, 1, 1),
(2, 2, 2);

-- Insert data into message_likes
INSERT INTO message_likes (id, user_id, message_id) VALUES
(1, 1, 1),
(2, 2, 2);

-- Insert data into reel_likes
INSERT INTO reel_likes (id, user_id, reel_id) VALUES
(1, 1, 1),
(2, 2, 2);

-- Insert data into comment_likes
INSERT INTO comment_likes (id, user_id, comment_id) VALUES
(1, 1, 1),
(2, 2, 2);

-- Insert data into story_likes
INSERT INTO story_likes (id, user_id, story_id) VALUES
(1, 1, 1),
(2, 2, 2);
