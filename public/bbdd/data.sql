-- Insert data into users
INSERT INTO users (id, username, biography_name, biography_content, biography_url, profile_img, created_at) VALUES
(1, 'john_doe', 'John Doe', 'Just a regular guy.', 'http://example.com/johndoe', 'https://robohash.org/exipsumquidem.png?size=50x50&set=set1', '2024-01-01 10:00:00'),
(2, 'jane_smith', 'Jane Smith', 'Love traveling and photography.', 'http://example.com/janesmith', 'https://robohash.org/exipsumquidem.png?size=50x50&set=set1', '2024-01-02 11:00:00');

-- Insert data into posts
INSERT INTO posts (id, title, url, status, created_at) VALUES
(1, 'First Post', 'https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'active', '2024-01-03 12:00:00'),
(2, 'Second Post', 'https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'active', '2024-01-04 13:00:00'),
(3, 'Third Post', 'https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'active', '2024-01-15 10:00:00'),
(4, 'Fourth Post', 'https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'active', '2024-01-16 11:00:00'),
(5, 'Fifth Post', 'https://images.pexels.com/photos/345345/pexels-photo-345345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'active', '2024-01-17 12:00:00'),
(6, 'Sixth Post', 'https://images.pexels.com/photos/456456/pexels-photo-456456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'active', '2024-01-18 13:00:00'),
(7, 'Seventh Post', 'https://images.pexels.com/photos/567567/pexels-photo-567567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'active', '2024-01-19 14:00:00');

-- Insert data into user_posts
INSERT INTO user_posts (id, user_id, post_id) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 1, 3),
(4, 1, 4),
(5, 1, 5),
(6, 1, 6),
(7, 1, 7);

-- Insert data into reels
INSERT INTO reels (id, url, title, status, created_at) VALUES
(1, 'https://images.pexels.com/photos/433989/pexels-photo-433989.jpeg', 'First Reel', 'active', '2024-01-05 14:00:00'),
(2, 'https://images.pexels.com/photos/433989/pexels-photo-433989.jpeg', 'Second Reel', 'active', '2024-01-06 15:00:00'),
(3, 'https://images.pexels.com/photos/567567/pexels-photo-567567.jpeg', 'Third Reel', 'active', '2024-01-20 15:00:00'),
(4, 'https://images.pexels.com/photos/678678/pexels-photo-678678.jpeg', 'Fourth Reel', 'active', '2024-01-21 16:00:00'),
(5, 'https://images.pexels.com/photos/789789/pexels-photo-789789.jpeg', 'Fifth Reel', 'active', '2024-01-22 17:00:00'),
(6, 'https://images.pexels.com/photos/890890/pexels-photo-890890.jpeg', 'Sixth Reel', 'active', '2024-01-23 18:00:00'),
(7, 'https://images.pexels.com/photos/901901/pexels-photo-901901.jpeg', 'Seventh Reel', 'active', '2024-01-24 19:00:00');


-- Insert data into user_reels
INSERT INTO user_reels (id, user_id, reel_id) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 1, 3),
(4, 1, 4),
(5, 1, 5),
(6, 1, 6),
(7, 1, 7);

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
INSERT INTO notifications (id, user_id, action_type, action_user_id, related_entity_id, related_entity_type, content, created_at) VALUES
(1, 1, 'follow', 2, 1, 'user', 'You have a new follower.', '2024-01-09 18:00:00'),
(2, 1, 'like', 2, 1, 'post', 'Your post received a like.', '2024-01-10 19:00:00'),
(3, 1, 'like', 2, 1, 'story', 'Your story received a like.', '2024-02-01 10:00:00'),
(4, 1, 'comment', 2, 1, 'reel', 'Your reel received a comment.', '2024-02-01 11:00:00'),
(5, 1, 'follow', 2, 1, 'user', 'New follower: @user123', '2024-02-01 12:00:00'),
(6, 1, 'share', 2, 1, 'post', 'Your post was shared.', '2024-02-01 13:00:00'),
(7, 1, 'message', 2, 1, 'message', 'You have a new message.', '2024-02-01 14:00:00'),
(8, 1, 'mention', 2, 1, 'story', 'Your profile was mentioned in a story.', '2024-02-08 10:00:00'),
(9, 1, 'comment', 2, 1, 'post', 'New comment on your post.', '2024-02-08 11:00:00'),
(10, 1, 'follow', 2, 1, 'user', 'New follower: @user456', '2024-02-08 12:00:00'),
(11, 1, 'feature', 2, 1, 'reel', 'Your reel was featured.', '2024-02-08 13:00:00'),
(12, 1, 'comment', 2, 1, 'story', 'Your story received a comment.', '2024-02-08 14:00:00'),
(13, 1, 'like', 2, 1, 'post', 'Your post received multiple likes.', '2024-02-15 10:00:00'),
(14, 1, 'follow', 2, 1, 'user', 'New follower: @user789', '2024-02-15 11:00:00'),
(15, 1, 'mention', 2, 1, 'mention', 'You have a new mention.', '2024-02-15 12:00:00'),
(16, 1, 'share', 2, 1, 'story', 'Your story was shared.', '2024-02-15 13:00:00'),
(17, 1, 'review', 2, 1, 'profile', 'Your profile received a review.', '2024-02-15 14:00:00');

-- Insert data into stories
INSERT INTO stories (id, title, url, miniature_url, created_at) VALUES
(1, 'Valencia', 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg', 'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg', '2024-01-11 20:00:00'),
(2, 'Madrid', 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg', 'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg', '2024-01-12 21:00:00'),
(3, 'Barcelona', 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg', 'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg', '2024-01-13 22:00:00'),
(4, 'Sevilla', 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg', 'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg', '2024-01-14 23:00:00'),
(5, 'Granada', 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg', 'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg', '2024-01-15 22:00:00'),
(6, 'Bilbao', 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg', 'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg', '2024-01-16 23:00:00'),
(7, 'Malaga', 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg', 'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg', '2024-01-17 22:00:00'),
(8, 'Zaragoza', 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg', 'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg', '2024-01-18 23:00:00'),
(9, 'Salamanca', 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg', 'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg', '2024-01-19 22:00:00'),
(10, 'Valencia', 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg', 'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg', '2024-01-20 23:00:00'),
(11, 'Madrid', 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg', 'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg', '2024-01-21 22:00:00'),
(12, 'Cordoba', 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg', 'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg', '2024-01-22 23:00:00');

-- Insert data into user_stories
INSERT INTO user_stories (id, user_id, story_id) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 1, 3),
(4, 1, 4),
(5, 1, 5),
(6, 1, 6),
(7, 1, 7),
(8, 1, 8),
(9, 1, 9),
(10, 1, 10),
(11, 1, 11),
(12, 1, 12);

-- Insert data into messages
INSERT INTO messages (id, user_id, action_user_id, content, created_at, read) VALUES
(1, 1, 2, 'Hello!', '2024-01-13 22:00:00', FALSE),
(2, 1, 2, 'How are you?', '2024-01-14 23:00:00', FALSE),
(3, 1, 2, 'What´s up?', '2024-01-15 09:00:00', FALSE),
(4, 1, 2, 'See you soon!', '2024-01-16 10:00:00', FALSE),
(5, 1, 2, 'Good morning!', '2024-01-17 08:00:00', FALSE),
(6, 1, 2, 'Let’s meet up later.', '2024-01-18 12:00:00', FALSE),
(7, 1, 2, 'Can you call me?', '2024-01-19 14:00:00', FALSE),
(8, 1, 2, 'Happy Birthday!', '2024-01-20 16:00:00', FALSE),
(9, 1, 2, 'Congratulations!', '2024-01-21 18:00:00', FALSE),
(10, 1, 2, 'Good night!', '2024-01-22 20:00:00', FALSE);


-- Insert data into post_likes
INSERT INTO post_likes (id, user_id, post_id) VALUES
(1, 1, 1),
(2, 2, 2);
-- Insert data into message_likes
INSERT INTO message_likes (id, user_id, message_id) VALUES
(1, 2, 1),
(2, 2, 2),
(3, 2, 3),
(4, 2, 4),
(5, 2, 5),
(6, 2, 6),
(7, 2, 7),
(8, 2, 8),
(9, 2, 9),
(10, 2, 10);

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
