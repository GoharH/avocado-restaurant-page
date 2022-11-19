import React from "react";
import './style.scss'

class HeadTitle extends React.Component {
    render() {
        return <section className="head-title-section">
            {/* <div className="G-container"> */}
            <div className="head-title">
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
            </div>
            {/* </div> */}
        </section>
    }
}
export default HeadTitle