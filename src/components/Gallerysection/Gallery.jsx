import React, { useState } from 'react';
import { Card, Col, Row, Modal, Button } from 'react-bootstrap';
import './Gallery.css'; // Ensure this path is correct
import images1 from '../../Assts/images1.jpeg';
import images2 from '../../Assts/images2.jpeg';
import image3 from '../../Assts/image3.jpg'; 
import images4 from  '../../Assts/images4.jpeg';
import images5 from  '../../Assts/images5.jpeg';
import images6 from  '../../Assts/images6.jpeg';
import images7 from  '../../Assts/images7.jpeg';
import images8 from  '../../Assts/images8.jpeg';
import AddGallery from './AddGallery';

function Gallery() {
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: images1, title: 'Image 1', description: 'Explore the beauty of the worlds most stunning landscapes. From towering mountains to serene lakes' },
    { src: images2, title: 'Image 2', description: 'Discover the wild side of nature. This collection showcases amazing wildlife photography' },
    { src: image3, title: 'Image 3', description: 'Experience the rich tapestry of cultures from around the world. These photos celebrate ' },
    { src: images4, title: 'Image 4', description: 'Step into the world of creativity with this collection of artistic images. From modern art to ' },
    { src: images5, title: 'Image 5', description: 'Fuel your wanderlust with images that inspire adventure. Whether its hiking in remote areas or ' },
    { src: images6, title: 'Image 6', description: 'Find tranquility in our collection of peaceful and serene images. Perfect for moments' },
    { src: images7, title: 'Image 7', description: 'Fuel your wanderlust with images that inspire adventure. Whether its hiking in remote areas or' },
    { src: images8, title: 'Image 8', description: 'Travel back in time with our historical image collection. These photos preserve significant ' },
  ];

  const handleShow = (image) => {
    setSelectedImage(image);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleDelete = () => {
    // Add your delete logic here
    console.log('Deleting image:', selectedImage);
    handleClose();
  };

  return (
    <div className="gallery-container">
      <h2 className="text-center fw-bolder mb-2">Image Gallery</h2>
      <AddGallery />
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {images.map((image, index) => (
          <Col key={index}>
            <Card className='rounded-4' onClick={() => handleShow(image)}>
              <Card.Img variant="top" src={image.src} className='rounded-2 zoom-img' />
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
            src={selectedImage?.src}
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
