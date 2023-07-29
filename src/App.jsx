import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import React from "react";
import Home from "./page/Home";
import Detail from "./page/Detail";
import Popular from "./page/Popular";
import Favorite from "./page/Favorite";
import Upcoming from "./page/Upcoming";

const App = () => {
  return (
    <>
      <CookiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Detail/:id" element={<Detail />}></Route>
            <Route path="/Popular" element={<Popular />}></Route>
            <Route path="/Favorite" element={<Favorite />}></Route>
            <Route path="/Upcoming" element={<Upcoming />}></Route>
          </Routes>
        </BrowserRouter>
      </CookiesProvider>
    </>
  );
};

export default App;
