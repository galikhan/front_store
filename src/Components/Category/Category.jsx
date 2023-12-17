import React, { useEffect, useState } from 'react'
import './Category.css'
import { Link } from 'react-router-dom';
// import {categor} from'./Tocheck';
import { URL } from '../Common/ddata';

export const Category = () => {


  const [records, setRecords] = useState([]);
  useEffect(() => {
    fetch(URL + "/category/parent/2")
      .then((response) => response.json())
      .then((records) => {
        console.log(records);
        setRecords(records);
      })
      .catch((err) => console.log(err));
  }, []);

  const [checkbox, setCheckbox] = useState([])
  const filteredRecords = checkbox.filter((nov_prod) => nov_prod.checkbox_pr === true);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((resp) => resp.json())
      .then((data) => setCheckbox(data))
      .catch((err) => console.log(err));
  }, [])

  return (
    <>
      <section className='cat'>
        <h2>Catalog</h2>
        {records.map((cat_prod) => (
          <Link to={`/category/${cat_prod.id}`}>
            <div className="cards_cat">
              <div className="image_box_cat">
                <img src={cat_prod.image_cat} alt="" />
              </div>
              <div className="details_cat">
                <p>{cat_prod.name}</p>

              </div>
            </div>
          </Link>
        ))}
        <br />
        {filteredRecords.map((nov_prod) => (
          <div>
            <h4>Новинка</h4>
            <Link to={`/category${nov_prod.name}`}>
              <div className="cards_cat">
                <div className="image_box_cat">
                  <img src={nov_prod.image} alt="" />
                </div>
                <div className="details_cat">
                  <p>{nov_prod.name}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}

      </section>
    </>
  )
}
