import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState("light");
  const [text, setText] = useState("BLACK MODE");
  return (
    <div>
      <BrowserRouter>
        <Navbar mode={mode} setMode={setMode} text={text} setText={setText} />
        <LoadingBar height={3} color="#f11946" progress={progress} />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                mode={mode}
                setMode={setMode}
                setProgress={setProgress}
                apiKey={apiKey}
                key=""
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          >
            {" "}
          </Route>
          <Route
            exact
            path="/business"
            element={
              <News
                mode={mode}
                setMode={setMode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                country="in"
                category="business"
              />
            }
          >
            {" "}
          </Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                mode={mode}
                setMode={setMode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                country="in"
                category="entertainment"
              />
            }
          >
            {" "}
          </Route>
          <Route
            exact
            path="/general"
            element={
              <News
                mode={mode}
                setMode={setMode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          >
            {" "}
          </Route>
          <Route
            exact
            path="/health"
            element={
              <News
                mode={mode}
                setMode={setMode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                country="in"
                category="health"
              />
            }
          >
            {" "}
          </Route>
          <Route
            exact
            path="/science"
            element={
              <News
                mode={mode}
                setMode={setMode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={pageSize}
                country="in"
                category="science"
              />
            }
          >
            {" "}
          </Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                mode={mode}
                setMode={setMode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                country="in"
                category="sports"
              />
            }
          >
            {" "}
          </Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                mode={mode}
                setMode={setMode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
                country="in"
                category="technology"
              />
            }
          >
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
