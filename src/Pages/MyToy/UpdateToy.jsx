/* eslint-disable no-undef */
// import { useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const UpdateToy = () => {
   const navigate=useNavigate()
  useTitle("UpdateToys");
  const { id } = useParams();
  
  console.log("update id", id);

  const handleUpdateToys = (event) => {
    event.preventDefault();
    const form = event.target;

    const price = form.price.value;
    const availableQuantity = form.availableQuantity.value;
    const description = form.description.value;
    const toysGames = { price, availableQuantity, description };
    console.log(price, availableQuantity, description);
    fetch(`https://b7a11-toy-marketplace-server-side-salmanfursi.vercel.app/toys/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toysGames),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Toys update success",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        navigate(-1)

      });
  };
  return (
    <div className="flex flex-col items-center justify-center md:h-[500px] shadow-md">
      <div className="bg-orange-400 p-10 rounded-lg shadow-md w-full md:w-2/3 lg:w-1/2">
        <h1 className="text-2xl font-bold mb-6 text-center">Update Toys</h1>
        <form onSubmit={handleUpdateToys}>
          <div className="flex gap-2 ">
            <div className="mb-4 w-1/2">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="price"
              >
                Price
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                id="price"
                name="price"
                type="number"
                // defaultValue={price}
                placeholder="Toy Price"
                required
              />
            </div>

            <div className="mb-4 w-1/2">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="availableQuantity"
              >
                Available Quantity
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                id="availableQuantity"
                name="availableQuantity"
                type="number"
                placeholder="Toy Quantity"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              id="description"
              name="description"
              placeholder="Toy Description"
              rows="5"
              required
            ></input>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Update Toys
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default UpdateToy;