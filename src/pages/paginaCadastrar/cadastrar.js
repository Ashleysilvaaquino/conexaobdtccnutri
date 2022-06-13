import './cadastrar.scss'




export default function index(){

    return(
        <main className="tudo">
        
            <div className="titulo">
                <h3>CADASTRO:</h3>
            </div>
         <div className="container2">
            <div className="form1">
                <label>Nome:</label>
                <input type="text"/>
            </div>
            
            
            
            <div className="form">
                <label>CPF:</label>
                <input type="number"/>
                
            </div>
            <div className="form">
                <label>Data de nascimento:</label>
                <input type="number"/>
            </div>
            <div className="form1">
                <label>Endereço de email:</label>
                <input type="text"/>
            </div>
            <div className="mudar">

                <p>Sexo:</p>
                <label>M</label>
                <input type="radio"/>
                <label>F</label>
                <input type="radio"/>

            </div>
            <div className="form">
                <label>CEP:</label>
                <input type="number"/>
            </div>
            <div className="form2">
                <label>Assunto:</label>
                <input type="text"/>
              </div>
              <div className="form">
                 <label>Data da Consulta:</label>
                 <input type="number"/>
               </div>
              <div className="form">
                <label>Horário marcado:</label>
                <input type="number"/>
               </div>
              </div>
              <div className="botões">
                <div className="buttons">
               <button><a href="menu.html">Voltar</a></button>
                </div>
               <div className="buttons">
               <button><a href="./paginaADM/index.js">Cadastrar</a></button>
                </div>
             </div>

           </main>
    );
}

