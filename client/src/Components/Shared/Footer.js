import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-info'>
            <div className="footer-items contact-info">
                <div className="info-heading">
                    <h3>GET IN TOUCH</h3>
                </div>
                <div className="info-description">
                    <p><i className="fas fa-map-marker-alt"></i> Kharar, Punjab, India.</p>
                    <p><i className='fas fa-envelope'></i> info@lifesaver.com</p>
                    <p><i className='fas fa-mobile'></i> +91 9988776655</p>
                </div>
            </div>
            <div className="footer-items links-info">
                <div className="info-heading">
                    <h3>QUICK LINKS</h3>
                </div>
                <div className="info-description">
                    <p> <a href="/Home"><i className="fas fa-angle-right"></i> Home</a></p>
                    <p> <a href="/About"><i className="fas fa-angle-right"></i> About</a></p>
                    <p> <a href="/Service"><i className="fas fa-angle-right"></i> Service</a></p>
                </div>
            </div>

            <div className="footer-items join-newsletter">
                <div className="info-heading">
                    <h3>NEWS LETTERS</h3>
                </div>
                <div className="info-description">
                    <div className="join-newsletter-form">
                        <form action="/news-letter" method="post">
                            <input className='news-letter-email' placeholder='Email Address' type="email" name="newsLetterEmail" id="newsLetterEmail" />
                            <input className='news-letter-submit' type="submit" value="Join Us" />
                        </form>
                    </div>
                </div>
            </div>

            <div className="footer-items social-info">
                <div className="info-heading">
                    <h3>SOCIAL LINKS</h3>
                </div>
                <div className="info-description">
                    <span><a href="#" className='social-link'> <i className="fab fa-facebook-f"></i></a></span>
                    <span><a href="#" className='social-link'> <i className="fab fa-linkedin-in"></i></a></span>
                    <span><a href="#" className='social-link'> <i className="fab fa-twitter"></i></a></span>
                    <span><a href="#" className='social-link'> <i className="fab fa-instagram"></i></a></span>
                </div>
            </div>
        </div>

        <hr color='gray' style={{margin: "20px 0"}} />

        <div className='footer-rights'>
            <p><span>&copy; Life Saver. All Rights Reserved.</span></p>
            <p><a href="#">Terms of Service</a></p>
            <p><a href="#">Privacy Policy</a></p>
        </div>
        
    </footer>
  )
}

export default Footer