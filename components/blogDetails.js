function BlogDetails({ id }) {
  const [article, setArticle] = React.useState(null);

  React.useEffect(() => {
    fetch(`http://localhost:3000/publications/${id}`)
      .then(response => response.json())
      .then(data => setArticle(data));
  }, [id]);

  if (!article) return <div>Loading...</div>;

  return (
    <div className="container my-5">
      <div className="blog-header text-center mb-4">
        <img src="Musique800.jpg" alt="Article" className="img-fluid" />
        <h1>{article.titre}</h1>
      </div>
      <div dangerouslySetInnerHTML={{ __html: `<p>${article.contenu}</p>` }}></div>

      <h3 className="mt-5">Commentaires</h3>
      <AddComment articleId={id} />
      <CommentList articleId={id} />
    </div>
  );
}
