import { Route, BrowserRouter, Routes } from "react-router-dom";
import routesConfig from "./routes/routesConfig";
import Header from "./components/Header/Header";

import styles from "./styles/App.module.css";

function App() {
  return (
    <>
      <BrowserRouter basename="StarWars">
        <div className={styles.wrapper}>
          <Header />
          <Routes>
            {routesConfig.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
