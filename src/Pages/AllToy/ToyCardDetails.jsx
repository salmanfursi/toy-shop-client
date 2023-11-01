import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const ToyCardDetails = () => {
  useTitle("ToyDetails");
  const { id } = useParams();
  // console.log(id)
  const [view, setView] = useState([]);
  const {
    pictureUrl,
    name,
    sellerEmail,
    sellerName,
    rating,
    price,
    availableQuantity,
    description,
  } = view;
  // console.log(view)
  useEffect(() => {
    fetch(`https://toy-shop-server-dgsz5cipj-salmanfursi.vercel.app//toy/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setView(data);
      });
  }, []);

  return (
    <div>
      <div className="lg:flex lg:card-side bg-base-100 opacity-90 hover:border-2 hover:border-red-300 p-2 hover:shadow-xl">
        <figure className="lg:w-1/2 rounded-xl">
          <img className="mx-auto w-96 h-[500px] object-contain" src={pictureUrl} alt="Album" />
        </figure>
        <div className="card-body lg:w-1/2">
          <h2 className="font-bold text-2xl font-mono mb-2">
            Seller Name : <span className="font-serif ">{sellerName}</span>
          </h2>
          <p className="font-bold text-2xl font-mono mb-4">Seller Email : <span className=" text-blue-800 font-serif">{sellerEmail}</span></p>
          <p className="font-bold text-2xl font-mono mb-4">Toy Name : <span className="  text-red-500 font-serif px-2 py-1">{name}</span></p>
          <p className="font-bold text-2xl font-mono mb-4">Ratings :  <span className="text-orange-600">{rating}</span></p>
          <p className="font-bold text-2xl font-mono mb-4">Price : <span className="text-lime-600">{price}</span></p>
          <p className="font-bold text-2xl font-mono mb-4">Quantity : <span className="text-lime-700">{availableQuantity}</span></p>
          <p className="text-lg font-mono flex mb-4">
            <span className="font-bold text-2xl font-mono">Description:</span> {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToyCardDetails;