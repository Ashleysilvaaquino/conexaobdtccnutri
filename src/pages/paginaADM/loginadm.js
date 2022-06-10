import './index.scss'


import lapis from './assets/lapis.png'
import lixo from './assets/lixo.png'

import adicionar from './assets/adicionar.png'

export default function index(){
    return(
        <main>
        <section class="pg-login">
            <div class="pl-tt">
                <h1>BEM-VINDO(A) A ÁREA DO ADMINISTRADOR</h1>
            </div>

            <div class="pl-txt">
                <p>Faça seu login aqui:</p>
                <p>(apenas administrador(a) tem acesso)</p>
            </div>

            <p>Login:</p>
            <div class="pl-login">
                <input type="text"/>
                <img src="../assets/images/lista.png" alt=""/>
                
            </div>

            <p>Senha:</p>    
            <div class="pl-senha">
                <input type="password"/>
                <img src="../assets/images/dieta-balanceada.png" alt=""/>

            </div>

            <div class="botoes">
                <div class="b1">
                    <a  href="index.html">Voltar</a>
                </div>
                <div class="b2">
                    <a href="menu.html"> Entrar </a>
                </div>
            </div>
        </section>
    </main>
    );
}