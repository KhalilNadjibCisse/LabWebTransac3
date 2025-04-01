import { useEffect, useState } from "react";
import BlogCard from "./blogCard";

export default function BlogList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/publications")
      .then(response => response.json())
      .then(data => setArticles(data));
  }, []);

  return (
    <div className="container my-5">
      <div className="row">
        {articles.map(article => (
          <div key={article.id} className="col-md-4">
            <BlogCard article={article} />
          </div>
        ))}
      </div>
    </div>
  );
}
