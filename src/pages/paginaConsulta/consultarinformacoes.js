
import calendario from '../../assets/images/calendario.png'
import lapis from '../../assets/images/lapis.png'
import lixo from '../../assets/images/lixo.png'
import logo from '../../assets/images/logo.png'

export default  function index(){
    
    return(
       <main className='pagina-consultarinformacoes'>
           <div className="cabecalho-consultar">
        <img className="logo1" src={logo} alt=''/>
        <h1>CONSULTAR INFORMAÇÕES SOBRE CLIENTES</h1>
    </div>
    
    <section className="titulo">
        <div className="titulo">
            <h2 className="t-1">Próxima consultas: </h2>
            <input type="text"/>
        </div>
    </section>
    <section className="agora-vai">
    <section className="cartoes">
        
        <div className="parte-de-cima">
            <p>Mateus Fernandes</p>
            <p>Consulta dia 13/05</p>
        </div>
        <div className="parte-de-baixo">
            <div className="pt1">
                <ul>
                <li>Idade: 25 anos</li><br/>
                <li>Tipo de Dieta: Paleolitica</li>
                </ul>
            </div>
            <div className="pt2">
                <ul>
                <li>Peso: 65 kg</li><br/>
                <li>Assunto: "Quero ganhar peso mas não consigo"</li>
                </ul>
            
        </div>
        </div>
    </section>
        <div className="edicao1">
            <img src={lapis} alt=''/>
            <img src={lixo} alt=''/>
        </div>
    
    </section>
    <br/>
    <section className="agora-vai">
    <section className="cartoes">
        <div className="parte-de-cima">
            <p>João Silva</p>
            <p>Consulta dia 24/05</p>
        </div>
        <div className="parte-de-baixo">
            <div className="pt1">
            <ul>
            <li>Idade: 32 anos</li><br/>
            <li>Tipo de Dieta: Dash</li>
            </ul>
</div>
<div className="pt2">
    <ul>
            <li>Peso: 82 kg</li><br/>
            <li>Assunto: "Quero perder peso mas não consigo"</li>
            </ul>
        </div>
        </div>
    </section>
    <div className="edicao1">
        <img src={lapis} alt=""/>
        <img src={lixo} alt=""/>
    </div>
</section>
<br/>
<section className="agora-vai">
    <section className="cartoes">
        <div className="parte-de-cima">
            <p>Mateus Henrique</p>
            <p>Consulta dia 06/06</p>
        </div>
        <div className="parte-de-baixo">
            <div className="pt1">
            <ul>
            <li>Idade: 39 anos</li><br/>
            <li>Tipo de Dieta: Low Carb</li><br/>
            </ul>
        </div>
        <div className="pt2">
            <ul>
            <li>Peso: 75 kg</li>
            <li>Assunto: "Ando comendo muito coarboidrato"</li>
            </ul>
        </div>
        </div>
    </section>
    <div className="edicao1">
        
        <img src={lapis} alt=""/>
        <img src={lixo} alt=""/>
    </div>
    </section>
    
    <section className="agora-vai">
    <section className="cartoes">
        <div className="parte-de-cima">
            <p>Leia Cardoso</p>
            <p>Consulta dia 15/06</p>
        </div>
        <div className="parte-de-baixo">
            <div className="pt1"></div>
            <ul>
            <li>Idade: 22 anos</li><br/>
            <li>Tipo de Dieta: Low Carb</li><br/>
            </ul>
            <div className="pt2">

           <ul>
            <li>Peso: 79 kg</li>
            <li>Assunto: "Quero cortar um pouco meus carboidratos"</li>
            </ul>
         </div>
        </div>
    </section>
    <div className="edicao1">
        <img src={lapis} alt=""/>
        <img src={lixo} alt=""/>
    </div>
</section>
    <div className="calendario">
        <img src={calendario} alt=""/>
        <a href="">Voltar a pagina home</a>
    </div>
       </main>
    )
}