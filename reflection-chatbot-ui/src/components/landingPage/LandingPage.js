import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './LandingPage.css';
import BotIcon from '../chat/BotIcon.png';
import GoalImg from './images/niwin.jpg';
import ReflectionImg from './images/reflection.png';
import WorkInProgImg from './images/work_in_progress.png';


const LandingPage = ({ startChat }) => {
    return (
        <React.Fragment>
            <Container className="LPContainer">
                <div className="LPTitleAndIntro">
                    <Row>
                        <h1 className="LPPageTitle">Welcome to the Reflect On Feelings Chatbot</h1>
                    </Row>
                    <Row>
                        <img className="LPBotIcon" src={BotIcon} alt="chatbot icon"/>
                    </Row>
                    <Row>
                    <Button className="startChatBtn" onClick={startChat}>Start Conversation</Button>
                        <p>My name is Niwin Kumar , regno: 20MIA1011 This is my TARP Project for the academic fall semester 23-24 thank you for taking the time to review my project i hope this project meets the right students and makes a difference in their feelings . I have found that often people get so caught up in everyday life that they forget to take a step back to reflect on what is important to them. It is my hope that my chatbot will help you to analyze how you are spending your time and get you to consider how you exemplify your values through your actions. Click the button at the bottom of the page to begin your conversation.</p>
                    </Row>
                </div>
                <Row>
                    <Col className='LPSectionTitle LightSection'>
                        <h2>My Goal</h2> <br/>
                        <img src={GoalImg} alt='Goal_icon'/>
                    </Col>
                    <Col className='LPSectionContent'>
                        The goal of this project is to create a chatbot which will communicate with the you through text and lead you through the motivational interviewing process. This process is a counselling method that enhances motivation by exploring and resolving ambivalence. Through this technique the chatbot will help you to examine your values and consider how your actions reflect what is important to you. We also hope that this experience will help people regulate their behavior and improve the ability of self-control & self-awareness.
                    </Col>
                </Row>
            </Container>

        </React.Fragment>
    );
};

export default LandingPage;