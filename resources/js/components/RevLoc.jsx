import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'bootstrap/dist/css/bootstrap.css';

const RevLoc = () => {
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
        
        fetchMenuItem();
    }, []);
    
    const handleDelete = async (itemId) => {
        try {
            const db = firebase.firestore();
            await db.collection('review').doc(itemId).delete();
            console.log('Review berhasil dihapus');
            // Ambil ulang data setelah review dihapus
            fetchMenuItem();
        } catch (error) {
            console.error('Terjadi kesalahan saat menghapus review:', error);
        }
    };
    
    const pathname = window.location.pathname;
    const location = pathname.split('/').pop();
    
    const fetchMenuItem = async () => {
        try {
            const db = firebase.firestore();
            const reviewsRef = db.collection('review');
            const querySnapshot = await reviewsRef.where('location', '==', location).get();
            
            const reviews = [];
            querySnapshot.forEach((doc) => {
                reviews.push({ id: doc.id, ...doc.data() });
            });
            console.log('Jumlah data yang diperoleh:', querySnapshot.size);
            setMenuItem(reviews);
        } catch (error) {
            console.error('Terjadi kesalahan:', error);
        }
    };
    

    return (
    <main>
        <section>
            <div className="row justify-content-center" style={{ paddingLeft: "52px", paddingRight: "52px" }}>
                {menuItem &&
                    menuItem.length > 0 &&
                    menuItem.map((item, index) => {
                        if (index % 2 === 0) {
                            return (
                            <React.Fragment key={item.id}>
                                <div className="col-md-5">
                                    <div className="card mb-3" style={{ backgroundColor: '#252a37' }}>
                                        <div className="card-body">
                                            <h5 className="card-title" style={{ fontWeight: "bold", color: 'white' }}>{item.name}</h5>
                                            <p className="card-text" style={{ color: 'white' }}>{item.review}</p>
                                            <button type="button" style={{width:"100%"}} className="btn btn-danger btn-sm mt-1" onClick={() => handleDelete(item.id)}>
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {menuItem[index + 1] && (
                                    <div className="col-md-5">
                                        <div className="card mb-3" style={{ backgroundColor: '#252a37' }}>
                                            <div className="card-body">
                                                <h5 className="card-title" style={{ fontWeight: "bold", color: 'white' }}>{menuItem[index + 1].name}</h5>
                                                <p className="card-text" style={{ color: 'white' }}>{menuItem[index + 1].review}</p>
                                                <button type="button" style={{width:"100%"}} className="btn btn-danger btn-sm mt-1" onClick={() => handleDelete(menuItem[index + 1].id)}>
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    )}
                                </React.Fragment>
                                );
                            }
                            return null;
                        })}
                    </div>
                </section>
            </main>
            );
        };
        
        export default RevLoc;
