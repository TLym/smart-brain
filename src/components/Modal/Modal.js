import React from 'react'; 
import ReactDOM from 'react-dom'; 
import './Modal.css'; 

const modalRoot = document.getElementById('modal-root');

// a portal element inserts into the dom tree after the modal's children are mounted 
class Modal extends React.Component {
    constructor(props) {
        super(props); 
        this.el = document.createElement('div'); //el = element. this div element is going to be wrapped arround all the children of the Modal Component (from the createPortal react method)
    };

    componentDidMount() {
        modalRoot.appendChild(this.el);
    };

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }; 

    render() {
        return ReactDOM.createPortal(this.props.children, this.el); 
    };
};

export default Modal; 