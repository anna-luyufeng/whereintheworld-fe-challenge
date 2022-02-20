import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import BaseLayout from "components/BaseLayout";

const Home = lazy(() => import("./pages/Home"));
const CountryDetail = lazy(() => import("./pages/CountryDetail"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
  return (
    <BaseLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:code" element={<CountryDetail />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BaseLayout>
  );
}

export default App;
