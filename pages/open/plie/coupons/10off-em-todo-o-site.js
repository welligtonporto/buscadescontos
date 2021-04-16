import Head from "next/head"
import { useEffect } from 'react'

export default function Index() {
    useEffect(() => {
        const header1 = document.querySelector(".header-desktop");
        const header2 = document.querySelector(".header-mobile");
    
        header1.style.display = "none";
        header2.style.display = "none";
    }, []);

  return (
    <>
      <Head>
        <title>10%OFF em Todo o Site | Buscadescontos</title>
        <meta name="description" content="10%OFF em Todo o Site" />
        <link rel="canonical" href="https://www.buscadescontos.com.br/open/plie/coupons/10off-em-todo-o-site" />

        <meta property="og:url" content="https://www.buscadescontos.com.br/open/plie/coupons/10off-em-todo-o-site" />
        <meta property="og:title" content="10%OFF em Todo o Site | Buscadescontos" />
        <meta property="og:description" content="10%OFF em Todo o Site" />
        <meta property="og:site_name" content="10%OFF em Todo o Site | Buscadescontos" />

        <meta property="og:image" content="https://www.buscadescontos.com.br/img/busca-desconto-og.png" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="649" />
        <meta property="og:image:height" content="649" />
        <meta property="og:locale" content="pt-br" />
        <meta property="og:type" content="website" />

        <meta name="msvalidate.01" content="E9890CFD71E9635C4502AAC28C05B1B0" />
      </Head>

        <div className="redirect-page">
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-offset-3 col-sm-6 col-md-offset-4 col-md-4">
                            <img src="/img/logo-busca-descontos.png" alt="Busca Descontos Logo" class="img-responsive m-0-auto logo"/>         
                                                    <p class="coupon-instructions text-center c-white" data-text-coupon="">Copie o cupom abaixo para que o desconto possa ser utilizado em sua oferta.</p>
                            
                                                <div class="code-offer">
                                <span class="input-code-offer">
                                    WELCOME                            </span>
                                <a class="copy-code-offer" data-copy-clipboard="" data-clipboard-text="WELCOME"> 
                                    <span class="copy-code-offer-cta"><i class="fa fa-clipboard" aria-hidden="true"></i> <span>Copiar</span></span> 
                                </a>
                            </div>
                            <br/>
                                                                        
                            <h2>Você esta sendo<br/> redirecionado para:</h2>
                            <div class="logo-redirect">
                                <img src="http://ui.zanox.com/images/programs/17660/17660_lgo_plie_br.png" alt="10%OFF em Todo o Site" class="img-responsive m-0-auto"/>
                            </div>                    
                            <p class="text-center c-white&gt;" data-text-offer="" style={{ color: "#FFF" }}>O prazo de validade e o preço anunciado estão sujeitos a alteração sem aviso prévio.</p>
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}>                             
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}
