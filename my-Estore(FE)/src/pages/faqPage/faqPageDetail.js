import TabTopics from "../../components/tabTopics/tabTopics";
import { Image, Container } from "react-bootstrap";
import "./faqPageDetail.css";
import banner from "../../assets/img/bannerFAQ.png";
import React, { useState, useEffect } from "react";
import SpinnerDetail from "../../components/spinner/spinnderDetail";

const FAQDetail = () => {
  const [loading, setLoadng] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadng(false);
    }, 300);
  }, []);

  if (loading) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <SpinnerDetail/>
      </Container>
    );
  }

  return (
    <div className="faqDetails container">
      <div className="faqBanner">
        <Image fluid src={banner} className="bannerImgFAQ" />
      </div>
      <TabTopics />
    </div>
  );
};

export default FAQDetail;
