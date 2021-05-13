import React from 'react'

function Contacts() {

    return (
        <div className='container'>
            <div className="box-contact" id='contact'>
                <h3>Always happy to connect...</h3>
                <div className='contacts'>
                    <div className="contact-item">
                        <i className="fas fa-mobile"></i>
                        +91-7017005842
                    </div>
                    <div className="contact-item">
                        <a href='mailto:sourabhvarshney111@gmail.com'><i className="fas fa-envelope-open"></i></a>
                        sourabhvarshney111@gmail.com
                    </div>
                    <div className="contact-item">
                        <a href='https://www.linkedin.com/in/sourabh-varshney-8324b5149/'> <i className="fab fa-linkedin-in"></i></a>
                        @sourabh-varshney-8324b5149
                    </div>
                    <div className="contact-item">
                        <a href='https://twitter.com/VarshneySourabh'><i className="fab fa-twitter"></i></a>
                        @VarshneySourabh
                    </div>
                    <div className="contact-item">
                        <a href='https://github.com/sourabhvarshney111'><i className="fab fa-github"></i></a>
                        @sourabhvarshney111
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contacts
