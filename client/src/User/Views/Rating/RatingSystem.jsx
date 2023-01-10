import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Textarea from "@mui/joy/Textarea";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import FormatBold from "@mui/icons-material/FormatBold";
import FormatItalic from "@mui/icons-material/FormatItalic";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Check from "@mui/icons-material/Check";
import Rating from "@mui/material/Rating";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProductReview } from "../../../Redux/Reducer/RatingSlice";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Footer from "../../Features/Footer";
import NavBar from "../../Features/NavBar";
import { getProductDetails } from "../../../Redux/Reducer/productDetails";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function RatingSystem() {
  const dispatch = useDispatch();
  const [italic, setItalic] = React.useState(false);
  const [fontWeight, setFontWeight] = React.useState("normal");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [calification, setCalification] = React.useState(2);
  const [comment, setComment] = React.useState("");
  const token = useSelector((state) => state.auth.auth.token);
  const userId = useSelector((state) => state.users.userId);
  const productIdAux = useParams();
  const navigate = useNavigate();
  const [exist, setExist] = useState(false);
  const { id } = useParams();
  const productId = parseInt(productIdAux.id);
  const detail = useSelector((state) => state.details.details);

  const handleChange = (e) => {
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
    });
  };

  const verificar = userId.Reviews.filter(
    (element) => element.ProductId === productId
  );

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch]);
  
  const handleClick = (e) => {
    if (!verificar.length) {
      const reviewData = { calification, ...comment, productId, token };
      dispatch(createProductReview(reviewData));

      swal({
        title: "Done!",
        text: "Be carefull with what you say. You can hurt someone 😧",
        icon: "success",
      });
      navigate(`/detail/${productId}`);
    } else {
      swal({
        title: "Already voted!",
        text: "If you have a problem. Contact Us.",
        icon: "warning",
      });
    }
  };

  return (
    <MDBContainer fluid className="p-0 m-0" id="chec-div">
      <MDBRow fluid className="p-0 m-0">
        <MDBCol className="p-0 m-0">
          <NavBar />
        </MDBCol>
      </MDBRow>
      <MDBRow fluid center className="p-0 pt-4 m-0 shadow-4-strong">
        <MDBCol className="p-0 m-0" xl="6">
          <MDBCard>
            <MDBCardBody className="text-center justify-content-center m-auto">
              <MDBCardTitle>{detail.title}</MDBCardTitle>
              <MDBCardImage
                src={detail.image}
                position="center"
                style={{ maxWidth: "320px", minWidth: "320px" }}
                fluid
                alt={detail.title}
              />
            </MDBCardBody>
          </MDBCard>
          <FormControl maxWidth="md" className=" text-center mb-5">
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Typography component="legend">
                Please Rate Your Product
              </Typography>
              <Rating
                name="simple-controlled"
                value={calification}
                onChange={(event, newValue) => {
                  setCalification(newValue);
                }}
              />
            </Box>
            <FormLabel className="align-self-center">
              Your review here
            </FormLabel>
            <Textarea
              placeholder="Type something here…"
              minRows={3}
              // Capturar valor de este campo
              valur={comment}
              name="comment"
              onChange={handleChange}
              endDecorator={
                <Box
                  sx={{
                    display: "flex",
                    gap: "var(--Textarea-paddingBlock)",
                    pt: "var(--Textarea-paddingBlock)",
                    borderTop: "1px solid",
                    borderColor: "divider",
                    flex: "auto",
                  }}
                >
                  <IconButton
                    variant="plain"
                    color="neutral"
                    onClick={(event) => setAnchorEl(event.currentTarget)}
                  >
                    <FormatBold />
                    <KeyboardArrowDown fontSize="md" />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={() => setAnchorEl(null)}
                    size="sm"
                    placement="bottom-start"
                    sx={{ "--List-decorator-size": "24px" }}
                  >
                    {["200", "normal", "bold"].map((weight) => (
                      <MenuItem
                        key={weight}
                        selected={fontWeight === weight}
                        onClick={() => {
                          setFontWeight(weight);
                          setAnchorEl(null);
                        }}
                        sx={{ fontWeight: weight }}
                      >
                        <ListItemDecorator>
                          {fontWeight === weight && <Check fontSize="sm" />}
                        </ListItemDecorator>
                        {weight === "200" ? "lighter" : weight}
                      </MenuItem>
                    ))}
                  </Menu>
                  <IconButton
                    variant={italic ? "soft" : "plain"}
                    color={italic ? "primary" : "neutral"}
                    aria-pressed={italic}
                    onClick={() => setItalic((bool) => !bool)}
                  >
                    <FormatItalic />
                  </IconButton>
                  <Button onClick={handleClick} sx={{ ml: "auto" }}>
                    SUBMIT
                  </Button>
                </Box>
              }
              sx={{
                minWidth: 300,
                fontWeight,
                fontStyle: italic ? "italic" : "initial",
              }}
            />
          </FormControl>
        </MDBCol>
      </MDBRow>
      <MDBRow className="">
        <MDBCol>
          <Footer />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
