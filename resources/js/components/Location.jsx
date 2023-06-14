import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'bootstrap/dist/css/bootstrap.css';

const Location = () => {
    const [menuItem, setMenuItem] = useState(null);
    
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
        
        const pathname = window.location.pathname;
        const id = pathname.split('/').pop();
        
        const fetchMenuItem = async () => {
            try {
                const doc = await firebase.firestore().collection('input').doc(id).get();
                if (doc.exists) {
                    const menuItemData = { id: doc.id, ...doc.data() };
                    setMenuItem(menuItemData);
                    document.body.style.background = `url(${menuItemData.img})`;
                    document.body.style.backgroundRepeat = 'no-repeat';
                    document.body.style.backgroundSize = 'cover';
                    document.body.style.backgroundPosition = 'center';
                    document.body.style.overflow = 'hidden';
                    document.body.style.width = '100vw';
                    document.body.style.height = '100vh';                    
                } else {
                    console.error('No document found with the specified ID');
                }
            } catch (error) {
                console.error('Error fetching menu item:', error);
            }
        };
        
        fetchMenuItem();
    }, []);
    
    return (
    <main>
        <section>
            {menuItem && (
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.5)' }} 
                />
                )}
                {menuItem && (
                    <div style={{ position: 'fixed',color:'#ffffff', bottom: '20px', left: '20px', paddingTop: '10px',paddingBottom: '10px',paddingLeft: '10px',paddingRight: '45%',}}>
                        <header>
                            <h1 style={{fontWeight:'bold',fontSize:'50px'}}>{menuItem.location}</h1>
                        </header>
                        <p className='location' >{menuItem.desc}</p>
                        <a className="btn btn-primary centered-button" style={{marginTop:'20px',fontWeight:'bold'}} href={`/review/${menuItem.location}`} >Review {menuItem.location}</a>
                    </div>
                    )}
                    {menuItem && (
                        <div style={{ position: 'fixed', top: '30px', left: '60px', padding:'10px'}}>
                            <a href="#" className="arrow" onClick={() => window.history.back()}>
                                <div>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </a>
                        </div>
                        )}
                    </section>
                </main>
                );
            };
            
            export default Location;
