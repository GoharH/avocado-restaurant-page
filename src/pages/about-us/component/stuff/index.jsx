import React from "react";
import './style.scss';
import '../../../../assets/style/global.scss';

class StuffList extends React.Component {
    render() {
        return <div className="G-padding-50">
            <div className="G-flex">
                <div className="stuff-image" style={{ backgroundImage: `url(${this.props.box.image})` }}></div>
                <div className="stuff-main">
                    <h3>{this.props.box.title}</h3>
                    <p className="stuff-position">{this.props.box.position}</p>
                    <p className="stuff-direct">{this.props.box.description}</p>
                    <div className="G-flex stuff-icons">
                        {this.props.box.fbIcon ? <span className="stuff-icon" style={{ backgroundImage: `url(${this.props.box.fbIcon})` }}></span>
                            : null}
                        {this.props.box.twIcon ? <span className="stuff-icon" style={{ backgroundImage: `url(${this.props.box.twIcon})` }}></span>
                            : null}
                        {this.props.box.instIcon ? <span className="stuff-icon" style={{ backgroundImage: `url(${this.props.box.instIcon})` }}></span>
                            : null}
                    </div>
                </div>
            </div>
        </div>
    }
}
export default StuffList