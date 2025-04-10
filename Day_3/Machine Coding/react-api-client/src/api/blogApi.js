const BASE_URL = "http://localhost:5000/api";

export const getUsers = () => fetch(`${BASE_URL}/users`).then(res => res.json());
export const getPostsByUser = (userId) => fetch(`${BASE_URL}/users/${userId}/posts`).then(res => res.json());
export const getCommentsByPost = (postId) => fetch(`${BASE_URL}/posts/${postId}/comments`).then(res => res.json());
