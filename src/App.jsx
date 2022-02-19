import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import BaseLayout from "components/BaseLayout";

const Home = lazy(() => import("./pages/Home"));
const CountryDetail = lazy(() => import("./pages/CountryDetail"));

function App() {
  return (
    <BaseLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:code" element={<CountryDetail />} />
        </Routes>
      </Suspense>
    </BaseLayout>
  );
}

export default App;
