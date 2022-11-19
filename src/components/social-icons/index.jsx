import React from "react";
import './style.scss';
import fbIcon from '../../assets/images/fbIcon.png';
import twetIcon from '../../assets/images/twIcon.png';
import instIcon from '../../assets/images/insticon.png';

class SocialIcons extends React.Component {
    state = {
        socialIcon: [
            {
                image: fbIcon,
            },
            {
                image: twetIcon,
            },
            {
                image: instIcon,
            },

        ]
    }
    render() {
        // return <div className="stuff-icons">
        //     {this.state.socialIcon.map((item, index) => {
        //         return <span className="stuff-icon" style={{ backgroundImage: `url(${this.state.socialIcon.image})` }}
        //             key={index}
        //             item={this.state.socialIcon.image}></span>

        //     })}
        //<div/>

        return <div className="stuff-icons">
            <span className="stuff-icon" style={{ backgroundImage: `url(${this.state.socialIcon.fbIcon})` }}></span>
            <span className="stuff-icon" style={{ backgroundImage: `url(${this.state.socialIcon.twIcon})` }}></span>
            <span className="stuff-icon" style={{ backgroundImage: `url(${this.state.socialIcon.instIcon})` }}></span>
        </div>

    }
}
export default SocialIcons