import { readUserCollection } from "./Firebase/Database"
import { useState, useEffect } from 'react'
import Card from "./Card"

function Favoris() {
  const [shopList, setShopList] = useState()

  const [display, setDisplay] = useState([<h1>Loading ...</h1>])

  useEffect(() => {
    readUserCollection()
    .then((snapshot) => {
      const listOfShops = snapshot.docs.map(doc => doc.data())
      setShopList(listOfShops.filter(item => item.Commerce === "true"))
      listOfShops.map((item)=>console.log(item))
      setDisplay(shopList.map((item, PK) => {return <h1 key={PK}>Id : {item.UserId} - Nom : {item.Name} </h1>}))
    })
  }, [])

  console.log(display)

  return (
    <div>
      <h1>Mes favoris</h1>
      {display.map((item) => 
        <Card content={item} />
      )}
    </div>
  )
}

export default Favoris;