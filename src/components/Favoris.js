import React from "react";
import { readUserCollection } from "./Firebase";
import { useState, useEffect } from "react";
import StoreCard from "./StoreCard";
import SearchBar from "./SearchBar";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./Component.css";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function Favoris(props) {
  // const [shopList, setShopList] = useState()

  const [display, setDisplay] = useState([<h1>Loading ...</h1>]);

  useEffect(() => {
    readUserCollection().then((snapshot) => {
      const listOfShops = snapshot.docs.map((doc) => doc.data());
      const shopList = listOfShops.filter(
        (item) => item.Commerce === true || item.Commerce === "true"
      );
      setDisplay(shopList);
    });
  }, []);

  display.map((item) => console.log(item));

  return (
    // <div style={{ "max-height": "96%", marginTop: "4%", overflow: "scroll" }}>
    <>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar sx={{ maxWidth: "80vw", mx: "auto", textAlign: "center" }}>
          <Toolbar sx={{ mx: "auto" }}>
            <Typography variant="h3" component="div">
              Mes favoris
            </Typography>
            <SearchBar />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Container
        sx={{
          maxHeight: "90%",
          marginTop: "20%",
          overflow: "scroll",
          mx: "auto",
        }}
      >
        <Box>
          {display.map((item, index) => (
            <StoreCard content={item} key={index} />
          ))}
        </Box>
      </Container>
    </>
    // </div>
  );
}

export default Favoris;
