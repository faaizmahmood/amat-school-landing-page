import AboutSoftware from './components/aboutSoftware/aboutSoftware'
import Blog from './components/blog/blog'
import Education from './components/education/education'
import Faqs from './components/faqs/faqs'
import Features from './components/features/features'
import Hero from './components/hero/hero'
import Pricing from './components/pricing/pricing'
import styles from './home.module.scss'

const Home = () => {


    return (
        <section className={`${styles.home}`} >
            <Hero />
            <AboutSoftware />
            <Features />
            <Education />
            <Pricing />
            <Faqs />
            <Blog/>
        </section>
    )
}

export default Home