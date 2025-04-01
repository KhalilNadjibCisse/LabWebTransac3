export default function Header() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="index.html">MusicFeel</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item"><a className="nav-link" href="#">Menu1</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Menu2</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Menu3</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Menu4</a></li>
            </ul>
            <div className="user-icon ms-auto">
              <i className="fas fa-user-circle fa-2x"></i>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  