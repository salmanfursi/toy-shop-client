import { useContext, useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../Providers/AuthProviders";
import MyToysCard from "./MyToysCard";

// ?sort=desc = boro theke choto / choto

const MyToys = () => {
   useTitle("MyToys");
  const [isDescending, setIsDescending] = useState(false); 
  const { user,loading } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  // console.log(toys)
  useEffect(() => {
  
    const url = `https://toy-shop-server-dgsz5cipj-salmanfursi.vercel.app/toy?email=${user?.email}&${isDescending ? "sort=desc" : ""}`;


    fetch(url)
      .then((res) => res.json())
      .then((data) => {
   
        setToys(data);
      });
  }, [isDescending]);

  const handleClick = () => {
    setIsDescending(!isDescending);
    console.log(isDescending);
 }

 
  return (
    <div>
      {loading ? 
<span className="loading loading-dots loading-lg"></span>
:''}
      <div>
        <div className="overflow-x-auto w-full h-[500px] bg-white">
          <button className="bg-green-500 py-2 px-4 my-5 text-white font-bold" onClick={handleClick}>{ isDescending ? 'Descending' : 'Ascending' }</button>
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Toys-Photos & Name</th>
                <th>Sub-category</th>
                <th>Seller-Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {toys.map((toy) => (
                <MyToysCard
                  key={toy._id}
                  toy={toy}
                  setToys={setToys}
                  toys={toys}
                ></MyToysCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;