import React, { useEffect } from "react";
import  useState  from 'react-usestateref';
import styles from './contact.module.css';
import { Icon } from '../Icons';
const validator = require("validator");
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

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
    const [ disabledBtn, setDisableBtn ] = useState(false);
    const [ messageSent, setMessageSent ] = useState(false);

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
        const { API_BASEURL } = publicRuntimeConfig
        const url = `${API_BASEURL}/contact`;
        const postData = async () => {
            const headers = new Headers();
            headers.append("Content-Type", "application/json");
            try {
                const response = await fetch(url, {
                    method: "POST",
                    headers: headers,
                    body: JSON.stringify({data: formData}),
                });
                const data = await response.json();
                if (data) {
                    setMessageSent(() => true);   
                }
            } catch(err) {
            }
        };
        postData() 
    }

    const labelStyle = "txt-sm fw-7";

    return (
        <>
        <div className='row d-md-flex justify-content-center justify-content-md-between'>
            {messageSent
            ? <> <p className="col-lg-6 col-md-7 col-10 fw-7 txt-sm"> Thank you for the message!</p> </>
            : <form className='col-lg-6 col-md-7 col-10' onSubmit={handleSubmit}>
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
            }
            
            <div className={" col-md-4 col-10 mt-4 mt-lg-0"}>
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
                    <p className='m-0 px-2 txt-sm fw-5 txt-gray-6'>Nguyen Nam</p>
                </div>
                <div className='d-flex align-items-center my-3'>
                    <Icon type = {"email"}/>
                    <p className='m-0 px-2 txt-sm fw-5 txt-gray-6'>namnguyendevfl990@gmail.com</p>
                </div>
            </div>
        </div>
        </>
    )
}