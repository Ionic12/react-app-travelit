import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.css';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const Manage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [editItemId, setEditItemId] = useState(null);
  const [editInputValues, setEditInputValues] = useState({});
  
  const fetchMenuItems = async () => {
    const snapshot = await firebase.firestore().collection('input').get({ source: 'server' });
    const menuItemsData = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    setMenuItems(menuItemsData);
  };
  
  useEffect(() => {
    if (!firebase.apps.length) {
      const firebaseConfig = {
        apiKey: "AIzaSyCP0skc0MEdhMxW8K_5TSJWN7IIZkDqMLs",
        authDomain: "fallfromthesky-17048.firebaseapp.com",
        databaseURL: "https://fallfromthesky-17048-default-rtdb.firebaseio.com",
        projectId: "fallfromthesky-17048",
        storageBucket: "fallfromthesky-17048.appspot.com",
        messagingSenderId: "1043323501483",
        appId: "1:1043323501483:web:5fd698f42ee4f9968930ee"
      };
      firebase.initializeApp(firebaseConfig);
    }
    
    fetchMenuItems();
  }, []);
  
  const handleDeleteItem = async (itemId) => {
    try {
      await firebase.firestore().collection('input').doc(itemId).delete();
      console.log("Item deleted successfully");
      fetchMenuItems();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };
  
  const handleEditItem = (itemId) => {
    const menuItem = menuItems.find((item) => item.id === itemId);
    setEditItemId(itemId);
    setEditInputValues(menuItem);
  };
  
  const handleCancelEdit = () => {
    setEditItemId(null);
    setEditInputValues({});
  };
  
  const handleSaveItem = async (itemId, updatedItem) => {
    try {
      await firebase.firestore().collection('input').doc(itemId).update(updatedItem);
      console.log("Item updated successfully");
      setEditItemId(null);
      setEditInputValues({});
      fetchMenuItems();
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };
  
  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditInputValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };
  
  const renderItem = (menuItem) => {
    const { id, location, img, price, desc } = menuItem;
    
    if (editItemId === id) {
      return (
      <div key={id}>
        <div className="row">
          <div className="col">
            <Input type="text" name="location" id="location" value={editInputValues.location || ''} onChange={handleEditInputChange} />
          </div>
          <div className="col">
            <Input type="text" name="category" id="category" value={editInputValues.category || ''} onChange={handleEditInputChange} />
          </div>
        </div>
        <div className="row" style={{ marginTop: "15px" }}>
          <div className="col">
            <Input type="text" name="desc" id="desc" value={editInputValues.desc || ''} onChange={handleEditInputChange} />
          </div>
          <div className="col">
            <Input type="text" name="img" id="img" value={editInputValues.img || ''} onChange={handleEditInputChange} />
          </div>
        </div>
        <div className="row" style={{ marginTop: "15px" }}>
          <div className="col">
            <Input type="text" name="price" id="price" value={editInputValues.price || ''} onChange={handleEditInputChange} />
          </div>
          <div className="col">
            <Button color="primary" style={{ width: "100%" }} onClick={() => handleSaveItem(id, editInputValues)}>Save</Button>
          </div>
          <div className="col">
            <Button color="danger" style={{ width: "100%" }} onClick={handleCancelEdit}>Cancel</Button>
          </div>
        </div>
      </div>
      );
    } else {
      return (
      <article key={id} className="menu-item">
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
          <button type="button" className="btn btn-danger btn-sm mt-1" onClick={() => handleDeleteItem(id)}>
            Delete
          </button>
          <button type="button" className="btn btn-primary btn-sm mt-1" style={{marginLeft:"10px"}} onClick={() => handleEditItem(id)}>
            Edit
          </button>
        </div>
      </article>
      );
    }
  };
  
  return (
  <main>
    <section className="menu section" style={{ paddingBottom: '50px' }}>
      <div className="section-center">{menuItems.map(renderItem)}</div>
    </section>
  </main>
  );
};

export default Manage;
