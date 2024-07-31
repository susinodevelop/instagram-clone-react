-- Insert data into users
INSERT INTO users (id, username, biography_name, biography_content, biography_url, profile_img, created_at) VALUES
(1, 'john_doe', 'John Doe', 'Just a regular guy.', 'http://example.com/johndoe', 'https://img.freepik.com/foto-gratis/hombre-feliz-pie-playa_107420-9868.jpg?t=st=1721515433~exp=1721519033~hmac=86b45d4b412fb7999dc4dbcda3db98ab99f7b6970438941c228c977d03b6ddad&w=1480', '2024-01-01 10:00:00'),
(2, 'jane_smith', 'Jane Smith', 'Love traveling and photography.', 'http://example.com/janesmith', 'https://img.freepik.com/foto-gratis/chica-agradable-cabello-castano-brillante-sonriendo-foto-interior-dama-caucasica-pie-brazos-cruzados_197531-9395.jpg?t=st=1721515494~exp=1721519094~hmac=2c800c4f55143a987db3ce85f0a53ff8d56428514340f8c2935645620190cf6f&w=1480', '2024-01-02 11:00:00');

-- Insert data into posts
INSERT INTO posts (id, description, url, status, created_at, user_owner_id) VALUES
(1, 'El horizonte despertando. 🌆✨ Mientras la ciudad duerme, el sol le da un beso de buenos días. #AmanecerUrbano #CiudadDespierta', 'https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'active', '2024-01-03 12:00:00', 1),
(2, 'Momentos de tranquilidad ☕💭 Empezando el día con mi imprescindible taza de café y mil planes por delante. ¿Cuál es tu ritual matutino? #CaféYContemplación', 'https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'active', '2024-01-04 13:00:00', 1),
(3, 'Carretera abierta, música alta 🚗🎶 Nuestro destino es el viaje mismo. ¿A dónde te llevaría tu carretera ideal? #AventuraSobreRuedas', 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'active', '2024-01-15 10:00:00', 1),
(4, 'Risas, juegos y buenos amigos 🎲🍕 ¿Qué más se puede pedir para un sábado por la noche? Etiqueta a tu equipo de juegos insuperable. #NocheDeJuegos', 'https://images.pexels.com/photos/158607/cairn-fog-mystical-background-158607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'active', '2024-01-16 11:00:00', 1),
(5, 'Perdido entre páginas 📚💡 Un buen libro es un portal a otro mundo. ¿Cuál es tu escape literario favorito? #AmantesDeLaLectura', 'https://images.pexels.com/photos/345345/pexels-photo-345345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'active', '2024-01-17 12:00:00', 1),
(6, 'Día de picnic, corazón contento 🍉🌳 Compartiendo risas y bocados bajo el sol. ¿Qué no puede faltar en tu canasta de picnic? #DíasDeParque', 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'active', '2024-01-18 13:00:00', 1),
(7, 'Energía al amanecer 🏃‍♂️🌅 Empezar el día moviéndome me carga de energía para todo lo que viene. ¿Y tú, cómo activas tu mañana? #RutinaSaludable', 'https://images.pexels.com/photos/567567/pexels-photo-567567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'active', '2024-01-19 14:00:00', 1);


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
INSERT INTO reels (id, url, title, status, created_at, user_owner_id) VALUES
(1, 'https://3vncmxpbop8djord.public.blob.vercel-storage.com/reel_city-j2zBPny7f3HSsGlMZc3TbNzuFx6JjG.mp4', 'First Reel', 'active', '2024-01-05 14:00:00', 1),
(2, 'https://3vncmxpbop8djord.public.blob.vercel-storage.com/reel_heart-h9eTIYaUlIppukR3Yj6m28FaTZB7Kd.mp4', 'Second Reel', 'active', '2024-01-06 15:00:00', 1),
(3, 'https://3vncmxpbop8djord.public.blob.vercel-storage.com/reel_mexican-4zXyuBpSrmrxQHAKgNbHsszzD6Floe.mp4', 'Third Reel', 'active', '2024-01-20 15:00:00', 1),
(4, 'https://3vncmxpbop8djord.public.blob.vercel-storage.com/reel_road-l04xvOFbPR6EgTc3cmNNEy4XUx0pPb.mp4', 'Fourth Reel', 'active', '2024-01-21 16:00:00', 1),
(5, 'https://3vncmxpbop8djord.public.blob.vercel-storage.com/reel_sunshine-zQRBjoSv2sdc80UmCtT7ZowwPCihpo.mp4', 'Fifth Reel', 'active', '2024-01-22 17:00:00', 1),
(6, 'https://3vncmxpbop8djord.public.blob.vercel-storage.com/reel_city-j2zBPny7f3HSsGlMZc3TbNzuFx6JjG.mp4', 'Sixth Reel', 'active', '2024-01-23 18:00:00', 1),
(7, 'https://3vncmxpbop8djord.public.blob.vercel-storage.com/reel_heart-h9eTIYaUlIppukR3Yj6m28FaTZB7Kd.mp4', 'Seventh Reel', 'active', '2024-01-24 19:00:00', 1);

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
INSERT INTO comments (id, content, created_at, user_owner_id) VALUES
(3, 'Amazing view!', '2024-02-10 14:00:00', 1),
(4, 'Love the colors!', '2024-02-10 14:05:00', 2),
(5, 'So beautiful!', '2024-02-10 14:10:00', 1),
(6, 'Great shot!', '2024-02-10 14:15:00', 2),
(7, 'Impressive!', '2024-02-10 14:20:00', 1),
(8, 'Wonderful!', '2024-02-10 14:25:00', 2),
(9, 'Fantastic!', '2024-02-10 14:30:00', 1),
(10, 'So cool!', '2024-02-10 14:35:00', 2),
(11, 'I love it!', '2024-02-10 14:40:00', 1),
(12, 'Absolutely stunning!', '2024-02-10 14:45:00', 2),

(13, 'Nice capture!', '2024-02-10 15:00:00', 1),
(14, 'Beautiful scene!', '2024-02-10 15:05:00', 2),
(15, 'Great composition!', '2024-02-10 15:10:00', 1),
(16, 'Lovely!', '2024-02-10 15:15:00', 2),
(17, 'Stunning shot!', '2024-02-10 15:20:00', 1),
(18, 'Gorgeous!', '2024-02-10 15:25:00', 2),
(19, 'Perfect timing!', '2024-02-10 15:30:00', 1),
(20, 'Breathtaking!', '2024-02-10 15:35:00', 2),
(21, 'Incredible!', '2024-02-10 15:40:00', 1),
(22, 'Astonishing!', '2024-02-10 15:45:00', 2),

(23, 'Fantastic view!', '2024-02-10 16:00:00', 1),
(24, 'Amazing detail!', '2024-02-10 16:05:00', 2),
(25, 'Love this shot!', '2024-02-10 16:10:00', 1),
(26, 'Spectacular!', '2024-02-10 16:15:00', 2),
(27, 'Wonderful colors!', '2024-02-10 16:20:00', 1),
(28, 'Beautiful!', '2024-02-10 16:25:00', 2),
(29, 'Stunning photo!', '2024-02-10 16:30:00', 1),
(30, 'Great light!', '2024-02-10 16:35:00', 2),
(31, 'Fantastic framing!', '2024-02-10 16:40:00', 1),
(32, 'Lovely perspective!', '2024-02-10 16:45:00', 2),

(33, 'Great angle!', '2024-02-10 17:00:00', 1),
(34, 'So serene!', '2024-02-10 17:05:00', 2),
(35, 'Love the texture!', '2024-02-10 17:10:00', 1),
(36, 'So peaceful!', '2024-02-10 17:15:00', 2),
(37, 'Amazing capture!', '2024-02-10 17:20:00', 1),
(38, 'Stunning clarity!', '2024-02-10 17:25:00', 2),
(39, 'Beautifully shot!', '2024-02-10 17:30:00', 1),
(40, 'So vibrant!', '2024-02-10 17:35:00', 2),
(41, 'Fantastic scene!', '2024-02-10 17:40:00', 1),
(42, 'Incredible detail!', '2024-02-10 17:45:00', 2),

(43, 'Love the mood!', '2024-02-10 18:00:00', 1),
(44, 'Great atmosphere!', '2024-02-10 18:05:00', 2),
(45, 'So dramatic!', '2024-02-10 18:10:00', 1),
(46, 'Fantastic depth!', '2024-02-10 18:15:00', 2),
(47, 'Beautifully framed!', '2024-02-10 18:20:00', 1),
(48, 'Lovely shot!', '2024-02-10 18:25:00', 2),
(49, 'Wonderful capture!', '2024-02-10 18:30:00', 1),
(50, 'Great contrast!', '2024-02-10 18:35:00', 2),
(51, 'Perfect light!', '2024-02-10 18:40:00', 1),
(52, 'Love this angle!', '2024-02-10 18:45:00', 2),

(53, 'So calm!', '2024-02-10 19:00:00', 1),
(54, 'Fantastic!', '2024-02-10 19:05:00', 2),
(55, 'Amazing!', '2024-02-10 19:10:00', 1),
(56, 'Incredible shot!', '2024-02-10 19:15:00', 2),
(57, 'Love the colors!', '2024-02-10 19:20:00', 1),
(58, 'Beautiful scene!', '2024-02-10 19:25:00', 2),
(59, 'Great detail!', '2024-02-10 19:30:00', 1),
(60, 'Wonderful!', '2024-02-10 19:35:00', 2),
(61, 'Stunning view!', '2024-02-10 19:40:00', 1),
(62, 'So clear!', '2024-02-10 19:45:00', 2),

(63, 'Great picture!', '2024-02-10 20:00:00', 1),
(64, 'Lovely image!', '2024-02-10 20:05:00', 2),
(65, 'Wonderful shot!', '2024-02-10 20:10:00', 1),
(66, 'Beautiful capture!', '2024-02-10 20:15:00', 2),
(67, 'So artistic!', '2024-02-10 20:20:00', 1),
(68, 'Fantastic!', '2024-02-10 20:25:00', 2),
(69, 'Amazing shot!', '2024-02-10 20:30:00', 1),
(70, 'Love it!', '2024-02-10 20:35:00', 2),
(71, 'Incredible image!', '2024-02-10 20:40:00', 1),
(72, 'So beautiful!', '2024-02-10 20:45:00', 2);

-- Insert data into post_comments
INSERT INTO post_comments (id, post_id, comment_id) VALUES
(3, 1, 3),
(4, 1, 4),
(5, 1, 5),
(6, 1, 6),
(7, 1, 7),
(8, 1, 8),
(9, 1, 9),
(10, 1, 10),
(11, 1, 11),
(12, 1, 12),

(13, 2, 13),
(14, 2, 14),
(15, 2, 15),
(16, 2, 16),
(17, 2, 17),
(18, 2, 18),
(19, 2, 19),
(20, 2, 20),
(21, 2, 21),
(22, 2, 22),

(23, 3, 23),
(24, 3, 24),
(25, 3, 25),
(26, 3, 26),
(27, 3, 27),
(28, 3, 28),
(29, 3, 29),
(30, 3, 30),
(31, 3, 31),
(32, 3, 32),

(33, 4, 33),
(34, 4, 34),
(35, 4, 35),
(36, 4, 36),
(37, 4, 37),
(38, 4, 38),
(39, 4, 39),
(40, 4, 40),
(41, 4, 41),
(42, 4, 42),

(43, 5, 43),
(44, 5, 44),
(45, 5, 45),
(46, 5, 46),
(47, 5, 47),
(48, 5, 48),
(49, 5, 49),
(50, 5, 50),
(51, 5, 51),
(52, 5, 52),

(53, 6, 53),
(54, 6, 54),
(55, 6, 55),
(56, 6, 56),
(57, 6, 57),
(58, 6, 58),
(59, 6, 59),
(60, 6, 60),
(61, 6, 61),
(62, 6, 62),

(63, 7, 63),
(64, 7, 64),
(65, 7, 65),
(66, 7, 66),
(67, 7, 67),
(68, 7, 68),
(69, 7, 69),
(70, 7, 70),
(71, 7, 71),
(72, 7, 72);

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
