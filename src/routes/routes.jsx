import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "../components/loading/loading";

// Function to add a delay
const withDelay = (importFunc) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(importFunc()), 1000); // 2-second delay
    });
};

// Lazy load components with delay
const Home = lazy(() => withDelay(() => import("../pages/home/home")));
const Demo = lazy(() => withDelay(() => import("../pages/demo/demo")));
const TermsConditions = lazy(() => withDelay(() => import("../pages/terms-conditions/terms-conditions")));
const PrivacyPolicy = lazy(() => withDelay(() => import("../pages/privacy-policy/privacy-policy")));
const RefundPolicy = lazy(() => withDelay(() => import("../pages/refund-policy/refund-policy")));
const Blog1 = lazy(() => withDelay(() => import("../pages/blogs/blog1/blog1")));
const Blog2 = lazy(() => withDelay(() => import("../pages/blogs/blog2/blog2")));
const Blog3 = lazy(() => withDelay(() => import("../pages/blogs/blog3/blog3")))

const AppRoutes = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/demo" element={<Demo />} />
                <Route path="/terms-conditions" element={<TermsConditions />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/refund-policy" element={<RefundPolicy />} />
                <Route path="/blog-details/blog1" element={<Blog1 />} />
                <Route path="/blog-details/blog2" element={<Blog2 />} />
                <Route path="/blog-details/blog3" element={<Blog3 />} />

                {/* Error Fallback Route */}
                <Route path="*" element={<div>404 - Page Not Found</div>} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;