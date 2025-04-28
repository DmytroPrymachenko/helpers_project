import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Layout from "./components/layout/Layout";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/errorFallback/ErrorFallback";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import Loader from "./components/loader/Loader";

const Home = lazy(() => import("./pages/home/Home"));
const About = lazy(() => import("./pages/about/About"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const NotFound = lazy(() => import("./pages/notFound/NotFound"));

function App() {
  return (
    <>
      <GlobalStyle />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<Loader />}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
