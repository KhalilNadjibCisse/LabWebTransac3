// Récupérer le div avec l’id "root"
const rootElement = document.getElementById('root');

// Créer une racine React et y rendre les composants
const root = ReactDOM.createRoot(rootElement);

// Récupérer l'id du blog depuis l'URL
const params = new URLSearchParams(window.location.search);
const blogId = params.get("id");

if (blogId) {
  // Si un id est présent, afficher le blog spécifique
  root.render(<Blog id={blogId} />);
} else {
  // Sinon, afficher la liste des blogs
  root.render(
    <>
      <Header />
      <BlogList />
      <Footer />
    </>
  );
}
