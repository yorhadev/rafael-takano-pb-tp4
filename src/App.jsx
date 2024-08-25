import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { AppContext } from "./contexts";
import { AppLayout } from "./layouts";
import { Dashboard, Home, SignIn } from "./pages";

function App() {
  AppContext;
  const [appContext, setAppContext] = useState({
    alert: { type: "", message: "" },
    loading: false,
  });
  return (
    <AppContext.Provider value={[appContext, setAppContext]}>
      <div id="_app">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route element={<AppLayout />}>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
