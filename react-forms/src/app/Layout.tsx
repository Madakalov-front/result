import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="site">
      <header>
        <div className="container">
          <h1>registration</h1>
        </div>
      </header>
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <footer>
        <div className="container">
          <p>footer</p>
        </div>
      </footer>
    </div>
  );
};
