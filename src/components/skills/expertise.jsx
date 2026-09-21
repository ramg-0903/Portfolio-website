import React from 'react';
import './expertise.css';

const expertise = () => {
    return (
        <div className="skills__content_exp">
            <h3 className="exp_title">Expertise</h3>

            <div className="exp_box">
                <div className="exp_group">
                    <ul className="exp_list">
                        <li className="exp_item">Data Analytics</li>
                        <li className="exp_item">Machine Learning</li>
                        <li className="exp_item">MLOps</li>
                    </ul>
                </div>

                <div className="exp_group">
                    <ul className="exp_list">
                        <li className="exp_item">Deep Learning</li>
                        <li className="exp_item">NLP</li>
                        <li className="exp_item">Recommender Systems</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default expertise;
