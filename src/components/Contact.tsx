import { useState } from "react";

interface formProps {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    service: string;
    message: string;
}

export default function Contact() {

    const [formData, setFormData] = useState<formProps>({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        service: "",
        message: ""
    });
    const [selectedService, setSelectedService] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target; 
        console.log(name, value);
        
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        //console.log(event.target.value);
        setSelectedService(event.target.value);
      };

    function handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        event.preventDefault();
        //form a message to send
        let message = `Hi, I am ${formData.firstName} ${formData.lastName}.\n`;
        message += `I am interested in your ${selectedService} service.\n`;
        message += `My email is ${formData.email} and my phone number is ${formData.phoneNumber}.\n`;
        message += `Message: ${formData.message}`;
        let url = `https://api.whatsapp.com/send/?phone=918793552829`;
        // Appending the message to the URL by encoding it
        url += `&text=${encodeURI(message)}&app_absent=0`;
        // Open our newly created URL in a new tab to send the message
        window.open(url);
    }

    return (
        <section id="contact">
            <div className="bg-cream-light-color dark:bg-black-color py-60px md:py-20 lg:py-100px xl:py-30">
                <div className="container">
                    <div className="flex flex-col-reverse md:grid md:grid-cols-12 md:items-center gap-x-6 gap-y-10">
                        <div className="md:col-start-1 md:col-span-7 lg:col-span-6">
                            <div className="wow fadeInLeft" data-wow-delay=".3s">
                                <form
                                    className="contact px-15px py-30px md:px-5 lg:px-30px lg:py-10 xl:px-10 bg-white-color dark:bg-primary-color-light rounded-15px">
                                    <div className="text-center mb-25px">
                                        <h2
                                            className="text-3xl md:text-size-35 lg:text-size-40 xl:text-size-45 bg-gradient-text-light dark:bg-gradient-text bg-clip-text xl:leading-1.2 text-transparent mb-15px">
                                            Let’s work together!
                                        </h2>
                                        <p className="text-primary-color-light dark:text-body-color wow fadeInLeft" data-wow-delay=".4s">
                                            I design and code beautifully simple things and i love
                                            what i do. Just simple like that!
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-15px">
                                        <div>
                                            <input type="text" placeholder="First name"
                                                className="text-black w-full px-5 py-14px border border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-gray-color leading-1"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleInputChange} />
                                        </div>
                                        <div>
                                            <input type="text" placeholder="Last name"
                                                className="text-black w-full px-5 py-14px border border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-gray-color leading-1"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleInputChange} />
                                        </div>
                                        <div>
                                            <input type="email" placeholder="Email address"
                                                className="text-black w-full px-5 py-14px border border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-gray-color leading-1"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange} />
                                        </div>
                                        <div>
                                            <input type="text" placeholder="Phone number"
                                                className="text-black w-full px-5 py-14px border border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-gray-color leading-1"
                                                name="phoneNumber"
                                                value={formData.phoneNumber}
                                                onChange={handleInputChange} />
                                        </div>
                                        <div className="form_group sm:col-start-1 sm:col-span-2">
                                            <select  
                                            id="conService" 
                                            className="tj-nice-select"
                                            name="service"
                                            defaultValue={selectedService}
                                            onChange={handleSelectChange}
                                            >
                                                <option value="">
                                                    Choose a Service
                                                </option>
                                                <option value="Branding Design">Branding Design</option>
                                                <option value="Web Design">Web Design</option>
                                                <option value="UI/UX">UI/UX Design</option>
                                                <option value="App">App Design</option>
                                            </select>
                                        </div>
                                        <div className="sm:col-start-1 sm:col-span-2">
                                            <textarea placeholder="Message"
                                                className="text-black w-full px-5 py-14px border border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-gray-color leading-1"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}></textarea>
                                        </div>
                                        <div className="sm:col-start-1 sm:col-span-2">
                                            <button type="button" onClick={handleSubmit}
                                                className="text-size-15 font-bold text-white-color capitalize py-17px px-35px bg-200 bg-gradient-secondary hover:bg-[-100%] rounded-full leading-1 transition-all duration-300">
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="md:col-start-8 md:col-span-5">
                            <div className="contact-info-list">
                                <ul className="flex flex-col gap-y-10">
                                    <li className="flex flex-wrap items-center gap-25px position-relative wow fadeInRight"
                                        data-wow-delay=".4s">
                                        <div
                                            className="icon-box text-xl w-50px h-50px text-white-color flex justify-center items-center flex-col bg-gradient-primary-2 rounded-full leading-1">
                                            <i className="flaticon-phone-call leading-1 mt-1"></i>
                                        </div>
                                        <div className="text-box">
                                            <p className="text-primary-color-light dark:text-white-color mb-1">
                                                Phone
                                            </p>
                                            <a href="tel:0123456789"
                                                className="text-primary-color-light dark:text-white-color text-lg lg:text-xl font-medium hover:text-primary-color">+01
                                                123 654 8096</a>
                                        </div>
                                    </li>
                                    <li className="flex flex-wrap items-center gap-25px position-relative wow fadeInRight"
                                        data-wow-delay=".5s">
                                        <div
                                            className="icon-box text-xl w-50px h-50px text-white-color flex justify-center items-center flex-col bg-gradient-primary-2 rounded-full leading-1">
                                            <i className="flaticon-mail-inbox-app leading-1 mt-1"></i>
                                        </div>
                                        <div className="text-box">
                                            <p className="text-primary-color-light dark:text-white-color mb-1">
                                                Email
                                            </p>
                                            <a href="mailto:mail@mail.com"
                                                className="text-primary-color-light dark:text-white-color text-lg lg:text-xl font-medium hover:text-primary-color">gerolddesign@mail.com</a>
                                        </div>
                                    </li>
                                    <li className="flex flex-wrap items-center gap-25px position-relative wow fadeInRight"
                                        data-wow-delay=".6s">
                                        <div
                                            className="icon-box text-xl w-50px h-50px text-white-color flex justify-center items-center flex-col bg-gradient-primary-2 rounded-full leading-1">
                                            <i className="flaticon-location leading-1 mt-1"></i>
                                        </div>
                                        <div className="text-box">
                                            <p className="text-primary-color-light dark:text-white-color mb-1">
                                                Address
                                            </p>
                                            <a href="#"
                                                className="text-primary-color-light dark:text-white-color text-lg lg:text-xl font-medium hover:text-primary-color">Warne
                                                Park Street Pine, <br />
                                                FL 33157, New York</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
