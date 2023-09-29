import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Home from "./pages/Home";
import Programming from "./pages/Programming";
import Health from "./pages/Health";
import SavedNews from "./pages/SavedNews";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/programming" element={<Programming />} />
            <Route path="/health" element={<Health />} />
            <Route path="/saved" element={<SavedNews />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
