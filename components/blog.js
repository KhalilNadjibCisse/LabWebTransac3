function Blog({ id }) {
  return (
    <div>
      <Header />
      <BlogDetails id={id} />
      <CommentList articleId={id} />
      <Footer />
    </div>
  );
}
