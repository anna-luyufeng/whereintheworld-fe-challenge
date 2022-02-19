import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import BaseLayout from "components/BaseLayout";

const Home = lazy(() => import("./pages/Home"));
const Country = lazy(() => import("./pages/Country"));

function App() {
  return (
    <BaseLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<Country />} />
        </Routes>
      </Suspense>
    </BaseLayout>
  );
}

export default App;
