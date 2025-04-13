function CommentList({ articleId }) {
  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    fetch(`http://localhost:3000/commentaires?articleId=${articleId}`)
      .then(response => response.json())
      .then(data => setComments(data));
  }, [articleId]);

  return (
    <div>
      <h3>Commentaires</h3>
      {comments.map((comment, index) => (
        <div key={index}>
          <p><strong>{comment.auteur}</strong>: {comment.texte}</p>
        </div>
      ))}
    </div>
  );
}
