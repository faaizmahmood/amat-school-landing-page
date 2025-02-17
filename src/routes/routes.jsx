import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "../components/loading/loading";

// Lazy load components
const Home = lazy(() => import("../pages/home/home"));
const Demo = lazy(() => import("../pages/demo/demo"));
const TermsConditions = lazy(() => import("../pages/terms-conditions/terms-conditions"));
const PrivacyPolicy = lazy(() => import("../pages/privacy-policy/privacy-policy"));
const RefundPolicy = lazy(() => import("../pages/refund-policy/refund-policy"));

const AppRoutes = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/demo" element={<Demo />} />
                <Route path="/terms-conditions" element={<TermsConditions />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/refund-policy" element={<RefundPolicy />} />

                {/* Error Fallback Route */}
                <Route path="*" element={<div>404 - Page Not Found</div>} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
