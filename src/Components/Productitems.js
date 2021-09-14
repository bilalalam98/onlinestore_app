import React from "react";
import { useParams } from "react-router-dom";
import Shoes from './../shoes.json';

function ProductItems() {
  let {id} = useParams();
  console.log(id)
  let shoe = Shoes[id];
  console.log(shoe)
  if (!shoe) {
    return (<h1 >Product Not Available!</h1>)
  }
  else{
  return (
    <div >
    <h1>Product : {shoe.name}</h1>
    <img src={shoe.img} height={600} alt='shoe'/>
    </div>
  );}
}

export default ProductItems;