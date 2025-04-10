import { useEffect, useState } from "react";
import { getCommentsByPost } from "../api/blogApi";

export default function CommentList({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsByPost(postId).then(setComments);
  }, [postId]);

  return (
    <div style={{ paddingLeft: "20px" }}>
      <h5>Comments</h5>
      {comments.map(c => (
        <p key={c._id}>
          {c.text} - <i>{c.author}</i>
        </p>
      ))}
    </div>
  );
}
