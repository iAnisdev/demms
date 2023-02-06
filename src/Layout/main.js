import Head from "next/head";
import "./layout.css";
export default function MainLayout({ children }) {
  return (
    <main className="main">
      <Head>
        <title>DEMM System Dashboard</title>
      </Head>
      <div class="row">
        <div class="col-2">
          <div
            class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
            style={{ height: "100vh" }}
          >
            <a
              href="/"
              class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span class="fs-4">Devices</span>
            </a>
            <hr />
            <ul class="nav nav-pills flex-column mb-auto">
              <li class="nav-item">
                <a href="#" class="nav-link active" aria-current="page">
                  Home
                </a>
              </li>
            </ul>
            <hr />
            <div class="dropdown">
              <button className="w-100 btn btn-lg btn-danger" type="submit">
                Logout
              </button>
            </div>
          </div>
        </div>
        <div class="col-10">{children}</div>
      </div>
    </main>
  );
}
