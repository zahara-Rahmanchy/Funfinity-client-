import React, {useState, useEffect} from "react";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";

const ShopCategory = () => {
  const [cat, setCat] = useState([]);
  const [toys, setToys] = useState([]);
  const [currentCat, setCurrentCat] = useState("Architecture Puzzles");

  useEffect(() => {
    fetch("https://funfinity-toys-server.vercel.app/toys")
      .then(res => res.json())
      .then(data => setCat(data));
  }, []);

  const uniqueCat = [...new Set(cat.map(c => c.subCategory))];

  const handleTab = c => {
    setCurrentCat(c);

    fetch(`https://funfinity-toys-server.vercel.app/toys/${c}`)
      .then(res => res.json())
      .then(data => setToys(data))
      .catch(error => console.error(error));
  };

  return (
    <div className="my-20 max-w-7xl mx-auto">
      <Tabs>
        <div className="w-full  mx-auto ">
          <TabList className="mb-4  grid-cols-3 grid md:grid-cols-5 gap-4 text-center">
            {uniqueCat.map((c, index) => (
              <Tab
                key={index}
                className="tab text-error font-semibold hover:tab-active text-xl mb-10 mx-auto border-s-0  border-b-4 border-purple-500"
                onClick={() => handleTab(c)}
              >
                {c}
              </Tab>
            ))}
          </TabList>
        </div>
        <div className="max-w-7xl mx-auto bg-rose-200">
          {uniqueCat.map((c, index) => (
            <TabPanel key={index} className="bg-purple-200">
              <div className="grid md:grid-cols-3 p-3 grid-cols-1 gap-6 bg-rose-200 ">
                {toys.map(t => (
                  <div
                    className="card card-compact  bg-base-200 shadow-lg shadow-blue-400 p-4 h-[400px] m-3"
                    key={t._id}
                  >
                    <figure>
                      <img src={t.picture} className="" alt={t.Name} />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-2xl text-rose-400 font-bold">
                        {t.Name}
                      </h2>
                      <div>
                        <p className="card-title text-xl text-blue-600 font-semibold">
                          Price: $ {t.Price}
                        </p>
                        <p className=" text-yellow-600 text-lg font-semibold">
                          Rating: {t.Rating} stars
                        </p>
                      </div>
                      <div className="card-actions justify-end">
                        <button
                          className="btn btn-primary btn-xs"
                          onClick={() => handledetails(t._id)}
                        >
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}{" "}
              </div>
            </TabPanel>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default ShopCategory;
