import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

function AddGallery() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow} className="mb-3">Add New Image</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control type="text" placeholder="Enter image URL" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image Title</Form.Label>
              <Form.Control type="text" placeholder="Enter image title" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image Description</Form.Label>
              <Form.Control type="text" placeholder="Enter image description" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Post Image
            </Button>
            <Button className='ms-3' variant="primary" type="submit" onClick={handleClose}>
             Close
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AddGallery;
