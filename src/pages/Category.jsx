import React from "react";

function Category() {
  return (
    <div className="caregory">
      <div className="container">
        <div className="category__content">
          <div className="category__inputs">
            <input type="file" />
            <input type="text" placeholder="name"/>
            <select className="categiry__btn-btn" name="" id="">
              <option value="">Apple</option>
              <option value="">Mi</option>
              <option value="">Samsung</option>
              <option value="">Honor</option>
              <option value="">Poco</option>
              <option value="">Huawei</option>
              <option value="">Oppo</option>
            </select>
            <input type="text" placeholder="Price"/>
            <input type="text" placeholder="Brand"/>
            <input type="text" placeholder="Price %"/>
            <button className="category__buttton">ADD</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
