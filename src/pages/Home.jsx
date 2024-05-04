import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { Link } from "react-router-dom";

const API = "https://6631e14cc51e14d69562ac56.mockapi.io/user";

function Home() {
  const [value, setValue] = useState([]);

  async function getData() {
    try {
      const res = await axios.get(API);

      setValue(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="home">
      <div className="container">
        <div className="home__icon">
          <select className="home__btn-btn" name="" id="">
            <option value="">Apple</option>
            <option value="">Mi</option>
            <option value="">Samsung</option>
            <option value="">Honor</option>
            <option value="">Poco</option>
            <option value="">Huawei</option>
            <option value="">Oppo</option>
          </select>
          <div className="home__icon2">
            <input type="text" placeholder="Price" />
            <button>ADD</button>
          </div>
        </div>
        <div className="home__content">
          {value.map((item) => (
            <Link to="/new" className="home__api">
              <img src={item.image} alt="img" />
              <h2>{item.name}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
