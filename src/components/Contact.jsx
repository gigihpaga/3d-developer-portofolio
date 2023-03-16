import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { slideIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const publicKey_EmailJS = ''; // need publicKey_EmailJS from emailjs.com
const templateID_EmailJS = ''; // need templateID_EmailJS from emailjs.com
const serviceID_EmailJS = ''; // need serviceID_EmailJS from emailjs.com

// *Main Component
const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };
    const handleSubmit = (event) => {
        event.preventDefault;
        setLoading(true);
        emailjs
            .send(
                serviceID_EmailJS,
                templateID_EmailJS,
                {
                    from_name: form.name,
                    to_name: 'Gigih Patga',
                    from_email: form.email,
                    to_email: 'gigihpatga@gmail.com',
                    message: form.message,
                },
                publicKey_EmailJS
            )
            .then(() => {
                setLoading(false);
                alert('Thanks you, I Will get back to you as soon as possible');
                setForm({
                    name: '',
                    email: '',
                    message: '',
                });
            })
            .catch((error) => {
                setLoading(false);
                console.log('[Log On] >> ErrorSendingEmail : ', error);
                alert(`Something went wrong\n${error}`);
            });
    };
    return (
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
            <motion.div
                variants={slideIn('left', 'tween', 0.2, 1)}
                className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h2 className={styles.sectionHeadText}>Contact.</h2>

                <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
                    {/* name */}
                    <label htmlFor="name" className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Name</span>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's  your name"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    {/* email */}
                    <label htmlFor="email" className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Email</span>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's  your email"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    {/* message */}
                    <label htmlFor="message" className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Message</span>
                        <textarea
                            rows="7"
                            aria-multiline={true}
                            name="message"
                            id="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What do you want to say"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                            style={{ minHeight: 56 }}
                        />
                    </label>
                    {/* button */}
                    <button
                        className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-lg"
                        type="submit"
                    >
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </motion.div>
            {/* render eart model */}
            <motion.div
                variants={slideIn('right', 'tween', 0.2, 1)}
                // className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] bg-black-100/50 p-3 rounded-2xl"
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] p-3 rounded-2xl"
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, 'contact');
