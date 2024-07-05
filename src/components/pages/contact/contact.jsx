import './contact.css';
import React from "react";

function Contact() {

    return (
        <section className="contact d-flex d-flex justify-content-center align-items-center">
             <div className="card-contact top-card d-flex justify-content-center align-items-center flex-column gap-4 col-8 ">
                    <h3>Entre em contato</h3>
                        <div className="card ">
                            <div className=" d-flex flex-column ">
                                <div className="col-md-12 ">
                                    <ul className="d-flex flex-column contact-list">
                                        <li><a href="mailto:deise171315@gmail.com"><i class="fa-solid fa-envelope"></i> Me envie um e-mail</a></li>
                                        <li><a href="https://wa.me/19998009171"><i class="fa-brands fa-square-whatsapp"></i> WhatsApp</a></li>
                                    </ul>
                             </div>
                           </div>
                          </div>
                        </div>
        </section>
    );
}

export default Contact;