import React from "react";
import './style.scss';



class HomeMenuList extends React.Component {

    render() {
        return <div className="G-padding-25">
            <div className="menu-list-item">
                <span style={{ backgroundImage: `url(${this.props.box.image})` }}></span>
                {this.props.box.title ? <h2>{this.props.box.title}</h2> : null}
                <p className="menu-list-text">{this.props.box.description}</p>
                <p className="menu-list-price">{this.props.box.price}</p>
            </div>
        </div>

    }
}
export default HomeMenuList
