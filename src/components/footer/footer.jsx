import './footer.css';
import React from "react";


function Footer(props) {

    return (

      <footer className="d-flex justify-content-between flex-md-row">

        <div className="d-flex justify-content-center align-items-center">
            <p>℠ 2024 por Deise Duarte</p> 
        </div>

        <div className="footer-contact d-flex justify-content-between flex-md-row gap-md-5">

            <div>
                <h2>Telefone</h2>
                <p className="pt-2">(19) 1999800-9171</p>
            </div>

            <div>
                <h2>Email</h2>
                <p className="pt-2">deise171315@gmail.com</p>
            </div>
            
            <div className="redes">
                <h2>Redes sociais</h2>
                <ul className="d-flex flex-row justify-content-center align-items-center gap-3 pt-1">
                    <li><a href="https://github.com/vgd15"><i class="fa-brands fa-github"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/deise-duarte-a81917184/"><i class="fa-brands fa-linkedin-in"></i></a></li>
                </ul>
            </div>

        </div>

      </footer>

    );
}

export default Footer;