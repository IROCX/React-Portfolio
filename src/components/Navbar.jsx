import React from 'react'
import { Link } from "react-scroll";
import logo from './../logo.png'

function Navbar() {

    const handleSetActive = () => {
        document.getElementById('sidenavToggle').checked = false
    }

    return (
        <div>
            <div className='navbar'>
                <div className='brand'>
                    <img src={logo} alt="" />
                </div>
                <div className='links'>
                    <Link className="nav-element"
                        activeClass="active"
                        to="intro"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={100}> Home</Link>


                    <Link className="nav-element"
                        activeClass="active"
                        to="edu"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={50}>About & Education</Link>


                    <Link className="nav-element"
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={50}>Skills</Link>

                    <Link className="nav-element"
                        activeClass="active"
                        to="exp"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={50}>Experience</Link>

                    <Link className="nav-element"
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={50}>Projects</Link>

                    <Link className="nav-element"
                        activeClass="active"
                        to="pub"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={50}> Publications</Link>

                    <Link className="nav-element"
                        activeClass="active"
                        to="ach"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={50}> Awards & Achievements</Link>

                    <Link className="nav-element"
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-10}
                        duration={50}> Contacts</Link>
                </div>
            </div>

            {/* toggle breadcrumb */}
            <label htmlFor="sidenavToggle">
                <div className="breadcrumb">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </label>

            {/* toggle checkbox */}
            <input type="checkbox" id='sidenavToggle' />


            {/* mobile sidenav */}
            <div className='sidenav'>

                <label className="close" htmlFor="sidenavToggle">
                    <div>
                        <i className="fas fa-times"></i>
                    </div>
                </label>
                <label htmlFor="sidenavToggle">
                    <Link className="nav-element"
                        activeClass="active"
                        to="intro"
                        spy={true}
                        smooth={true}
                        offset={0}
                        onSetActive={handleSetActive}
                        onSetInactive={handleSetActive}
                        duration={100}> Home</Link>

                    <Link className="nav-element"
                        activeClass="active"
                        to="edu"
                        spy={true}
                        smooth={true}
                        offset={-10}
                        onSetActive={handleSetActive}
                        onSetInactive={handleSetActive}
                        duration={50}>About & Education</Link>


                    <Link className="nav-element"
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-10}
                        onSetActive={handleSetActive}
                        onSetInactive={handleSetActive}
                        duration={50}>Skills</Link>

                    <Link className="nav-element"
                        activeClass="active"
                        to="exp"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        onSetActive={handleSetActive}
                        onSetInactive={handleSetActive}
                        duration={50}>Experience</Link>

                    <Link className="nav-element"
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        onSetActive={handleSetActive}
                        onSetInactive={handleSetActive}
                        duration={50}>Projects</Link>

                    <Link className="nav-element"
                        activeClass="active"
                        to="pub"
                        spy={true}
                        smooth={true}
                        offset={-10}
                        onSetActive={handleSetActive}
                        onSetInactive={handleSetActive}
                        duration={50}> Publications</Link>

                    <Link className="nav-element"
                        activeClass="active"
                        to="ach"
                        spy={true}
                        smooth={true}
                        offset={-10}
                        onSetActive={handleSetActive}
                        onSetInactive={handleSetActive}
                        duration={50}> Awards & Achievements</Link>

                    <Link className="nav-element"
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-10}
                        onSetActive={handleSetActive}
                        onSetInactive={handleSetActive}
                        duration={50}> Contacts</Link>
                </label>
            </div >
        </div >
    )
}

export default Navbar
