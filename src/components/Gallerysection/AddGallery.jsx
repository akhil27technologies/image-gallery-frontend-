import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
// Import the createImage function from your API service
import { createImage } from '../../api/api';

function AddGallery({ refreshGallery }) {
  
  const [show, setShow] = useState(false);
  const [imageData, setImageData] = useState({
    Id: '',
    Title: '',
    Description: '',
    ImagePath: '',
  });

  const handleClose = () => {
    setShow(false);
    setImageData({
      Id: '',
      Title: '',
      Description: '',
      ImagePath: '',
    });
  };

  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setImageData({
      ...imageData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createImage(imageData); // Call the API to create a new image
      refreshGallery(); // Refresh the gallery after adding a new image
      handleClose();
      console.log(imageData);
    } catch (error) {
      console.error('Failed to create image', error.response || error);
    }
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow} className="mb-3">
        Add New Image
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Image ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image ID"
                name="Id"
                value={imageData.Id}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image URL"
                name="ImagePath"
                value={imageData.ImagePath}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image title"
                name="Title"
                value={imageData.Title}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image description"
                name="Description"
                value={imageData.Description}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Post Image
            </Button>
            <Button className="ms-3" variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AddGallery;


