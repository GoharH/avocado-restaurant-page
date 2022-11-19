import React from "react";
import './style.scss'

class ModalPart extends React.Component {
    state = {
        button: false,
    }
    unHiddenText = () => {
        this.setState({ button: !this.state.button })

    }

    render() {
        return <div>
            <div className="modal-box" onClick={this.unHiddenText}><p className="modal-title">{this.props.box.title}</p></div>
            {this.state.button ? <p className="modal-hidden-text">{this.props.box.text}</p> : <></>}
        </div>
    }
}
export default ModalPart