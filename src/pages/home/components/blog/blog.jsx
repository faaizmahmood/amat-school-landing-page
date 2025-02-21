import styles from './blog.module.scss'
import blogBG from '../../../../../public/images/blog-bg.png'
import blogFeaturedImg1 from '../../../../../public/images/blog-1.avif'

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

                    <div className='row mt-5'>
                        <div className='col-4'>
                            <div className={`${styles.blogItem}`}>
                                <img src={blogFeaturedImg1} />
                                <h5 className='mt-4 text-start'>What is School system & How it works !!</h5>
                                <p>The school management system is a software to manage school administration tasks with the help a computer/mobile application...</p>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className={`${styles.blogItem}`}>
                                <img src={blogFeaturedImg1} />
                                <h5 className='mt-4 text-start'>Top ten free school management systems</h5>
                                <p>The school management system is a software to manage school administration tasks with the help a computer/mobile application...</p>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className={`${styles.blogItem}`}>
                                <img src={blogFeaturedImg1} />
                                <h5 className='mt-4 text-start'>Best school management system in Pakistan</h5>
                                <p>The school management system is a software to manage school administration tasks with the help a computer/mobile application...</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Blog