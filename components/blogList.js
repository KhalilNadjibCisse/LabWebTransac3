function BlogList() {
  const [articles, setArticles] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3000/publications")
      .then(response => response.json())
      .then(data => setArticles(data));
  }, []);

  return (
    <div className="container my-5">
      <div className="row">
        {articles.map(article => (
          <div key={article.id} className="col-md-4">
            <div className="card">
              <img src="Musique800.jpg" alt="Article" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{article.titre}</h5>
                <a href={`?id=${article.id}`} className="btn btn-primary">Voir</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

