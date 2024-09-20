import "./orderDetail.css"
import { Table, Row } from "react-bootstrap";
import { useCart } from "../../../context/cartContext";
import OrderDetailItem from "../../../components/orderDetailItem/orderDetailItem";

const OrderDetail = () =>{
    const {historyOrder} = useCart();
    console.log(historyOrder);
    return (
        <div className="orderDetail">
            <div>
                <h5 className="profileTitle">Lịch sử mua hàng</h5>
                <span className="profileSubTitle">
                    (Order History)
                </span>
            </div>
            <Row style={{maxHeight: "500px", overflowY: "auto"}}>
                <Table striped bordered hover className="customTableOrderDetail" >
                    <thead>
                        <tr>
                            <th>Mã Hóa Đơn</th>
                            <th>Tổng số sản phẩm</th>
                            <th>Thành tiền</th>
                            <th>Ngày mua</th>
                            <th>Trạng thái</th>
                            <th>Xem chi tiết</th>
                        </tr>
                    </thead>
                    <tbody>
                        {historyOrder && historyOrder?.map((item, index) => {
                            return <OrderDetailItem cartItem={item} index = {index}/>
                        })}
                    </tbody>
                </Table>
            </Row>
        </div>
    )
}
export default OrderDetail;