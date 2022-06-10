import './index.scss'


import lapis from './assets/lapis.png'
import lixo from './assets/lixo.png'

import adicionar from './assets/adicionar.png'

export default function index(){
    
    return(
        <main className="pagina-total">
        <header>
            <nav>
                <div class="barra-sup">
                    <div class="bs-logo">
                        <img src="../assets/images/logo.png" alt=""/>
                        <p>MEIRELLES</p>
                    </div>
                    <div class="bs-div">
                        <a href="pgadm.html">ÁREA ADMINISATRATIVA</a>
                    </div>
                </div>
            </nav>   
        </header> 
        <section class="faixa-1">
            <div class="f1-textos">
                <h1>O que é ser um nutricionista?</h1>
                <img src="../assets/images/nutricionista.png" alt=""/>
            </div>
            <h2>O nutricionista é um profissional que <br/> trabalha na área da saúde humana, <br/> agindo na prevenção, promoção e meios <br/> de recuperar a saúde, por meio <br/> de dietas e rotinas de exercício de acordo <br/> com o perfil de cada pessoa.</h2>
        </section>  
        <section class="faixa-2">
            <div class="f2-textos">
                <h1>QUEM É A SHEILA MEIRELLES</h1>
            </div>   
             <h2>Sheila Meirelles é uma jovem com seus 23 anos de idade, formada <br/> em nutricionismo e pós-graduada na área. A Dr. Meirelles já <br/> trabalhou em diversas clínicas, possuindo vários clientes, porém, agora <br/> está trabalhando de maneira autônoma, ajudando <br/> as pessoas a atingirem seus objetivos de maneira saudável, <br/> sempre realizando atendimentos individuais e especiais <br/> para cada paciente. Confira ao longo do site todos os seus serviços, <br/> que são prestados com muita dedicação e empenho.</h2>
            
        </section> 
        <section class="faixa-3">
            <img src="../assets/images/objetivos.png" alt=""/>
            <div class="f3-fundo">
                <div class="f3-textos">
                    <h1>Objetivos de Sheila em sua carreira:</h1>
                    <p>Um dos seus objetivos é crescer como pessoa, fazendo o que ama, que é ajudar seus <br/> pacientes criando cardápios adequados ( do ponto <br/> de vista nutricional ) a cada um deles. E fazer com <br/> que sua empresa cresça, assim, expandindo seu negócio cada vez mais.</p>
                </div>
            </div>
        </section>
        <section class="faixa-5">
            <div class="f5-tt">
                <h1>Relatos de pacientes</h1>
                <img src="../assets/images/balao-de-fala.png" alt=""/>
            </div>
            <div class="f5-texto">
                <div class="f5-cartao">
                    <img src="../assets/images/do-utilizador.png" alt=""/>
                    <h1>BEATRIZ ROCHA COMENTOU:</h1>
                </div>
                <p>"Sheila, gostaria de te parabenizar e te agradecer também! Já havia escutado sobre o método Low Carb, mas somente fui compreendê-lo quando comecei a te acompanhar. Já emagreci 10Kg somente seguindo suas dicas, e sem fazer exercícios físicos. Obrigada por estar me ajudando, e por ajudar tantas pessoas!"</p>
            </div>
            <div class="f5-texto">
                <div class="f5-cartao">
                    <img src="../assets/images/do-utilizador.png" alt=""/>
                    <h1>CAROL MENDES COMENTOU:</h1>
                </div>
                <p>"A Doutora Sheila é muito atenciosa, explica muito bem tudo sobre os nossos objetivos, esclarece todas as suas dúvidas na hora, e depois também nas redes sociais. Elabora seu plano alimentar de acordo com a sua hora e sua rotina. Amei a consulta!"
                </p>
            </div>
        </section>
        <section class="f-7">

            <div class="titulo-f7">
                <h1>Serviços oferecidos:</h1>
            </div>
    
            <div class="f7-jt">
    
                <div class="faixinhas">
                    <img class="img-atleta" src="../assets/images/esportivo.png" alt=""/>
    
                    <div class="textos-f7">
                        <h2>Esportiva</h2>
                        <p>A nutrição esportiva tem como função proteger a saúde de quem pratica a atividade física nesses momentos. Durante a fase de treinos, o atleta precisa seguir um plano alimentar que forneça energia necessária para o esforço envolvido.</p>
                    </div>
                </div>
    
                <div class="faixinhas">
                    <img class="img-povo" src="../assets/images/clinica.png" alt=""/>
                    <div class="textos-f7">
                        <h2>Clinica</h2>
                        <p>A nutrição clínica trata-se o organismo como um todo e não apenas tenta-se combater uma doença</p>
                </div>
                </div>
    
                <div class="faixinhas">
                    <img class="img-chef" src="../assets/images/chef.png" alt=""/>
                    <div class="textos-f7">
    
    
                        <h2>Gastronomica</h2>
                        <p>A gastronomia na nutrição é a arte de preparar uma alimentação balanceada por meio da ciência dos alimentos. O nutricionista tem a função de apresentar a alimentação saudável e adequada à condição de seu cliente.</p> 
                </div>
                </div>
            </div>
    
        </section>
        <section class="faixa-7">
            <div>
                <h1 class="tipos">TIPOS DE DIETAS FORNECIDOS:</h1>
            </div>
            <div class="cartoes">
                <div class="f7-cartao" >
                
                    <img class = "img1" src = "../assets/images/uvinha.png" alt=" "/>
                    <p class ="p1">A dieta DASH tem foco no emagrecimento e tem como principal meta reduzir e controlar a pressão arterial.</p>
                </div>
                <div class="f7-cartao">
                    <img class = "img2" src="../assets/images/frutas.jpg" alt=""/>
                    <p class="p2">O método Low Carb tem como premissa a redução de carboidrato e propõe a redução, não a ausência do nutriente.</p>
                </div>
                <div class="f7-cartao">
                    <img class = "img3" src="../assets/images/franguinho.png" alt=""/>
                    <p class="p3"> Na Paleolítica, o cardápio segue a mesma proposta dos tempos das cavernas : carne de caça, pesca, frutas e vegetais.</p>
                </div>
            
        </div>
        
        </section>
        <section class="faixa-8">
            <div class="f8-pt1">
                <img src="../assets/images/privacidade.png" alt=""/>
                <div class="f8-pt1-txt">
                    <h1>TRABALHAMOS COM CONSULTORIA ÚNICA</h1>
                    <p> O que é consultoria única?</p>
                </div>
                <div class="f8-pt1-img">
                    <img src="../assets/images/verificado.png" alt=""/>
                </div>
            </div>
            <div class="f8-txt">
                <p>Todo paciente tem um tratamento diferenciado e preparado diretamente para ele(a), com <br/> gostos alimentares, diferentes tipos de dietas e até os treinos! A consulta é dedicada para cada <br/> um dos clientes individualmente e cada cardapio é adaptado para cada paciente.</p>
            </div>
        </section>


        <section class="rodape">
            <div class="rodape-pt1">
                <div class="rodape-redes">
                    <h1>Entre em contato conosco, e não fique com dúvidas!</h1>
                    <div class="elemento">
                        <img src="../assets/images/insta.png" alt=""/>
                        <h1>@sheilanutricionis_oficial
                        </h1>
                    </div>
                    <div class="elemento">
                        <img src="../assets/images/link.png" alt=""/>
                        <h1>sheilanutricionista
                        </h1>

                    </div>
                    <div class="elemento">
                        <img src="../assets/images/fb.png" alt=""/>
                        <h1>Sheila Nutricionista</h1>
                    </div>
                    <div class="elemento">
                        <img src="../assets/images/gmail.png"alt=""/>
                        <h1>Email : sheila@gmai.com
                        </h1>
                    </div>
                    <div class="elemento">
                        <img src="../assets/images/bolha-de-bate-papo.png" alt=""/>
                        <h1>Telefone : 11 9999-8888</h1>
                    </div>
                </div>
                <hr>
                <div class="rodape-valores">
                    <h1>MISSÃO:</h1>
                    <p>Prestar serviços de saúde utilizando o nutricionismo como base. Criar rotinas,exercícios e dietas para cada cliente individualmente de forma saudável.</p>

                    <h1>VISÃO:</h1>
                    <p>Servir de referênciacomo micro-empesa na região de interlagos. Investindo muito  para ser referência  no estado de São  Paulo e em todo Brasil.</p>

                </div>
                <hr>
                <div class="mapinha">
                    <div class="elemento-m">
                        <h1>SHEILA - CONSULTÓRIO NUTRICIONISTA</h1>
                        <img src="../assets/images/logo.png" alt=""/>
                    </div>
                    <div class="mapa">
                        <img src="../assets/images/meireles.png" alt=""/>
                    </div>
                </div>
            </div>
            <hr class="horizontal"/>
            <div class="rodape-pt2">
                <h1>MEIRELES NUTRICIONISTA</h1>
            </div>

        </section>
    </main>
    )};