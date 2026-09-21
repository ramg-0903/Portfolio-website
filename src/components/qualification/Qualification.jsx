import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="qualification section" id="portfolio">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personel journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={
                            toggleState === 1
                                ? "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>

                    <div
                        className={
                            toggleState === 2
                                ? "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div
                        className={
                            toggleState === 1
                                ? "qualification__content qualification__content-active"
                                : "qualification__content"
                        }
                    >

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">MS in Data Analytics Engineering</h3>
                                <span className="qualification__subtitle">Northeastern University, Boston</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2025 - 2027 (Expected)
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Bachelors of Technology (CS)</h3>
                                <span className="qualification__subtitle">LNMIIT , Jaipur</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2021 - 2025
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Class 12th</h3>
                                <span className="qualification__subtitle">Sri Chaitanya</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2019 - 2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Class 10th</h3>
                                <span className="qualification__subtitle">DPS - Hyderabad</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2014 - 2019
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={
                            toggleState === 2
                                ? "qualification__content qualification__content-active"
                                : "qualification__content"
                        }
                    >

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Summer Research Intern</h3>
                                <span className="qualification__subtitle">LUSIP - User Level Intervention In Hate Speech</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> May'2023 - Jul'2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification