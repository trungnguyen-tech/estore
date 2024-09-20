import { Card } from "react-bootstrap";
import { useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import "./productCartItem.css";
import { useCart } from "../../context/cartContext";
import { Snackbar } from "@mui/material";

const ProductCartItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  const { removeItem } = useCart();

  const handleCloseSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleRemoveItem = () => {
    if (item) {
      removeItem(item.cartItemId);
    }
  };
  return (
    <div className="card cardItem">
      <Card.Header>
        <Card.Title className="titleCart">
          {item.product.productName}
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Img className="imgItem" src={item.product.productImages[0]} />
        <Card.Text>
          <div className="customInforProduct">
            <span>Thương hiệu: {item.product.brand}</span>
            <span>Màu sắc: {item.product.color}</span>
            <span>Số Lượng: {item.quantity}</span>
            <span
              style={{
                color: "var(--secondary-main)",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              {item.price.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </span>
          </div>
          <Tooltip title="Xóa sản phẩm">
            <IconButton
              onClick={() => {
                handleRemoveItem();
                setOpen(true);
              }}
            >
              <i class="fa-solid fa-trash"></i>
            </IconButton>
          </Tooltip>
        </Card.Text>
      </Card.Body>
      <Snackbar
        open={open}
        autoHideDuration={2500}
        onClose={handleCloseSnackBar}
        message={<><i class="fa-solid fa-circle-check" style={{color: 'green'}}></i> Đã xóa item thành công</>}
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundColor: "white",
            color: "black",
            fontSize: "16px",
          },
        }}
      />
    </div>
  );
};

export default ProductCartItem;
