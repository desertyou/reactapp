import styles from "./css/Navbar.module.css";
function NavBar() {
  //TODO: contents of scrollToElem get lost when the page is refreshed
  const baseAddress = `${window.location.protocol}//${window.location.host}`;
  return (
    <nav
      className="navbar navbar-expand-lg bd-navbar sticky-top"
      id={styles.fullColorDiv}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          AS
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href={baseAddress}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                // onClick={() => {
                //   if (scrollToElem)
                //     scrollToElem.scrollIntoView({ behavior: "smooth" });
                // }}
                href="#projects"
              >
                My projects
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
