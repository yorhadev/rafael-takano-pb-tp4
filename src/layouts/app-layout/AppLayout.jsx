import classes from "./AppLayout.module.css";
import { Link, Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className={classes["_app"]}>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signin">SignIn</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </header>
      <main>
        <div id="_app_notifications">
          <div>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</div>
        </div>
        <Outlet />
      </main>
    </div>
  );
}
