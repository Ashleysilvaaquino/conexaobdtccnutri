import './menu.scss'


import barras from '../../assets/images/tres_barrinha.png'
import gerente from '../../assets/images/gerente.png'

export default function index(){
    return(
        <main>
        <section>
            <header class="cabecalho">
                <div class="c-direita">
                    <img src={barras} alt=""/>
                    <h1>Área do Administrador: Menu </h1>
                </div>
                <div class="c-esquerda">
                    <h1>Gerente</h1>
                    <img src={gerente} alt=""/> 
                </div>
            </header>
            <div class="corpo">
                <div class="fx-esquerda">
                    <div>
                       <a href="cadastro.html"><h1>NOVA CONSULTA</h1></a> 
                       <a href="proximas.html"><h1>PRÓXIMAS CONSULTAS</h1></a> 
                      <a href="consultasr.html"><h1>CONSULTAS REALIZADAS</h1></a>  
                    </div>
                        <a class="botao" href="pgadm.html">Voltar</a>
                </div>

                <div class="consultas">
                    <h1>CONSULTAS DE HOJE:</h1>
                    <p>--- Antonio Nunes / 9:30</p>

                     <p>--- Jayson Tatum / 11:00</p>   
                        
                     <p>--- Roberto Carlos / 14:45</p> 
                        
                     <p>--- Michael SIlva / 15:20</p> 
                        
                     <p>--- Robson lima / 16:00</p>  
                </div>
            </div>
        </section>
    </main>
    );
}