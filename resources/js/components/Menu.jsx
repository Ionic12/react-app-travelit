import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.css';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Menu = ({ items, handleDeleteItem }) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { id, location, img, price, desc } = menuItem;
        const key = uuidv4();
        return (
          <article key={key} className="menu-item">
            <div className="image-container">
              <img src={img} alt={location} className="photo" />
              <div className="hover-content">
              <a className="btn btn-primary btn-sm centered-button" style={{borderRadius:"200px",width:'30px',height:'30px',fontWeight:'bold'}} href={`/detail/${id}`} >i</a>
              </div>
            </div>
            <div className="item-info">
              <header>
                <h4>{location}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
