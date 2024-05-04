import React from "react";
import "./style.css";

const API = "https://6631e14cc51e14d69562ac56.mockapi.io/user";

function NewPage() {
  const [service, setService] = useState([]);

  async function getData() {
    try {
      const res = await axios.get(`${API}/${id}`);

      setService(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setService({ ...service, [name]: value });
  };

  useEffect(() => {
    getData();
  }, []);
  
  return (
    <div className="newpage">
      <div className="container">
        <div className="newpage__content">
          <div className="new__block">
            <img
              className="new__img-logo"
              src="https://assets.mobilezone.ch/google-merchant-feed/2a274742523a747e67a4e1db9282c12d6c0e95d3/iphone-14-5g-front.png"
              alt=""
            />
            <div className="new__logo">
              <img
                src="https://ik.imagekit.io/3dqckpw4d/upload/iphone_12___Purple1657182290iphone-12-purple.png"
                alt=""
              />
              <img
                src="https://ik.imagekit.io/3dqckpw4d/upload/iphone_12___Purple1657182290iphone-12-purple.png"
                alt=""
              />
              <img
                src="https://ik.imagekit.io/3dqckpw4d/upload/iphone_12___Purple1657182290iphone-12-purple.png"
                alt=""
              />
              <img
                src="https://ik.imagekit.io/3dqckpw4d/upload/iphone_12___Purple1657182290iphone-12-purple.png"
                alt=""
              />
              <img
                src="https://ik.imagekit.io/3dqckpw4d/upload/iphone_12___Purple1657182290iphone-12-purple.png"
                alt=""
              />
              <img
                src="https://ik.imagekit.io/3dqckpw4d/upload/iphone_12___Purple1657182290iphone-12-purple.png"
                alt=""
              />
            </div>
          </div>
          <div className="new__block2">
            <label htmlFor="">name:</label>
            <h2 onChange={handleChange}>Inpone 13</h2>
            <label htmlFor="">ОКЭ</label>
            <h2 onChange={handleChange}>USA</h2>
            <label htmlFor="">brand:</label>
            <h2 onChange={handleChange}>Apple</h2>
            <label htmlFor="">price:</label>
            <h2 onChange={handleChange} className="new__sikitka">
              $ 146
            </h2>
            <label htmlFor="">price %:</label>
            <h2 onChange={handleChange}>$ 134</h2>
            <label htmlFor="">text:</label>
            <p onChange={handleChange}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              iure molestiae ducimus ex modi animi eaque, quod reprehenderit, at
              facere eos officia placeat in saepe!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPage;
