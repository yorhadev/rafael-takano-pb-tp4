import classes from "./Home.module.css";
import { linkName } from "./Home.utils";
import { useContext, useMemo, useState } from "react";
import { SignIn, SignUp } from "../../components/app";
import { Alert } from "../../components/feedback";
import { AppContext } from "../../contexts";

export default function Home() {
  const [appContext, setAppContext] = useContext(AppContext);
  const [currentOption, setCurrentOption] = useState("signin");
  const redirectLink = useMemo(() => linkName(currentOption), [currentOption]);
  const handleOnClick = (event) => {
    event.preventDefault();
    setCurrentOption(currentOption === "signin" ? "signup" : "signin");
    const alert = { type: "success", message: "Sucesso!" };
    setAppContext((state) => ({ ...state, alert }));
  };
  return (
    <main>
      <div id="_app_notifications">
        <Alert />
      </div>
      <div className={classes.home_container}>
        <div className={classes.home_signin}>
          {currentOption === "signin" ? <SignIn /> : <SignUp />}
          <div className={classes.home_signin_options}>
            <a href="" onClick={handleOnClick}>
              {redirectLink}
            </a>
            {JSON.stringify(appContext)}
          </div>
        </div>
      </div>
    </main>
  );
}
