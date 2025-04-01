export default function BlogCard({ article }) {
    return (
      <div className="card">
        <img src="Musique800.jpg" className="card-img-top" alt={article.titre} />
        <div className="card-body">
          <h5 className="card-title">{article.titre}</h5>
          <p className="card-text">{article.contenu.substring(0, 100)}...</p>
          <a href={`indexPost.html?id=${article.id}`} className="btn btn-primary">Lire la suite</a>
        </div>
      </div>
    );
  }
  