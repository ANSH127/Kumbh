import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Packages from "./pages/Packages";
import PackagesDetailPage from "./pages/PackagesDetailPage";
import EnquiryPage from "./pages/EnquiryPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import UpdatesPage from "./pages/UpdatesPage";
import UpdateDetailPage from "./pages/UpdateDetailPage";
import { useParams } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import AboutUs from "./pages/AboutUs";
import { SpeedInsights } from '@vercel/speed-insights/react';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/packages/:id" element={<PackagesDetailPage />} />
          <Route path="/enquiry" element={<EnquiryPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/updates" element={<UpdatesPage />} />
          <Route path="/blog/:id" element={<BlogWrapper />} />
          <Route path="/update/:id" element={<UpdateWrapper />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/RefundPolicy" element={<RefundPolicy />} />
          <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
          <Route path="/AboutUs" element={<AboutUs />} />



        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
      <SpeedInsights/>

    </QueryClientProvider>
  );
}

const BlogWrapper = () => {
  const { id } = useParams();
  return <BlogDetailPage key={id} />;
};

const UpdateWrapper = () => {
  const { id } = useParams();
  return <UpdateDetailPage key={id} />;
};

export default App;
