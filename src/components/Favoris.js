import { readUserCollection } from "./Firebase/Database";
import { useState, useEffect } from "react";
import Card from "./Card";
import { loadImage } from "./Firebase/Database";

function Favoris() {
  // const [shopList, setShopList] = useState()

  const [display, setDisplay] = useState([<h1>Loading ...</h1>]);

  useEffect(() => {
    readUserCollection().then((snapshot) => {
      const listOfShops = snapshot.docs.map((doc) => doc.data());
      const shopList = listOfShops.filter(
        (item) => item.Commerce === true || item.Commerce === "true"
      );
      setDisplay(
        shopList.map((item, PK) => {
          return (
            <>
              <h1 key={PK}>
                Id : {item.UserId} - Nom : {item.Name}{" "}
              </h1>
              {item.Devanture && (
                <img
                  href={loadImage(item.Devanture)}
                  alt="Devanture Commerce"
                ></img>
              )}
            </>
          );
        })
      );
    });
  }, []);

  display.map((item) => console.log(item));

  return (
    <div>
      <h1>Mes favoris</h1>
      {display.map((item) => (
        <Card content={item} />
      ))}
    </div>
  );
}

export default Favoris;
