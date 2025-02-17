import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import AppRoutes from '../routes/routes'

const Layout = () => {
    return (
        <>
            <main>

                {/* Header */}
                <Header />
                {/* Header */}


                <AppRoutes />


                {/* Footer */}
                <Footer />
                {/* Footer */}

            </main>
        </>
    )
}

export default Layout