// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

// import "react-tabs/style/react-tabs.css";
const ShopByCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("avengers");
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://toy-shop-server-dgsz5cipj-salmanfursi.vercel.app//toys/category/${selectedCategory}`
    )
      .then((response) => response.json())
      .then((data) => setToys(data))
      .catch((err) =>
        console.error("Error fetcing toys based on sub category", err)
      )
      .finally(() => setLoading(false));
  }, [selectedCategory]);

  const handleLoadAll = () => {
    
      setLoading(true);
      fetch(
        `https://toy-shop-server-dgsz5cipj-salmanfursi.vercel.app//toys/categoryall/${selectedCategory}`
      )
        .then((response) => response.json())
        .then((data) => setToys(data))
        .catch((err) =>
          console.error("Error fetcing toys based on sub category", err)
        )
        .finally(() => setLoading(false));


  }

  return (
    <div className="bg-blue-300 opacity-90 text-4xl font-bold ">
      <Tabs>
        <TabList>

          <div className="tabs pb-4 p-4 flex justify-center">
            <Link> <Tab className={`tab tab-lifted hover:text-orange-400 ${selectedCategory == 'avengers' ? 'tab-active  text-orange-600' : ''} pl-2 text-3xl text-black font-serif `} onClick={() => setSelectedCategory("avengers")}>Avengers
            </Tab></Link>
            <Link><Tab className={`tab tab-lifted hover:text-orange-400 ${selectedCategory == 'transformer' ? 'tab-active  text-orange-600' : ''} pl-2 text-3xl text-black font-serif `} onClick={() => setSelectedCategory("transformer")}>
              Transformer
            </Tab></Link>
            <Link><Tab className={`tab tab-lifted hover:text-orange-400 ${selectedCategory == 'starwars' ? 'tab-active  text-orange-600' : ''} text-3xl text-black font-serif`} onClick={() => setSelectedCategory("starwars")}>
              Starwars
            </Tab></Link>

          </div>

        </TabList>

        <TabPanel>
          {loading ? (
            <span className="loading loading-ring loading-3xl"></span>
          ) : (
            <div className=" grid grid-cols-1 md:ml-40 lg:grid-cols-2 pb-4">
              {toys?.map((toy) => (
                <div
                  className="h-[500px] card card-compact w-96 bg-base-100 shadow-2xl"
                  key={toy._id}
                >
                  <figure>
                    <img src={toy.pictureUrl} alt={toy.name} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Name:{toy.name}</h2>
                    <p>Price : {toy.price}</p>
                    <p>Rating : {toy.rating}</p>

                    <div className="card-actions justify-end">
                      <Link to={`/categoryDetails/${toy._id}`}>
                        <button className="btn btn-primary">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="flex justify-center">
            <button
            onClick={handleLoadAll} 
            className="btn btn-primary mb-2">load More</button>
          </div>

        </TabPanel>

        <TabPanel className="">
          {loading ? (
            <span className="loading loading-ring loading-3xl"></span>
          ) : (
            <div className="md:ml-28 grid grid-cols-1 lg:grid-cols-2">
              {toys?.map((toy) => (
                <div
                  className="h-[500px] card card-compact w-96 bg-base-100 shadow-xl"
                  key={toy._id}
                >
                  <figure>
                    <img src={toy.pictureUrl} alt={toy.name} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Name:{toy.name}</h2>
                    <p>Price : {toy.price}</p>
                    <p>Rating : {toy.rating}</p>
                    <div className="card-actions justify-end">
                      <Link to={`/categoryDetails/${toy._id}`}>
                        <button className="btn btn-primary">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="flex justify-center">
            <button
            onClick={handleLoadAll} 
            className="btn btn-primary mb-2">load More</button>
          </div>

        </TabPanel>

        <TabPanel className="flex">
          {loading ? (
            <span className="loading loading-ring loading-lg"></span>
          ) : (
            <div className="md:ml-28 grid grid-cols-1 lg:grid-cols-2">
              {toys?.map((toy) => (
                <div
                  className="h-[500px] card card-compact w-96 bg-base-100 shadow-xl"
                  key={toy._id}
                >
                  <figure>
                    <img className="h-96" src={toy.pictureUrl} alt={toy.name} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Name:{toy.name}</h2>
                    <p>Price : {toy.price}</p>
                    <p>Rating : {toy.rating}</p>
                    <div className="card-actions justify-end">
                      <Link to={`/categoryDetails/${toy._id}`}>

                        <button className="btn btn-primary">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="flex justify-center">
            <button
            onClick={handleLoadAll} 
            className="btn btn-primary  mb-2">load More</button>
          </div>

        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;