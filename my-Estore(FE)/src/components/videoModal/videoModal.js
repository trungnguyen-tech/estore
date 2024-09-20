import React, { useState } from "react";
import { Card, Modal } from "react-bootstrap";
import "./videosDetail.css"

const VideoModal = ({video}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card style={{ width: "350px",margin: "10px", cursor: "pointer" }} onClick={handleShow}>
        <Card.Img variant="top" src={video.imgSrc} />
        <Card.ImgOverlay className="custom-overlay">
          <Card.Title className="custom-title-overlay">{video.title}</Card.Title>
        </Card.ImgOverlay>
      </Card>

      <Modal show={show} onHide={handleClose} centered size="lg" >
        <Modal.Header closeButton>
          <Modal.Title>{video.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="embed-responsive embed-responsive-16by9 ratio ratio-16x9">
            <iframe
              width="100%"
              height="315"
              src={video.videoSrc}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default VideoModal;
