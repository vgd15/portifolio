import './curriculum.css';
function Curriculum(){
return(
<section className="curriculum">
   <h2 className="title-curriculum"><i className="fa-solid fa-square"></i> Currículo</h2>
   <div className="card-box d-flex justify-content-center align-items-center flex-column">
      <div className="card-experiencia top-card d-flex justify-content-center align-items-start flex-column gap-4 ">
         <h3>Experiências</h3>
      <div className="card">
         <div className="row g-0">
            <div className="col-md-5 ">
               <h3 className="card-title">08/2023 - Atual</h3>
               <p>DESENVOLVEDORA FRONT-END</p>
               <p>Nairuz Marketing e Tecnologia</p>
               <p>Monte Mor</p>
               <p>Modelo: Híbrido</p>
            </div>
            <div className="col-md-7 d-flex justify-content-center align-items-center">
               <p className="card-text">Responsável pela criação e manutenção de blogs, sites institucionais, one pages e e-commerces, utilizando HTML5, CSS3, JavaScript, WordPress e Bootstrap com design totalmente responsivo em todos os dispositivos.</p>
            </div>
         </div>
      </div>
      <div className="card">
         <div className="row g-0">
            <div className="col-md-5 ">
               <h3 className="card-title">03/2023 - 08/2023</h3>
               <p>CHATBOT DEVELOPER</p>
               <p>Identité Certificação Digital</p>
               <p>Salvador-BA</p>
               <p>Modelo: Home-Office</p>
            </div>
            <div className="col-md-7 d-flex justify-content-center align-items-center">
               <p className="card-text">Análise de fluxo de conversas no chatbot, manutenção de códigos js, auxílio para o atendimento, envio de mensagens ativas no whatsapp ultilizando api da blip e tratamento de dados dos clientes via excel.</p>
            </div>
         </div>
      </div>
      <div className="card">
         <div className="row g-0">
            <div className="col-md-5 ">
               <h3 className="card-title">08/2018 - 08/2022</h3>
               <p>AUTÔNOMA</p>
               <p>Mary Collections, Uber e Zé Delivery</p>
               <p>Campinas-Sp</p>
               <p>Modelo: Presencial</p>
            </div>
            <div className="col-md-7 d-flex justify-content-center align-items-center">
               <p className="card-text">Durante esse período atuei como microempreendedora onde adquiri habilidades de análise crítica de mercado para seleção de produtos, análise de mídias para engajamento de público, além de administração financeira para gestão de recursos e liderança. Também atuei como entregadora e motorista de aplicativo onde adquiri capacidade para gestão de tempo, planejamento e atendimento ao cliente.</p>
            </div>
         </div>
      </div>
      <div className="card">
         <div className="row g-0">
            <div className="col-md-5 ">
               <h3 className="card-title">05/2015 - 05/2017</h3>
               <p>Jovem aprendiz</p>
               <p>Ramsons</p>
               <p>Manaus-Am</p>
               <p>Modelo: Presencial</p>
            </div>
            <div className="col-md-7 d-flex justify-content-center align-items-center">
               <p className="card-text">Responsável por análises de compras e pontuação do cliente, análise sistêmica para averiguar possíveis erros em pontuações, atendimento telefônico, ligação para clientes e manipulação de documentação para arquivamento.</p>
            </div>
         </div>
        </div>
      </div>

      <div className="card-formacao top-card d-flex justify-content-center align-items-start flex-column gap-4 ">
         <h3>Formação</h3>
      <div className="card">
         <div className="row g-0">
            <div className="col-md-5 ">
               <h3 className="card-title">08/2022 - 06/2025</h3>
               <p>Sintuação: Em andamento</p>
               <p>Universidade Virtual do Estado de São Paulo</p>
               <p>Bacharelado</p>
               <p>Piracicaba-Sp</p>
            </div>
            <div className="col-md-7 d-flex justify-content-center align-items-center">
               <p className="card-text">Cursando tecnologia da informação na Univesp, localizada em Piracicaba-Sp no modelo EAD, atualmente no 6° semestre do total de 6.  </p>
            </div>
         </div>
        </div>
      </div>

      <div className="card-soft-hard top-card d-flex justify-content-center align-items-center flex-column w-100">
      <div className="card">
         <div className="d-flex flex-column gap-3">
            <div className="soft col-md-12 d-flex justify-content-center align-items-center flex-column">
               <h3>Soft Skills</h3>
               <div className="soft-list">
                  <p><i className="fa-solid fa-square"/> Pensamento crítico</p>
                  <p><i className="fa-solid fa-square"/> Capacidade de análise</p>
                  <p><i className="fa-solid fa-square"/> Controle emocional</p>
                  <p><i className="fa-solid fa-square"/> Comunicação objetiva</p>
                  <p><i className="fa-solid fa-square"/> Trabalho em equipe</p>
                  <p><i className="fa-solid fa-square"/> Adaptabilidade e Flexibilidade</p>
                  <p><i className="fa-solid fa-square"/> Liderança</p>
                  <p><i className="fa-solid fa-square"/> Empatia</p>
               </div>
               
            </div>
            <div className=" hard col-md-12 d-flex justify-content-center align-items-center flex-column">
               <h3>Hard Skills</h3>
               <div className="hard-list">            
                  <p><i className="fa-solid fa-square"/> HTML & CSS</p>
                  <p><i className="fa-solid fa-square"/> React.js</p>
                  <p><i className="fa-solid fa-square"/> JavaScript</p>
                  <p><i className="fa-solid fa-square"/> Bootstrap</p>
                  <p><i className="fa-solid fa-square"/> Wordpress</p>
                  <p><i className="fa-solid fa-square"/> Consumo de API</p>
                  <p><i className="fa-solid fa-square"/> MongoDB</p>
                  <p><i className="fa-solid fa-square"/> Node.JS</p>
               </div>
            </div>
            <div className="idiomas col-md-12 d-flex justify-content-center align-items-center flex-column">
               <h3>Idiomas</h3>
               <div className="idiomas-list">            
                  <p><i className="fa-solid fa-square"/> Inglês - Básico (curso em andamento) </p>
               </div>
            </div>
         </div>
        </div>
      </div>

   </div>
</section>
)
}
export default Curriculum;