import React from "react";
import profileImage from '../../../img/profileImage.png';
import './about.css';

function About(){
    return(
            <section className="home">
                <div className="about-home d-flex col-xl-12 justify-content-center align-items-center gap-4">
                    <div className="box-img d-flex flex-column justify-content-center align-items-center col-md-4 col-xs-12 ">
                        <div className="suporte-img">
                        <img src={profileImage} alt="Imagem Perfil" className="img-perfil" />
                        </div>
                         
                        <strong>Deise <br/> Duarte</strong>

                         <svg width="60" height="6" viewBox="0 0 110 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <line y1="3" x2="110" y2="3" stroke="#007157" stroke-width="6"/>
                         </svg>

                         <span className="occupation">Desenvolvedora Front-End</span>

                         <div className="footer-box col-12 ">
                            <ul className="d-flex flex-row gap-3 justify-content-center align-items-center">
                                <li><a href="https://github.com/vgd15"><i class="fa-brands fa-github"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/deise-duarte-a81917184/"><i class="fa-brands fa-linkedin-in"></i></a></li>
                            </ul>
                         </div>
                    </div>

                    <div className="box-text col-md-4 col-12">
                        <h2 className="salutation"><strong>Olá</strong></h2>
                        <span>Meu perfil e meus projetos</span>
                        <div className="button-list">
                            <ul className="d-flex flex-row gap-2 gap-md-3 justify-content-center align-items-center flex-wrap">
                                <li><a href="/curriculum" className="btn btn-primary curriculo">CURRÍCULO</a></li>
                                <li><a href="/projects" className="btn btn-primary projetos">PROJETOS</a></li>
                                <li><a href="/courses" className="btn btn-primary projetos">CURSOS</a></li>
                            </ul>
                        </div>
                        <p className="">
                        Sou estudante na área de tecnologia, cada vez mais apaixonada pela programação.

                        Me considero uma pessoa focada, determinada, e uma das minhas maiores qualidades é meu autocontrole emocional.

                        De 2015 a 2017 trabalhei na empresa Ramsons como menor aprendiz, localizada em Manaus.

                        No final de 2017 me mudei para o estado de São Paulo onde trabalhei como autônoma até o ano de 2022. 

                        De março a agosto de 2023 trabalhei com manutenção, análise e desenvolvimento de ChatBot.

                        Atualmente trabalho como desenvolvedora Front-End.
                        </p>
                    </div>
                    
                </div>
                
            
        </section>

    );
}

export default About; 