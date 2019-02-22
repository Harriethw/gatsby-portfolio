import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                  <h1><strong>Harriet Horobin-Worley</strong>
                    <br/>Creative software engineer, <br/>editor and creator<br/>
                    </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
