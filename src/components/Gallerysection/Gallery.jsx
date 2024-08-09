import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Modal, Button } from 'react-bootstrap';
import { getImages, deleteImage } from '../../api/api'; // Import API functions
import './Gallery.css'; // Ensure this path is correct
import AddGallery from './AddGallery';

function Gallery() {

  const [images, setImages] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await getImages();
      setImages(response.data);
    } catch (error) {
      console.error('Failed to fetch images', error);
    }
  };

  const handleShow = (image) => {
    setSelectedImage(image);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleDelete = async () => {
    if (selectedImage) {
      try {
        await deleteImage(selectedImage.id);
        fetchImages(); 
        handleClose();
      } catch (error) {
        console.error('Failed to delete image', error);
      }
    }
  };

  return (
    <div className="gallery-container">
      <h2 className="text-center fw-bolder mb-2">Image Gallery</h2>
      <AddGallery refreshGallery={fetchImages} /> {/* Pass refreshGallery function */}
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {images.map((image,index) => (
          <Col key={index}>
            <Card className='rounded-4' onClick={() => handleShow(image)}>
              <Card.Img variant="top" src={image.imagePath} className='rounded-2 zoom-img' />
              <Card.Body>
                <Card.Title>{image.title}</Card.Title>
                <Card.Text>{image.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedImage?.title}</Modal.Title>
        </Modal.Header>
       
        <Modal.Body
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={selectedImage?.imagePath}
            alt={selectedImage?.title}
            style={{ width: "400px", height: "400px" }}
          />
         
        </Modal.Body>
        <p className='m-2 text'>{selectedImage?.description}</p>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Gallery;

