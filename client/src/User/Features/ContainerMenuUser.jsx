import * as React from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../Redux/Reducer/cartSlice";
import { logout } from "../../Redux/Reducer/authSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { getAllusers, getByIdUser } from "../../Redux/Reducer/Users";
import { useEffect } from "react";
// import { get } from "../../../../api/src/app";

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
    if (userId && Object.keys(cart)) {
      axios
        .post(`${url}/cart/newCart/${userId}`, cart)
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
        <Link to="/profile">
          <MenuItem onClick={() => dispatch(getAllusers())}>
            <Avatar sx={{ width: 32, height: 32 }}>{name}</Avatar>
            Profile
          </MenuItem>
        </Link>
        {/* <MenuItem>
          <Avatar /> My account
        </MenuItem> */}
        <Divider />
        {/* <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem> */}
        <Link to={`/purchaseHistory/${userId}`}>
          <MenuItem>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Purchase history
          </MenuItem>
        </Link>
        <MenuItem>
          <button onClick={logOutSubmit}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </button>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
