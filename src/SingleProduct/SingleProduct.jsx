import { useEffect, useState } from "react";
import { roomList } from "../mocks/reservations";
import { useLocation, useParams, useNavigate, Link } from "react-router-dom";

export default function SingleProduct() {

  const params = useParams();

  const [productData, setProductData] = useState(roomList);
  {console.log(productData);}

  return (
    <div className="Products">
      <h1>{productData[params.id-1].name}</h1>
      <img src={productData[params.id-1].imageLocation} alt={productData.name} />
      <p>{productData[params.id-1].price}</p>
    </div>
  );
}