// DataForm.jsx
import React, { useState } from 'react';
import { db,collection, addDoc } from './firebaseConfig';
import 'bootstrap/dist/css/bootstrap.css';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


const InputDataForm = () => {
    const [location, setField1] = useState('');
    const [category, setField2] = useState('');
    const [price, setField3] = useState('');
    const [img, setField4] = useState('');
    const [desc, setField5] = useState('');
    
    const handleField1Change = (e) => {
        setField1(e.target.value);
    };
    
    const handleField2Change = (e) => {
        setField2(e.target.value);
    };
    const handleField3Change = (e) => {
        setField3(e.target.value);
    };
    
    const handleField4Change = (e) => {
        setField4(e.target.value);
    };
    const handleField5Change = (e) => {
        setField5(e.target.value);
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const docRef = await addDoc(collection(db, 'input'), {
                location: location,
                category: category,
                price: price,
                img: img,
                desc: desc,
            });
            console.log('Document written with ID: ', docRef.id);
            setField1('');
            setField2('');
            setField3('');
            setField4('');
            setField5('');
            window.location.reload();
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };
    
    return (
    <form onSubmit={handleSubmit} style={{paddingBottom:"25px",paddingLeft:"50px",paddingRight:"50px"}}>
        <div className="row justify-content-center">
            <div className="col-10">
                <div style={{ backgroundColor: '#252a37', padding: '20px' ,borderRadius:"10px"}}>
                    <div className="row">
                        <div className="col">
                            <Input type="text" id="location" value={location} onChange={handleField1Change} placeholder="Location"/>
                        </div>
                        <div className="col">
                            <Input type="text" id="category" value={category} onChange={handleField2Change} placeholder="Category"/>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: "15px" }}>
                        <div className="col">
                            <Input type="text" id="desc" value={desc} onChange={handleField5Change} placeholder="Description"/>
                        </div>
                        <div className="col">
                            <Input type="text" id="img" value={img} onChange={handleField4Change} placeholder="Image"/>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: "15px" }}>
                        <div className="col">
                            <Input type="text" id="price" value={price} onChange={handleField3Change} placeholder="Price"/>
                        </div>
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

export default InputDataForm;