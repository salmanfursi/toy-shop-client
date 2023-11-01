import { useLoaderData } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";
import { useState } from "react";
import useTitle from "../../hooks/useTitle";
import AllToyCard from "./AllToyCard";
const AllToys = () => {
  const [searchText, setSearchText] = useState("");
  const toyCars = useLoaderData();
  // console.log(toyCars);
  //  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
  };
  useTitle("AllToys");

  const handleFilter = (toy) => {
    if (searchText) {
      if (toy?.name?.toLowerCase()?.includes(searchText?.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    } else return true;
  };

  return (
    <div>
      <div className=" flex justify-center ">
        

        <div className="form-control m-4">
          <div className="input-group">
            <input 
             onChange={(e) => setSearchText(e.target.value)}
            type="text" 
            placeholder="Search…" 
            className="input input-bordered"/>
            <button 
            onClick={handleSearch}
            className="btn btn-square">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </div>
        </div>

      </div>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead className="bg-white">
              <tr className="text-center">

                <th>Toys Photos</th>
                <th>ToysnName</th>
                <th>Sub-category</th>
                <th>Seller-Name</th>
                <th>Price:</th>
                <th>Quantity</th>
                <th className="flex items-center md:ml-8 gap-2">
                  Details
                  <FaInfoCircle className="text-2xl"></FaInfoCircle>
                </th>
              </tr>
            </thead>
            <tbody>
              {toyCars.filter(handleFilter).map((toy) => (
                <AllToyCard key={toy._id} toy={toy}></AllToyCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;