function AddComment({ articleId }) {
  const [author, setAuthor] = React.useState('');
  const [text, setText] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Valider que l'auteur et le texte sont remplis
    if (!author || !text) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    const newComment = {
      articleId: articleId,
      auteur: author,
      texte: text,
    };

    // Envoyer les données au serveur via POST
    fetch("http://localhost:3000/commentaires", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
      .then((response) => response.json())
      .then((data) => {
        // Si le commentaire a été ajouté avec succès, réinitialiser les champs
        setAuthor('');
        setText('');
        alert("Commentaire ajouté !");
      })
      .catch((error) => {
        console.error("Erreur lors de l'ajout du commentaire:", error);
      });
  };

  return (
    <div className="add-comment">
      <h3>Ajouter un commentaire</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">Nom</label>
          <input
            type="text"
            id="author"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">Commentaire</label>
          <textarea
            id="text"
            className="form-control"
            rows="3"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Envoyer</button>
      </form>
    </div>
  );
}
