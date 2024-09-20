import React from "react";
import { useAuth } from "../../context/authContext";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import { NavLink } from "react-router-dom";
import "./profileDetail.css";

const ProfileDetails = () => {
  const { logout, userDatas } = useAuth();
  const userData = userDatas;

  const handleLogout = () => {
    logout();
    window.location.reload();
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="profileDetails">
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ ml: 2 }}
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <Avatar
          src={userData && userData.avatarUrl}
          sx={{ width: 32, height: 32 }}
        >
          M
        </Avatar>
      </IconButton>
      <Menu
        className="menu-items"
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <NavLink
          exact="true"
          to="/account"
        >
          <MenuItem className="menuItems " onClick={handleClose}>
            <div className="avatarUser">
              <Avatar src={userData && userData.avatarUrl} />
              {userData && userData.fullName }
            </div>
            <p className="emailUser">{userData && userData.role}</p>
          </MenuItem>
        </NavLink>
        {userData && userData.role === "admin" ? <MenuItem className="menuItems ">
          <NavLink
            exact = "true"
            to = "/admin"
          >
            <div className="menuItem">
            <i class="fa-solid fa-screwdriver-wrench"></i>{" "}
              <span>AdminPage</span>
            </div>
          </NavLink>
        </MenuItem> : null}
        <NavLink  exact = "true" to ="/account">
          <MenuItem className="menuItems " onClick={handleClose}>
            <div className="menuItem">
              <i class="fa-solid fa-bag-shopping"></i>{" "}
              <span>Lịch sử mua hàng</span>
            </div>
          </MenuItem>
        </NavLink>
        <NavLink exact="true" to="/account">
          <MenuItem className="menuItems" onClick={handleClose}>
            <div className="menuItem">
              <i class="fa-solid fa-heart-circle-check"></i>
              <span>Yêu thích</span>
            </div>
          </MenuItem>
        </NavLink>
        <MenuItem className="menuItems " onClick={handleLogout}>
          <div className="menuItem">
            <i class="fa-solid fa-arrow-right-from-bracket"></i>{" "}
            <span>Logout</span>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileDetails;
