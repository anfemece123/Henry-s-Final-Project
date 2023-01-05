import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../Redux/Reducer/cartSlice";
import { logout } from "../../Redux/Reducer/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { getAllusers, getByIdUser } from "../../Redux/Reducer/Users";
import axios from "axios";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import HistoryIcon from "@mui/icons-material/History";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBInputGroup,
  MDBCollapse,
} from "mdb-react-ui-kit";

export default function ContainerMenuUser() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const name = useSelector((state) =>
    // Object.keys(state.auth) >= 1 &&
    state.auth.auth.first_name[0].toUpperCase()
  );
  const image = useSelector((state) => state.users.userId);

  // const user2 = useSelector((state) => state.users.allUsers[0]);

  const cart = useSelector((state) => state.cart);

  const userId = useSelector((state) => state.auth.auth.id);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const url = "https://henry-s-final-project-backend-production.up.railway.app";

  function logOutSubmit() {
    //si esta logueado y tiene carrito , mando el carrito al back
    if (userId && Object.keys(cart).length > 0) {
      axios
        .post(`http://localhost:3001/cart/newCart/${userId}`, cart) //url
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));
    }
    dispatch(clearCart());
    dispatch(logout());
    navigate("/home");
  }
  useEffect(() => {
    dispatch(getByIdUser(userId));
    dispatch(getAllusers());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar alt="Remy Sharp" src={image.profileImage} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
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
            "&:before": {
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
        <MenuItem>
          <ListItemIcon className="align-items-center">
            <Avatar fontSize="large" className="m-0">
              {name}
            </Avatar>
            <Link to="/profile" className="text-decoration-none">
              &nbsp; Profile
            </Link>
          </ListItemIcon>
        </MenuItem>

        <Divider />

        <MenuItem>
          <ListItemIcon className="align-items-center">
            <HistoryIcon fontSize="large" />
            <Link
              to={`/purchaseHistory/${userId}`}
              className="text-decoration-none"
            >
              &nbsp; Purchase history
            </Link>
          </ListItemIcon>
        </MenuItem>

        <Divider />

        <MenuItem className="justify-content-center">
          <ListItemIcon>
            <MDBBtn color="primary" outline onClick={logOutSubmit}>
              <Logout fontSize="small" />
              &nbsp; Logout
            </MDBBtn>
          </ListItemIcon>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
