import { NavLink } from 'react-router-dom'
import styles from './terms-conditions.module.scss'
import BreadCrumbs from '../../components/breadCrumbs/breadCrumbs'
import CallToAction from '../home/components/callToAction/callToAction'

const TermsConditions = () => {
    return (
        <>

            <BreadCrumbs pageTitle={"Terms & conditions"} />

            <section className={`${styles.TermsConditions} mb-5`}>


                <div className='container mt-5'>

                    {/* <h2>Terms & Conditions</h2> */}

                    <p>Welcome to School Management Software!</p>
                    <p>These terms and conditions outline the rules and regulations for the use of EasySchoolin EdTech&apos;s Website, located at <a href="http://ourschoolsoftware.com">ourschoolsoftware.com</a>.</p>
                    <p>By accessing this website, we assume you accept these terms and conditions. Do not continue to use School Management Software if you do not agree to all of the terms and conditions stated on this page.</p>

                    <h3>Terminology</h3>
                    <p>The following terminology applies to these Terms and Conditions, Privacy Statement, and Disclaimer Notice:</p>
                    <ul>
                        <li><strong>&quot;Client&quot;, &quot;You&quot;, &quot;Your&quot;</strong> – refers to you, the person accessing this website and compliant with the Company’s terms.</li>
                        <li><strong>&quot;The Company&quot;, &quot;Ourselves&quot;, &quot;We&quot;, &quot;Our&quot;, &quot;Us&quot;</strong> – refers to our Company.</li>
                        <li><strong>&quot;Party&quot;, &quot;Parties&quot;, or &quot;Us&quot;</strong> – refers to both the Client and ourselves.</li>
                    </ul>

                    <h3>Cookies</h3>
                    <p>We employ the use of cookies. By accessing School Management Software, you agree to use cookies in accordance with EasySchoolin EdTech’s Privacy Policy.</p>

                    <h3>License</h3>
                    <p>Unless otherwise stated, EasySchoolin EdTech and/or its licensors own the intellectual property rights for all material on School Management Software. All rights are reserved. You may access this for your own personal use subject to restrictions set in these terms.</p>

                    <p><strong>You must not:</strong></p>
                    <ul>
                        <li>Republish material from School Management Software</li>
                        <li>Sell, rent or sub-license material from School Management Software</li>
                        <li>Reproduce, duplicate or copy material from School Management Software</li>
                        <li>Redistribute content from School Management Software</li>
                    </ul>

                    <h3>Comments</h3>
                    <p>Parts of this website allow users to post and exchange opinions. EasySchoolin EdTech does not filter or review comments before they appear on the website. Comments reflect the views of the person posting them.</p>
                    <p>We reserve the right to remove comments considered inappropriate, offensive, or in breach of these Terms and Conditions.</p>

                    <h3>Hyperlinking to Our Content</h3>
                    <p>The following organizations may link to our Website without prior written approval:</p>
                    <ul>
                        <li>Government agencies</li>
                        <li>Search engines</li>
                        <li>News organizations</li>
                        <li>Online directory distributors</li>
                        <li>Accredited Businesses except soliciting non-profits, charity malls, and charity fundraising groups</li>
                    </ul>

                    <h3>iFrames</h3>
                    <p>Without prior approval, you may not create frames around our Webpages that alter the visual presentation of our Website.</p>

                    <h3>Content Liability</h3>
                    <p>We shall not be held responsible for any content appearing on your Website. You agree to defend us against all claims arising from your Website.</p>

                    <h3>Privacy</h3>
                    <p>Please read our <NavLink to="/privacy-policy">Privacy Policy</NavLink>.</p>

                    <h3>Reservation of Rights</h3>
                    <p>We reserve the right to request the removal of all links or any particular link to our Website. We also reserve the right to amend these terms and linking policies at any time.</p>

                    <h3>Disclaimer</h3>
                    <p>To the fullest extent permitted by law, we exclude all representations, warranties, and conditions relating to our website and its use. This disclaimer does not limit or exclude liability for:</p>
                    <ul>
                        <li>Death or personal injury</li>
                        <li>Fraud or fraudulent misrepresentation</li>
                        <li>Any liabilities not permitted under applicable law</li>
                    </ul>

                </div>

            </section>

            <CallToAction/>

        </>
    )
}

export default TermsConditions
