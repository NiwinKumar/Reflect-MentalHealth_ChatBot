import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './ConsentForm.css';

const ConsentForm = ({ handleClose, show }) => {
    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            onHide={handleClose}
            backdrop='static'
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Reflection Chatbot Consent Form
        </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className='display-linebreak-consentForm'>
                    Dear Collaborators and Participants,
                </p>   
                <p className='display-linebreak-consentForm'>
                    I, Niwin Kumar (Reg No: 20MIA1011), the creator of the "Reflect on Mental Health Chatbot" project, kindly request all parties involved to respect the intellectual property rights associated with this project. The ideas, concepts, and information shared are confidential and proprietary. I urge you not to copy, reproduce, or implement this idea without explicit written consent. This project is the result of dedicated effort, creativity, and innovation, and I trust that all contributors will uphold ethical standards by refraining from unauthorized use. Your cooperation in protecting intellectual property is appreciated.
                </p>
                <p className='display-linebreak-consentForm'>
                    Thank you for your understanding and adherence to these principles.
                 </p>
                <p className='display-linebreak-consentForm'>
                    Niwin Kumar
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button className="agreeBtn" onClick={handleClose}>I Agree</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConsentForm;