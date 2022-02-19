import { Suspense, lazy } from "react";
import { Routes, Route, Link } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Country = lazy(() => import("./pages/Country"));

function App() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/germany">Germany</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<Country />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
