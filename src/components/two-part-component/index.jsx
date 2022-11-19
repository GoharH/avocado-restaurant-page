import React from "react";
import './style.scss';
import img from '../../assets/images/avocado.jpg';


class TwoPartSection extends React.Component {
    state = {
        image: img,
        title: '',
        description: '',
    }
    render() {
        return <>
            <div className="G-padding-50">
                <div className="two-part-image" style={{ backgroundImage: `url(${img})` }}></div>
            </div>
            <div className="G-padding-50">
                <div className="two-part-text">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.description}</p>
                    <div className="avo-button">
                        <button className="avocado-button">Read More</button>
                    </div>
                </div>
            </div>
        </>
    }
}
export default TwoPartSection