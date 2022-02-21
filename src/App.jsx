import { Suspense, useEffect, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress";

import BaseLayout from "components/BaseLayout";

const Home = lazy(() => import("./pages/Home"));
const CountryDetail = lazy(() => import("./pages/CountryDetail"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <BaseLayout>
      <Suspense fallback={<CircularProgress />}>
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
