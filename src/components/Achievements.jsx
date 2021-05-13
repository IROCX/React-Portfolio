import React from 'react'

function Achievements() {
    return (
        <div className='container' id='ach'>
            <div className='box-main'>
               <div>
                    <h2>Awards</h2>
                    <div className="box-award">
                        <div className="award-item">
                            <h4>ACM NIT Surat, Inception 2.0</h4>
                            <div className="description">
                                #2 in the competitive programming competition
                            </div>
                        </div>
                    </div>
               </div>
               <div>
                    <h2>Achievements</h2>
                    <div className="box-ach">
                        <div className="ach-item">
                            <h4>Deep Learning Specialization, Learner</h4>
                            <div className="description">
                                <li>Specialization which gives deep knowledge about algorithms and techniques in the field of Deep Learning</li>
                                <li>Taught by Andrew Ng, one of the pioneers of the field</li>
                                <li>Passed with flying colors in the tests</li>
                            </div>
                        </div>
                        <div className="ach-item">
                            <h4>Stanford Machine Learning, Learner</h4>
                            <div className="description">
                                <li>Understood the basics of the Machine Learning Algorithms in practical manner</li>
                                <li>Got knowledge of a range of topics from supervised learning to unsupervised learning</li>
                            </div>
                        </div>
                    </div>
               </div>
            </div>

        </div>
    )
}

export default Achievements
