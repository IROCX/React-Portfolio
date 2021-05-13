import React from 'react'

function Projects() {
    return (
        <div className="container" id='projects'>
            <div className="box-proj">
                <h2>Projects</h2>
                <div className="proj-item">
                    <h4>Legal Document Recommendation System</h4>
                    <span>July '19 to June '20</span>
                    <div className="description">
                        <li>Recommendation System for Indian Legal Documents, given small details of the legal case</li>
                        <li>Uses extractive summary approach to speed up the recommendation</li>
                        <li>Ranking of recommendations decided using cosine similarity score of documents</li>
                        <li>More than 90% accurate and achieves around 0.95 on the F1-score metric</li>
                    </div>
                    <div className="techStack">
                        <span>Technology Stack:</span>  Python, Numpy, Machine Learning, NLP, Scikit-learn, Gensim, Pandas, Scipy & NLTK
                    </div>
                </div>
                <div className="proj-item">
                    <h4>Home Automation Using Machine Learning</h4>
                    <span>Sept. '17 to Apr. '18</span>
                    <div className="description">
                        <li> Project of automating homes and offices using machine learning concepts</li>
                        <li> One component is built from scratch voice-controlled electrical appliances using smartphone only</li>
                        <li>
                            Another component finds the solution of automating office lighting by analyzing patterns from past and
                            considering affecting factors like daylight using neural networks
                        </li>
                        <li>
                            Miniature model of office lighting was used in the department in reality and turned out to be great success
                            for them
                        </li>
                    </div>
                    <div className="techStack">
                       <span>Technology Stack:</span> Python, Numpy, Machine Learning & Android
                    </div>
                </div>
                <div className="proj-item">
                    <h4>Stock Market Prediction</h4>
                    <span>May '17 to Aug. '17</span>
                    <div className="description">
                        <li>Use of Machine Learning Basic Models to predict future stock prices</li>
                        <li>Used data of last 1 year for future days last price prediction</li>
                        <li>Best model developed was 95% accurate for one of the stocks</li>
                    </div>
                    <div className="techStack">
                        <span>Technology Stack:</span>  Python, Machine Learning & Numpy
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects
