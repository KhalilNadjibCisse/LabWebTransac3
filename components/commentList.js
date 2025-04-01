import { useEffect, useState } from "react";
import Comment from "./comment";

export default function CommentList({ articleId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/commentaires?articleId=${articleId}`)
      .then(response => response.json())
      .then(data => setComments(data));
  }, [articleId]);

  return (
    <div>
      {comments.map((comment, index) => (
        <Comment key={index} author={comment.auteur} text={comment.texte} />
      ))}
    </div>
  );
}
