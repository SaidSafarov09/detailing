import React from "react";

function FooterSite() {
    return(
        <div id="footers" className="FooterSite">
            <div className="container">
                <div className='section'>
                          <div className="footer">
                            <div className="footer__content">
                                <div className="footer__pa__text">
                                    <div className="footer__pa__img">
                                        <img src="/img/logo.svg" alt=""/>
                                    </div>
                                    <p>The best website in the world and feel your experience in selling or buy our work</p>
                                </div>
                                <div className="footer__text">
                                    <h2>О нас</h2>
                                    <a href="#">Product</a>
                                    <a href="#">Resource</a>
                                    <a href="#">Term & Condition</a>
                                    <a href="#">FAQ</a>
                                </div>
                                <div className="footer__text">
                                    <h2>Company</h2>
                                    <a href="#">Our Team</a>
                                    <a href="#">Partner With Us</a>
                                    <a href="#">Privacy & Policy</a>
                                    <a href="#">Features</a>
                                </div>
                                <div className="footer__text">
                                    <h2>Contact</h2>
                                    <a href="tel: +1 (234) 567-89-10">+1 (234) 567-89-10</a>
                                    <a href="email">adorableprograbrmmer@gmail.com</a>
                                    <div className="footer__icon">
                                        <div className="icon">
                                            <a href="https://youtube.com"><img src="/img/Vector.svg" alt=""/></a>
                                            <a href="https://discord.com"><img src="/img/discord.svg" alt=""/></a>
                                            <a href="https://instagramm.com"><img src="/img/instagram.svg" alt=""/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                      </div>
                </div>
            </div>
        </div>
    )
}

export default FooterSite;