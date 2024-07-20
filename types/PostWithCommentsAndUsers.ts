export type PostWithCommentsAndUsers = Post & {
    comments: (Comment & { 
        user: User
     })[];
    owner: User
};