import { useEffect, useState } from "react";
import CommentList from "./commentList";
import AddComment from "./addComment";

export default function BlogDetails() {
  const [article, setArticle] = useState(null);
  const params = new URLSearchParams(window.location.search);
  const articleId = params.get("id");

  useEffect(() => {
    fetch(`http://localhost:3000/publications/${articleId}`)
      .then(response => response.json())
      .then(data => setArticle(data));
  }, [articleId]);

  if (!article) return <div>Loading...</div>;

  return (
    <div className="container my-5">
      <div className="blog-header text-center mb-4">
        <img src="Musique800.jpg" alt="Article" className="img-fluid" />
        <h1>{article.titre}</h1>
      </div>
      <div dangerouslySetInnerHTML={{ __html: `<p>${article.contenu}</p>` }}></div>

      <h3 className="mt-5">Commentaires</h3>
      <AddComment articleId={articleId} />
      <CommentList articleId={articleId} />
    </div>
  );
}
