// DataForm.jsx
import React, { useState } from 'react';
import { db,collection, addDoc } from './firebaseConfig';
import 'bootstrap/dist/css/bootstrap.css';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


const ReviewForm = () => {
    const pathname = window.location.pathname;
    const location = pathname.split('/').pop();

    const [name, setField1] = useState('');
    const [review, setField2] = useState('');
    
    const handleField1Change = (e) => {
        setField1(e.target.value);
    };
    
    const handleField2Change = (e) => {
        setField2(e.target.value);
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const docRef = await addDoc(collection(db, 'review'), {
                location: location,
                name: name,
                review: review,
            });
            console.log('Document written with ID: ', docRef.id);
            setField1('');
            setField2('');
            window.location.reload();
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };
    
    return (
    <form onSubmit={handleSubmit} style={{paddingBottom:"25px",paddingLeft:"50px",paddingRight:"50px"}}>
        <div className="row justify-content-center">
            <div className="col-5">
                <div style={{ backgroundColor: '#252a37', padding: '20px' ,borderRadius:"10px"}}>
                    <div className="row">
                        <div className="col">
                            <Input type="text" id="name" value={name} onChange={handleField1Change} placeholder="Name"/>
                        </div>
                        <div className="col">
                            <Input type="text" id="review" value={review} onChange={handleField2Change} placeholder="Review"/>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: "15px" }}>
                        <div className="col">
                            <button type="submit" style={{ width: "100%" }} className="btn btn-danger">Add Destination</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
    
    
    );
};

export default ReviewForm;