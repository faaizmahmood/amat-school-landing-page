import styles from './blog.module.scss'
import blogBG from '../../../../../public/images/blog-bg.png'

const Blog = () => {

    const blogStyle = {
        backgroundImage: `url(${blogBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <>

            <section className={`${styles.blog} mt-5 py-5`} style={blogStyle}>

                <div className="container text-center ">

                    <h2>Latest From the <span className="color-change">Blog Posts</span></h2>
                    <p className="mt-3">Learn more about our efforts of schools digitalization & help to deal better with management tasks using our free school management system.</p>
                </div>
            </section>

        </>
    )
}

export default Blog