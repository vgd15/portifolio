import React from "react";
import './projects.css';
import lpMobileFirst from '../../../img/lb-mobile-firts.png';
import adaLovelace from '../../../img/adalovelace.png';
import mulheresTech from '../../../img/mulheresTech.png';
import curriculoSimples from '../../../img/curriculo-simples.png';
import BlogHectar from '../../../img/BlogHectar.png';
import BlogRipz from '../../../img/BlogRipz.png';
import VoltVitoria from '../../../img/VoltVitoria.png';
import LanSayDay from '../../../img/LanSanDay.png';
import ConstrutorURL from '../../../img/ContrutorURL.png';
import CalculadoraNutri from '../../../img/CalculadoraNutri.png';
import CalculadoraAbsorcao from '../../../img/CalculadoraAbsorcao.png'


function Projects(){
    return(
            <section className="projects">
                    <h2 className="title-projects"><i className="fa-solid fa-square"></i> Projetos</h2>
                    <p className="pb-5">Abaixo apresento alguns projetos relevantes desenvolvidos profissionalmente, através de cursos ou de minha própria autoria.</p>
                    <div className="card-box d-flex justify-content-center align-items-center flex-column">
                    <div className="card-projects top-card d-flex justify-content-center align-items-start flex-column gap-4 ">
                        <h3>Projetos Profissionais</h3>
                        <div className="card">
                            <div className=" d-flex flex-row row">
                                <div className="col-md-5 ">
                                <h3 className="card-title">Blog Hectar</h3>
                                <p>Este projeto foi desenvolvido para a empresa Hectar, utilizando um template pré-existente na plataforma WordPress. Foram empregadas diversas linguagens, bibliotecas e plugins, incluindo PHP, JavaScript, Bootstrap, Owl Carousel e Flexbox, para criar uma solução robusta e funcional.</p>
                                </div>
                                <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                                    <img src={BlogHectar} alt="Imagem primeiro projeto" className="img-projeto" />
                                    <a href="https://blog.hectar.com.br/" target="_blank" rel="noreferrer"><div className="overlay-img"></div></a>
                                </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className=" d-flex flex-row row">
                                <div className="col-md-5 ">
                                <h3 className="card-title">Blog Ripz </h3>
                                <p>Este projeto foi desenvolvido para a empresa Ripz, utilizando um template pré-existente na plataforma WordPress. Foram empregadas diversas linguagens, bibliotecas e plugins, incluindo PHP, JavaScript, Bootstrap, Owl Carousel e Flexbox, para criar uma solução robusta e funcional.</p>
                                </div>
                                <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                                    <img src={BlogRipz} alt="Imagem segundo projeto" className="img-projeto" />
                                    <a href="https://blog.ripz.com.br/" target="_blank" rel="noreferrer"><div className="overlay-img"></div></a>
                                </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className=" d-flex flex-row row">
                                <div className="col-md-5 ">
                                <h3 className="card-title">Time Esporte Clube Vitória</h3>
                                <p>Este projeto foi desenvolvido através da plataforma Linx, a partir de um template existente,  foi utlizado a linguagem liquid juntamente com html, css e JS.</p>
                                </div>
                                <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                                    <img src={VoltVitoria} alt="Imagem terceiro projeto" className="img-projeto" />
                                    <a href="https://front-do-projeto-back-end.vercel.app/" target="_blank" rel="noreferrer"><div className="overlay-img"></div></a>
                                </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className=" d-flex flex-row row">
                                <div className="col-md-5 ">
                                <h3 className="card-title">Lan San Day</h3>
                                <p>Este projeto foi desenvolvido em grupo através da plataforma Linx, a partir de um template existente,  foi utlizado a linguagem liquid juntamente com html, css e JS.</p>
                                </div>
                                <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                                    <img src={LanSayDay} alt="Imagem quarto projeto" className="img-projeto" />
                                    <a href="https://www.lasanday.com.br/" target="_blank" rel="noreferrer"><div className="overlay-img"></div></a>
                                </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className=" d-flex flex-row row">
                                <div className="col-md-5 ">
                                <h3 className="card-title">Contrutor de URL</h3>
                                <p>Este projeto foi construído para o time de marketing da empresa Nairuz Marketing Digital e Tecnologia, para que fosse padronizado o processo de criação de URL para campanhas.</p>
                                </div>
                                <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                                    <img src={ConstrutorURL} alt="Imagem quarto projeto" className="img-projeto" />
                                    <a href="https://construtor-de-url.nztecnologia.com.br/" target="_blank" rel="noreferrer"><div className="overlay-img"></div></a>
                                </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="card-projects top-card d-flex justify-content-center align-items-start flex-column gap-4 ">
                        <h3>Projetos de cursos</h3>
                        <div className="card">
                            <div className=" d-flex flex-row row">
                                <div className="col-md-5 ">
                                <h3 className="card-title">LP Mobile First </h3>
                                <p>Este projeto foi desenvolvido através de um curso, ao qual utilizamos a premissa de desevolver primeiro a tela mobile, foi usando neste projeto a biblioteca js Swiper para construção dos carrosseis, flexbox e Media Queries para tornar responsivo.</p>
                                </div>
                                <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                                    <img src={lpMobileFirst} alt="Imagem primeiro projeto" className="img-projeto" />
                                    <a href="https://lp-mobile-first.vercel.app/" target="_blank" rel="noreferrer"><div className="overlay-img"></div></a>
                                </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className=" d-flex flex-row row">
                                <div className="col-md-5 ">
                                <h3 className="card-title">Biografia de Ada Lovelace </h3>
                                <p>Essa One page foi desenvolvida através do curso programaria, com uso de skills básicas como html, css e js.</p>
                                </div>
                                <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                                    <img src={adaLovelace} alt="Imagem segundo projeto" className="img-projeto" />
                                    <a href="https://vgd15.github.io/Site-Ada-Lovelace//" target="_blank" rel="noreferrer"><div className="overlay-img"></div></a>
                                </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className=" d-flex flex-row row">
                                <div className="col-md-5 ">
                                <h3 className="card-title">Mulheres em Tech</h3>
                                <p>Este é um projeto Back-End com uso das skills Node.js, Express e MongoDB. O projeto também utiliza CORS para controle de acesso, dotenv para gerenciamento de variáveis de ambiente, e uuid para geração de identificadores únicos.</p>
                                </div>
                                <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                                    <img src={mulheresTech} alt="Imagem terceiro projeto" className="img-projeto" />
                                    <a href="https://front-do-projeto-back-end.vercel.app/" target="_blank" rel="noreferrer"><div className="overlay-img"></div></a>
                                </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className=" d-flex flex-row row">
                                <div className="col-md-5 ">
                                <h3 className="card-title">Currículo template</h3>
                                <p>Este é um projeto simples, desenvolvido através do curso da Alura, no qual foi ensinado a criar um portifólio simples,  neste curso utilizei as skills html e css</p>
                                </div>
                                <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                                    <img src={curriculoSimples} alt="Imagem quarto projeto" className="img-projeto" />
                                    <a href="https://treinando-css-e-html-com-responsividade.vercel.app/" target="_blank" rel="noreferrer"><div className="overlay-img"></div></a>
                                </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-projects top-card d-flex justify-content-center align-items-start flex-column gap-4 ">
                        <h3>Projetos pessoais</h3>
                        <div className="card">
                            <div className=" d-flex flex-row row">
                                <div className="col-md-5 ">
                                <h3 className="card-title">Calculadora nutricional </h3>
                                <p>Este foi um dos primeiros projetos que desenvolvi, é um projeto no qual se consome uma API que retorna os valores nutricionais dos alimentos, foi desenvolvido em React com uso dos Hooks, é uma aplicação somente para Desktop</p>
                                </div>
                                <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                                    <img src={CalculadoraNutri} alt="Imagem primeiro projeto" className="img-projeto" />
                                    <a href="https://projeto-final-bees-three.vercel.app/" target="_blank" rel="noreferrer"><div className="overlay-img"></div></a>
                                </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className=" d-flex flex-row row">
                                <div className="col-md-5 ">
                                <h3 className="card-title">Calculadora de Absorção</h3>
                                <p>Este projeto foi desenvolvido em React com uso dos Hooks para calcular a porcetagem entre as pessoas que clicam e  que permanecem no site</p>
                                </div>
                                <div className="img-card col-md-7 d-flex justify-content-center align-items-center flex-column">
                                    <img src={CalculadoraAbsorcao} alt="Imagem primeiro projeto" className="img-projeto" />
                                    <a href="https://calculadora-de-absor-o.vercel.app/" target="_blank" rel="noreferrer"><div className="overlay-img"></div></a>
                                </div>
                            </div>
                          </div>
                        </div>
                    </div>
                
            </section>

    );
}

export default Projects; 