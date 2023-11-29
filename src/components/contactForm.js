import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './contact.css';
import { Container } from 'react-bootstrap';

function ContactForm() {
  
    return (
      <Container   className="  forms-container">
       
        <Form className="forms mx-auto">
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formContactName">
                <Form.Label className="fl_name">Prénom</Form.Label>
                <Form.Control placeholder="votre prénom" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formContactLastName">
                <Form.Label className="fl">Nom</Form.Label>
                <Form.Control placeholder="votre nom" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="formContactEmail">
            <Form.Label className="fl_mail">Addresse e-mail</Form.Label>
            <Form.Control type="email" placeholder="votre@email.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="ormContactTextarea">
            <Form.Label className="fl_msg">Message</Form.Label>
            <Form.Control as="textarea" rows={7} placeholder="Comment pouvons-nous aider ?" />
          </Form.Group>
          <Button variant="primary" type="submit" className="btn">
            Envoyer
          </Button>
          
        </Form>
        <div className='iframe'>
            <iframe  className='ifr'
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103515.09815126818!2d10.462160191567458!3d35.828233896300155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130275759ac9d10d%3A0x698e3915682cef7d!2sSousse!5e0!3m2!1sen!2stn!4v1701116538209!5m2!1sen!2stn" 
        width="800" 
        height="450" 
        style={{ border: "0"}}
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
</iframe>
</div>
      </Container>
    
      
    );
  }
export default ContactForm;