import React from "react";
import { readUserCollection } from "./Firebase";
import { useState, useEffect } from "react";
import StoreCard from "./StoreCard";
import SearchBar from "./SearchBar";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./Component.css";

function Favorite(props) {
  const [searchValue, setSearchValue] = useState("");

  const [isCommerceCollectionLoading, setIsCommerceCollectionLoading] =
    useState(true);
  const [commerceCollection, setCommerceCollection] = useState([]);
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    readUserCollection().then((snapshot) => {
      const listOfShops = snapshot.docs.map((doc) => doc.data());
      let shopList = listOfShops.filter((item) => item.Adresse);
      setCommerceCollection(shopList);
      setIsCommerceCollectionLoading(false);
    });
  }, []);

  useEffect(() => {
    setDisplay(
      searchValue
        ? commerceCollection.filter(
            (item) =>
              item["Nom du commerce"]
                .toLowerCase()
                .includes(searchValue.toLowerCase()) ||
              item.Adresse?.toLowerCase().includes(searchValue.toLowerCase()) // TODO a harmoniser par rapport aux donnees requises dans le formulaire
          )
        : [...commerceCollection]
    );
  }, [searchValue, commerceCollection]);

  display.map((item) => console.log(item));

  return isCommerceCollectionLoading ? (
    <h1>Loading ...</h1>
  ) : (
    // <div style={{ "max-height": "96%", marginTop: "4%", overflow: "scroll" }}>
    <>
      <AppBar
        sx={{
          maxWidth: "90%",
          mx: "auto",
          textAlign: "center",
          // zIndex: "-1",
        }}
      >
        <Toolbar sx={{ mx: "auto" }}>
          <Typography variant="h3" component="div">
            Mes favoris
          </Typography>
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </Toolbar>
      </AppBar>
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

export default Favorite;
