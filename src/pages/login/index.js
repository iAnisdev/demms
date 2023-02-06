import Head from "next/head";
import "./login.css";
export default function Login() {
  return (
    <main className="main text-center">
      <Head>
        <title>Welcome to DEMM System</title>
      </Head>
      <div className="form-signin">
        <div class="card">
          <div class="card-body p-4">
            <form>
              <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div className="form-floating mt-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Password</label>
              </div>

              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
