import React from 'react'

function Experience() {
    return (
        <div className='container' id='exp'>
            <div className="box-exp">
                <h2>Experience</h2>
                <div className='exp-item'>
                    <h4>D. E. Shaw India Private Limited </h4>
                    <p>Member Technical <span>- July '20 to Current , Hyderabad</span></p>
                    <div className="info">
                        <li>Working on the main trading infrastructure of the firm, which supports large ways of trading in the market</li>
                        <li>Created an automation, which takes care of monthly release of production code</li>
                        <li>Working on migration of code for supporting a new site of trading</li>
                    </div>
                </div>
                <div className='exp-item'>
                    <h4>D. E. Shaw India Private Limited </h4>
                    <p>Intern <span> - May '19 to July '19 , Hyderabad</span></p>
                    <div className="info">
                        <li>Worked on the Project "Fix-filler Support for Spreads"</li>
                        <li>The project is a simulator which mocks the trading of spreads(Related stocks) in the market</li>
                        <li>Supports the simulation of more than 10 million trades in a second</li>
                    </div>
                </div>
                <div className='exp-item'>
                    <h4>MLPACK</h4>
                    <p>Contributor <span>- Dec. '17 to Apr. '18 , Online</span></p>
                    <div className="info">
                        <li>Contributed to Open Source C++ Machine Learning Library for several algorithms like NADAM, NADAMAX
                            etc.</li>
                        <li>The library is currently used across various languages including python</li>
                        <li>Reliable code, which has no issues reported till now</li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
