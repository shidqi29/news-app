import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Home from "./components/pages/Home";
import Programming from "./components/pages/Programming";
import Health from "./components/pages/Health";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/programming" element={<Programming />} />
            <Route path="/health" element={<Health />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
