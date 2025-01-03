import React, {useState} from 'react';
import Navbar from '../components/NavBar/NavBar';
import '../styles/Contact.css'
import emailjs from '@emailjs/browser'
import {Helmet} from "react-helmet";
import {useMediaQuery} from "react-responsive";

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');

    const isBigScreen = useMediaQuery({query: 'only screen and (min-width: 1500px)'});
    const isMediumScreen = useMediaQuery({query: 'only screen and (min-width: 600px) and (max-width: 1499px)'});
    const isSmallScreen = useMediaQuery({query: 'only screen and (max-width: 599px)'});

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

            {isBigScreen && (
                <React.Fragment>
                    <Navbar currentPage="contact" />
                    <div className="ContentContactPage">
                        <h1>Contact me</h1>

                        <div className="FormsArea">
                            <form className="ContactForm" onSubmit={sendEmail}>
                                <label className="jersey-25-regular">Your Name</label>
                                <input
                                    type="text"
                                    placeholder="Type here..."
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <label className="jersey-25-regular" style={{marginTop: '15px'}}>Your Email</label>
                                <input
                                    type="email"
                                    placeholder="e.g: augusto@gmail.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <label className="jersey-25-regular" style={{marginTop: '15px'}}>What do you want to
                                    build?</label>
                                <textarea
                                    type="text"
                                    placeholder="Type here..."
                                    className="Description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />

                                <div className="SubmitButton">
                                    <input
                                        type="submit"
                                        value="Send"
                                    />
                                </div>

                            </form>
                        </div>

                    </div>
                </React.Fragment>
            )}

            {isMediumScreen && (
                <React.Fragment>
                    <Navbar currentPage="contact" />
                    <div className="ContentContactPage">
                        <h1>Contact me</h1>

                        <div className="FormsArea">
                            <form className="ContactForm" onSubmit={sendEmail}>
                                <label className="jersey-25-regular">Your Name</label>
                                <input
                                    type="text"
                                    placeholder="Type here..."
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <label className="jersey-25-regular" style={{marginTop: '15px'}}>Your Email</label>
                                <input
                                    type="email"
                                    placeholder="e.g: augusto@gmail.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <label className="jersey-25-regular" style={{marginTop: '15px'}}>What do you want to
                                    build?</label>
                                <textarea
                                    type="text"
                                    placeholder="Type here..."
                                    className="Description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />

                                <div className="SubmitButton">
                                    <input
                                        type="submit"
                                        value="Send"
                                    />
                                </div>

                            </form>
                        </div>

                    </div>
                </React.Fragment>
            )}

            {isSmallScreen && (
                <React.Fragment>
                    <Helmet>
                        <meta name="theme-color" content="black"/>
                    </Helmet>
                    <Navbar currentPage="contact" />
                    <div className="ContentContactPage">
                        <h1>Contact me</h1>

                        <div className="FormsArea">
                            <form className="ContactForm" onSubmit={sendEmail}>
                                <label className="jersey-25-regular">Your Name</label>
                                <input
                                    type="text"
                                    placeholder="Type here..."
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <label className="jersey-25-regular" style={{marginTop: '15px'}}>Your Email</label>
                                <input
                                    type="email"
                                    placeholder="e.g: augusto@gmail.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <label className="jersey-25-regular" style={{marginTop: '15px'}}>What do you want to
                                    build?</label>
                                <textarea
                                    type="text"
                                    placeholder="Type here..."
                                    className="Description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />

                                <div className="SubmitButton">
                                    <input
                                        type="submit"
                                        value="Send"
                                    />
                                </div>

                            </form>
                        </div>

                    </div>
                </React.Fragment>
            )}
        </div>
    );
}