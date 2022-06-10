import './index.scss'


import lapis from './assets/lapis.png'
import lixo from './assets/lixo.png'

import adicionar from './assets/adicionar.png'

export default function index(){
    return(
        <main class="tudo">
        
            <div class="titulo">
                <h3>CADASTRO:</h3>
            </div>
         <div class="container2">
            <div class="form1">
                <label>Nome:</label>
                <input type="text"/>
            </div>
            
            
            
            <div class="form">
                <label>CPF:</label>
                <input type="number"/>
                
            </div>
            <div class="form">
                <label>Data de nascimento:</label>
                <input type="number"/>
            </div>
            <div class="form1">
                <label>Endereço de email:</label>
                <input type="text"/>
            </div>
            <div class="mudar">

                <p>Sexo:</p>
                <label>M</label>
                <input type="radio"/>
                <label>F</label>
                <input type="radio"/>

            </div>
            <div class="form">
                <label>CEP:</label>
                <input type="number"/>
            </div>
            <div class="form2">
                <label>Assunto:</label>
                <input type="text"/>
              </div>
              <div class="form">
                 <label>Data da Consulta:</label>
                 <input type="number"/>
               </div>
              <div class="form">
                <label>Horário marcado:</label>
                <input type="number"/>
               </div>
              </div>
              <div class="botões">
                <div class="buttons">
               <button><a href="menu.html">Voltar</a></button>
                </div>
               <div class="buttons">
               <button><a href="#">Cadastrar</a></button>
                </div>
             </div>

        </div>

    </main>
    );
}

