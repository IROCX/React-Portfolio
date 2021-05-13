import React from 'react'
import profilepic from './../profilepic.jpg'


function Intro() {
    return (
        <div className='container' id='intro'>
           <div className='box-intro'>
                <div className="content">
                    <div className="intro">
                        Highly talented IT
                        Professional with
                        exemplary academic and
                        professional record,
                        known for providing great
                        analysis, insights for
                        complex situations and
                        finding innovative
                        solutions to various types
                        of problems
                    </div>
                </div>
                <div className="profilepic">
                    <img src={profilepic} alt="" />
                    <h3>SOURABH VARSHNEY</h3>
                    <p>SOFTWARE DEVELOPER</p>
                </div>
           </div>
        </div>
    )
}

export default Intro
