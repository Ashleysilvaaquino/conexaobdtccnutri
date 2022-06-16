import './loginadm.scss'


import lista from '../../assets/images/lista.png'
import dieta from '../../assets/images/dieta-balanceada.png'



export default function index(){
    return(
        <main className='pagina-adm'>
        <section className="pg-login">
            <div className="pl-tt">
                <h1>BEM-VINDO(A) A ÁREA DO ADMINISTRADOR</h1>
            </div>

            <div className="pl-txt">
                <p>Faça seu login aqui:</p>
                <p>(apenas administrador(a) tem acesso)</p>
            </div>

            <p>Login:</p>
            <div className="pl-login">
                <input type="text"/>
                    <img src={lista} alt=""/>
                
            </div>

            <p>Senha:</p>    
            <div className="pl-senha">
                <input type="password"/>
                <img src={dieta} alt=""/>

            </div>

            <div className="botoes">
                <div className="b1">
                    <a  href="pagina-1">Voltar</a>
                </div>
                <div className="b2">
                    <a href="pagina-2"> Entrar </a>
                </div>
            </div>
        </section>
    </main>
    );
}