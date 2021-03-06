import Head from "next/head"
import { useEffect } from 'react'

export default function Index() {
    useEffect(() => {
        const header1 = document.querySelector(".header-desktop");
        const header2 = document.querySelector(".header-mobile");
    
        header1.style.display = "none";
        header2.style.display = "none";
    }, []);

    function handleCopy(){
        var copyText = document.querySelector(".copyCode");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
    }

  return (
    <>
      <Head>
        <title>_____title | Buscadescontos</title>
        <meta name="description" content="_____title" />
        <link rel="canonical" href="https://www.buscadescontos.com.br/open/netshoes---sao-paulo-mania/coupons/_______slug" />

        <meta property="og:url" content="https://www.buscadescontos.com.br/open/netshoes---sao-paulo-mania/coupons/_______slug" />
        <meta property="og:title" content="_____title | Buscadescontos" />
        <meta property="og:description" content="_____title" />
        <meta property="og:site_name" content="_____title | Buscadescontos" />

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
                <div className="container">
                    <div className="row">
                        <div className="col-sm-offset-3 col-sm-6 col-md-offset-4 col-md-4">
                            <img src="/img/logo-busca-descontos.png" alt="Busca Descontos Logo" className="img-responsive m-0-auto logo"/>         
                                                    <p className="coupon-instructions text-center c-white" data-text-coupon="">Copie o cupom abaixo para que o desconto possa ser utilizado em sua oferta.</p>
                            
                                                <div className="code-offer">
                                <input className="input-code-offer copyCode" type="text" value="______code" />
                                <button className="copy-code-offer" data-copy-clipboard="" onClick={handleCopy}> 
                                    <span className="copy-code-offer-cta"><i className="fa fa-clipboard" aria-hidden="true"></i> <span>Copiar</span></span> 
                                </button>
                            </div>
                            <br/>
                                                                        
                            <h2>Voc?? esta sendo<br/> redirecionado para:</h2>
                            <div className="logo-redirect">
                                <img src="http://ui.zanox.com/images/programs/15949/15949_lgo_shoptimao_br.png" alt="_____title" className="img-responsive m-0-auto"/>
                            </div>                    
                            <p className="text-center c-white&gt;" data-text-offer="" style={{ color: "#FFF" }}>O prazo de validade e o pre??o anunciado est??o sujeitos a altera????o sem aviso pr??vio.</p>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}>                             
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
