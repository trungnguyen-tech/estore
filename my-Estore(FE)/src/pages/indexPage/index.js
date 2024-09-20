import React from "react";
import "./main.css";
import Categries from "../../components/categries/categries";
import Sale from "../../components/sale/saleDetail";
import BestSellers from "../../components/bestSellers/bestSellers";
import Topbrand from "../../components/topBrands/topBrands";
import MyCarousel from "../../components/slideBanner/slideBanner";
import OurBlogs from "../../components/ourBlog/ourBlog";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import SpinnerDetail from "../../components/spinner/spinnderDetail";
import indexBanner from "../../assets/img/banner.png";

class IndexPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
    };
  };
  componentDidMount() {
    setTimeout(()=>{
      this.setState({loading:false});
    },300);
  };
  render() {
    if(this.state.loading){
      return (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <SpinnerDetail/>
        </Container>
      )
    }
    return (
      <div className="indexPageDetal">
        <div className="row tag1">
          <div className="col title">
            <h2>My EStore</h2>
            <span>
              "Tham gia vào <changeColor>công nghệ số</changeColor>"
            </span>{" "}
            <br />
            <button className="btn btnCustomIndex">Tìm hiểu thêm</button>
          </div>
          <img
            className="col"
            src={indexBanner}
            alt="My Image"
          />
        </div>
        <Categries />
        <Sale />
        <MyCarousel />
        <BestSellers title={"Sản phẩm mới"} />
        <BestSellers title={"Bestsaller"}/> 
        <Topbrand />
        
        <OurBlogs />
        <div className="ourSevices row">
          <div className="col iconOurSevices">
            <span className=" icon1"></span>
            <p>Công nghệ hoàn toàn mới</p>
          </div>
          <div className="col iconOurSevices">
            <span className=" icon2"></span>
            <p>Bảo mật an toàn</p>
          </div>
          <div className="col iconOurSevices">
            <span className=" icon3"></span>
            <p>Miễn phí ship</p>
          </div>
          <div className="col iconOurSevices">
            <span className=" icon4"></span>
            <p>Hỗ trợ 24/7</p>
          </div>
        </div>
      </div>
    );
  }
}
export default IndexPage;
