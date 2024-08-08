import React from 'react'
import { Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <>
      <footer className="bg-dark text-white p-4">
        <Row>
          <Col md={3}>
            <h5>About Us</h5>
            <p>Brief description about your website or company.
            Brief description about your website or company.</p>
          </Col>
          <Col md={3}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white">Home</a></li>
              <li><a href="#gallery" className="text-white">Gallery</a></li>
              <li><a href="#contact" className="text-white">Contact</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Additional Links</h5>
            <ul className="list-unstyled">
              <li><a href="#services" className="text-white">Services</a></li>
              <li><a href="#blog" className="text-white">Blog</a></li>
              <li><a href="#faq" className="text-white">FAQ</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact Us</h5>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
          </Col>
        </Row>
      </footer>
    </>
  )
}

export default Footer