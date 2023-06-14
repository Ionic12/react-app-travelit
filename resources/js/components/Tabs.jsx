import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const Tabs = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  
  const fetchMenuItems = async () => {
    const snapshot = await firebase.firestore().collection('input').get({ source: 'server' });
    const menuItemsData = snapshot.docs.map((doc) => doc.data());
    setMenuItems(menuItemsData);
  };
  
  useEffect(() => {
    // Inisialisasi Firebase App
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
    const db = firebase.firestore();
    
    const fetchCategories = async () => {
      const snapshot = await db.collection('input').get();
      const categoriesData = snapshot.docs.map((doc) => doc.data().category);
      const uniqueCategories = ['all', ...new Set(categoriesData)];
      setCategories(uniqueCategories);
    };
    
    fetchCategories();
    fetchMenuItems();
  }, []);
  
  const filterItems = (category) => {
    if (category === 'all') {
      fetchMenuItems();
    } else {
      const newItems = menuItems.filter((item) => item.category === category);
      setMenuItems(newItems);
    }
  };
  
  const handleDeleteItem = async (id) => {
    try {
      await firebase.firestore().collection('input').doc(id).delete();
      console.log("Item deleted successfully");
      // Add a short delay here
      setTimeout(() => {
        fetchMenuItems();
      }, 500);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };
  
  
  return (
  <main>
    <section className="menu section" style={{ paddingBottom: '50px' }}>
      <div className="title" id="category">
        <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}>Popular Categories</h2>
      </div>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} handleDeleteItem={handleDeleteItem} />
    </section>
  </main>
  );
};

export default Tabs;
