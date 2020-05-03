import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Fib from "./Fib";
const OtherPage = lazy(() => import("./OtherPage"));

const App = () => {
  const getOtherPage = () => {
    return (
      <Suspense fallback="getting other page">
        <OtherPage />
      </Suspense>
    );
  };

  return (
    <BrowserRouter>
      <header className="header">
        <Link className="header__item" to="/">
          <h2>Home</h2>
        </Link>
        <Link className="header__item" to="/otherpage">
          <h2>Other Page</h2>
        </Link>
      </header>
      <div className="app">
        <Route exact path="/" component={Fib} />
        <Route path="/otherpage" component={getOtherPage} />
      </div>
    </BrowserRouter>
  );
};

export default App;
