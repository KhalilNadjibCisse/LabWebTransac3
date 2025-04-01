import { useState } from "react";

export default function AddComment({ articleId }) {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (commentText.trim()) {
      fetch("http://localhost:3000/commentaires", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ articleId, auteur: "Utilisateur", texte: commentText })
      }).then(() => {
        window.location.reload();
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-group">
        <textarea className="form-control" rows="4" placeholder="Ajoutez un commentaire..." value={commentText} onChange={(e) => setCommentText(e.target.value)}></textarea>
      </div>
      <button type="submit" className="btn btn-primary mt-2">Soumettre</button>
    </form>
  );
}
