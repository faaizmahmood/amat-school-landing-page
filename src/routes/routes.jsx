import { Route, Routes } from "react-router-dom"
import Home from "../pages/home/home"
import Demo from "../pages/demo/demo"
import TermsConditions from "../pages/terms-conditions/terms-conditions"
import PrivacyPolicy from "../pages/privacy-policy/privacy-policy"
import RefundPolicy from "../pages/refund-policy/refund-policy"

const AppRoutes = () => {
    return (
        <>
            <div>

                <Routes>

                    <Route path="/" element={<Home />} />
                    <Route path="/demo" element={<Demo />} />
                    <Route path="/terms-conditions" element={<TermsConditions />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/refund-policy" element={<RefundPolicy />} />

                    {/* Error Fallback Route */}
                    <Route path="*" element={"404 - Page Not Found"} />

                </Routes>

            </div>
        </>
    )
}

export default AppRoutes