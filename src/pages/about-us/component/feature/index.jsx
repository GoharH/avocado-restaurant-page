import React from "react";
import '../../../../assets/style/global.scss';
import './style.scss';


class Feature extends React.Component {

    render() {
        return <div className="G-padding-33">
            <div className="feature-part">
                <span className="feature-img" style={{ backgroundImage: `url(${this.props.fbox.image})` }}></span>
                <p>{this.props.fbox.main}</p>
                <div className="feature-button">
                    <button style={{ backgroundColor: this.props.fbox.colorValue }}>Read More</button>
                </div>
            </div>
        </div>
    }
}
export default Feature