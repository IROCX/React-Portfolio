import React from 'react'

function Skills() {
    return (
        <div className='container' id='skills'>
            <div className="box-skills">
                <h2>Skills</h2>
                <div className='skill-content'>
                    <div className='col'>
                        <h4>Languages</h4>
                        <ul>
                            <li>C</li>
                            <li>C++</li>
                            <li>Python</li>
                            <li>Java</li>
                        </ul>
                    </div>

                    <div className='col'>
                        <h4>Machine Learning Frameworks</h4>
                        <ul>
                            <li>TensorFlow</li>
                            <li>Keras</li>
                            <li>scikit-learn</li>
                            <li>mlpack</li>
                        </ul>
                    </div>

                    <div className='col'>
                        <h4>Web Technology</h4>
                        <ul>
                            <li>HTML</li>
                            <li>JavaScript</li>
                            <li>PHP</li>
                            <li>SQL</li>
                        </ul>
                    </div>

                    <div className='col'>
                        <h4>Trading Connectivity</h4>
                        <ul>
                            <li>Fix 4.2</li>
                            <li>Fix 4.4</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills
