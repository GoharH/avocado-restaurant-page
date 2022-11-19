import React from "react";
import './style.scss'

class ModalPart extends React.Component {
    unHiddenText = () => {

    }
    render() {
        return <div>
            <div className="modal-box"><p className="modal-title">{this.props.box.title}</p></div>
            {this.props.children}
        </div>
    }
}
export default ModalPart