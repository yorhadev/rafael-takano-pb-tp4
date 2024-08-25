import { useContext, useEffect, useMemo, useState } from "react";
import classes from "./Alert.module.css";
import { AppContext } from "../../../contexts";

export default function Alert() {
  const [appContext, setAppContext] = useContext(AppContext);
  const [alert, setAlert] = useState({ type: "", message: "" });
  useEffect(() => {
    console.log("hello", appContext);
    setAlert({
      type: appContext?.alert?.type,
      message: appContext?.alert?.message,
    });
  }, [appContext]);
  return (
    <div className={classes.alert}>
      <div>
        {alert.type} - {alert.message}
      </div>
    </div>
  );
}
