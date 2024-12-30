import React, {useState} from 'react';
import Navbar from '../components/NavBar/NavBar';
import '../styles/Contact.css'
import emailjs from '@emailjs/browser'
import {Helmet} from "react-helmet";

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');

    const sendEmail = async (event) => {
        event.preventDefault();
        await emailjs.send(
            "service_portifolio",
            "template_wypi8nd",
            {
                name: name,
                email: email,
                description: description,
            },
            {
                publicKey: "yaVbG-7t7ISg0_em0",
            }
        );
    }

    return (
        <div className="ContactPage">
            <Helmet>
                <title>Contact Me | Augusto Ildefonso</title>
            </Helmet>
            <div className="Content">
                <Navbar currentPage="contactpt" />

                <h1>Me contate</h1>

                <div className="FormsArea">
                    <form className="ContactForm" onSubmit={sendEmail}>
                        <label className="jersey-25-regular">Seu Nome</label>
                        <input
                            type="text"
                            placeholder="Digite aqui..."
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label className="jersey-25-regular" style={{marginTop: '15px'}}>Seu Email</label>
                        <input
                            type="email"
                            placeholder="ex: augusto@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label className="jersey-25-regular" style={{marginTop: '15px'}}>O que você quer construir?</label>
                        <textarea
                            type="text"
                            placeholder="Digite aqui..."
                            className="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />

                        <div className="SubmitButton">
                            <input
                                type="submit"
                                value="Enviar"
                            />
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
}