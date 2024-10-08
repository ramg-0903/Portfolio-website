import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Ram</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/ram.0903?igsh=MXZ6b3AwN3dqbHFvaw==" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="bx bxl-instagram"></i>
                    </a>
                </div>

                <span className='footer__copy'>
                    &#169; Ram. All rigths reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer