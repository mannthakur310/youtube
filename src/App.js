import Header from "./components/Header";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Recommedvideos from "./components/Recommedvideos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <div className="app_page">
                  <Sidebar />
                  <Recommedvideos />
                </div>
              }
            />
            <Route
              path="/search/:searchTerm"
              element={
                <div className="app_page">
                  <Sidebar />
                  <SearchPage />
                </div>
              }
            />
            <Route
              path="/contact"
              element={
                <div className="app_page">
                  <Sidebar />
                </div>
              }
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
