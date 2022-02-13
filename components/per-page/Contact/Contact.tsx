import React, { useEffect } from "react";
import  useState  from 'react-usestateref';
import styles from './contact.module.css';
import { Icon } from '../Icons';
const validator = require("validator");

export default function Contact () {

    interface InitalData {
        name: string;
        email: string;
        subject: string;
        message: string;
    };

    const initialData: InitalData = {
        name: "",
        email: "",
        subject: "" ,
        message:"",
    };

    const [ formData, setFormData ] = useState(initialData);
    const [ disabledBtn, setDisableBtn ] = useState(false)

    useEffect(() => {
        const { name, email, subject, message } = formData
        if (!validator.isEmail(email) || name === "" || subject === "" || message === ""){
            setDisableBtn(() => true);
            return;
        }
        setDisableBtn(() => false);
    },[formData])

    const handleChange = ({target: {name, value}}: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> ) => {
        setFormData((prevData: InitalData) => ({
            ...prevData,
            [name]: value
        }))
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const url = "http://localhost:3000/api/contact";
        const postData = async () => {
            const headers = new Headers();
            headers.append("Content-Type", "application/json");
            try {
                console.log("post data")

                const response = await fetch(url, {
                    method: "POST",
                    headers: headers,
                    body: JSON.stringify({data: formData}),
                });
                const data = await response.json();
                console.log(data);
            } catch(err) {
                console.log(err)
            }
        };
        postData() 
    }

    const labelStyle = "txt-sm fw-7";

    return (
        <>
        <div className='d-lg-flex justify-content-between '>
            <form className='col-6 me-auto' onSubmit={handleSubmit}>
                <h2 className='fw-7 letter-spacing-tight'>Contact me</h2>
                <div className='d-flex flex-column'>
                    <label className={labelStyle} htmlFor="name">Name </label>
                    <input  className={styles.input + " mt-1"}
                            name = "name"
                            id = "name"
                            value = {formData.name}
                            onChange = {handleChange}
                    />
                </div>
                <div className='mt-2 d-flex flex-column'>
                    <label className={labelStyle} htmlFor="email">Email </label>
                    <input className={styles.input + " mt-1"}
                             name = "email"
                             id = "email"
                             value = {formData.email}
                             onChange = {handleChange}                   
                    />
                </div>
                <div className='mt-2 d-flex flex-column'>
                    <label className={labelStyle} htmlFor="subject">Subject </label>
                    <input className={styles.input + " mt-1"}
                             name = "subject"
                             id = "subject"
                             value = {formData.subject}
                             onChange = {handleChange}                      
                    />
                </div>
                <div className='mt-2 d-flex flex-column'>
                    <label className={labelStyle} htmlFor="message">Message </label>
                    <textarea className={styles.textarea + " mt-1"}
                                name = "message"
                                id = "message"
                                value = {formData.message}
                                onChange = {handleChange}           
                    />
                </div>
                <button type = "submit" 
                        className={styles.send + " txt-md fw-6 border-8px px-4 mt-4 border-outline-none"}
                        disabled = {disabledBtn}
                >Send</button>
            </form>
            <div className={styles.info + " col-4 mt-4 mt-lg-0"}>
                <h2 className='fw-7 letter-spacing-tight'>Infomation</h2>
                <div className='d-flex align-items-center my-3'>
                    <Icon type = {"address"}/>
                    <p className='m-0 px-2 txt-sm fw-5 txt-gray-6'>1705 Powder Ridge, Valrico, Fl 33594</p>
                </div>
                <div className='d-flex align-items-center my-3'>
                    <Icon type = {"phone"}/>
                    <p className='m-0 px-2 txt-sm fw-5 txt-gray-6'>8134202585</p>
                </div>
                <div className='d-flex align-items-center my-3'>
                    <Icon type = {"skype"}/>
                    <p className='m-0 px-2 txt-sm fw-5 txt-gray-6'>skype</p>
                </div>
                <div className='d-flex align-items-center my-3'>
                    <Icon type = {"email"}/>
                    <p className='m-0 px-2 txt-sm fw-5 txt-gray-6'>namnguyenfl990@gmail.com</p>
                </div>
            </div>
        </div>
       
        </>
    )
}