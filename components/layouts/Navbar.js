import Head from "next/Head";
import { useRouter } from "next/router";

const Navbar = () => {
  return (
    <>
      <Head>
        <title>Kawal Conora</title>
      </Head>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img
            src="https://asset-niomic.s3-ap-southeast-1.amazonaws.com/logo-niomic-black-.png"
            width="100"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse d-flex justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Global
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Indonesia
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
