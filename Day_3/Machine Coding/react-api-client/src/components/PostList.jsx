import { useEffect, useState } from "react";
import { getPostsByUser } from "../api/blogApi";
import CommentList from "./CommentList";

export default function PostList({ userId }) {
  const [posts, setPosts] = useState([]);
  const [showComments, setShowComments] = useState(null);

  useEffect(() => {
    getPostsByUser(userId).then(setPosts);
  }, [userId]);

  return (
    <div>
      <h3>Posts</h3>
      {posts.map(post => (
        <div key={post._id}>
          <h4 onClick={() => setShowComments(post._id)}>{post.title}</h4>
          {showComments === post._id && <CommentList postId={post._id} />}
        </div>
      ))}
    </div>
  );
}
