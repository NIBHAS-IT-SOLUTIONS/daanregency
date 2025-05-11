import React, { useState,useEffect } from 'react';
import './GalleryComponent.css';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function GalleryComponent({images}) {


  const [show, setShow] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleShow = (index) => {
    setCurrentIndex(index);
    setShow(true);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!show) return;

      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape') {
        setShow(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [show]);

  return (
    <div className="container my-4">
      <div className="row">
        {images.map((img, idx) => (
          <div className="col-6 col-sm-6 col-md-2 mb-4" key={idx}>
            <div className="img-hover" onClick={() => handleShow(idx)}>
              <img src={img.src} alt={img.caption} className="img-fluid rounded shadow-sm" />
            </div>
          </div>
        ))}
      </div>

      <Modal show={show} onHide={() => setShow(false)} centered size="lg">
        <Modal.Body className="position-relative p-0">
          <Button className="modal-arrow left-arrow" onClick={handlePrev} variant="dark">‹</Button>
          <img src={images[currentIndex].src} alt="Preview" className="w-100" />
          <Button className="modal-arrow right-arrow" onClick={handleNext} variant="dark">›</Button>
        </Modal.Body>
        <Modal.Footer>
          <p className="m-0 text-center w-100">{images[currentIndex].alt}</p>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default GalleryComponent