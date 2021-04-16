import Head from "next/head"

export default function Index() {
  return (
    <>
      <Head>
        <title>Desconto e Cupons Desconto Grátis é no Busca Descontos</title>
        <meta name="description" content="Desconto, Oferta e Cupom Desconto nas melhores Lojas. Milhares de Descontos Grátis no Maior Site de Descontos do Brasil" />
        <link rel="canonical" href="https://www.buscadescontos.com.br/" />

        <meta property="og:title" content="Desconto e Cupons Desconto Grátis é no Busca Descontos" />
        <meta property="og:description" content="Desconto, Oferta e Cupom Desconto nas melhores Lojas. Milhares de Descontos Grátis no Maior Site de Descontos do Brasil" />
        <meta property="og:url" content="https://www.buscadescontos.com.br/" />
        <meta property="og:image" content="https://www.buscadescontos.com.br/img/busca-desconto-og.png" />

        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="649" />
        <meta property="og:image:height" content="649" />
        <meta property="og:locale" content="pt-br" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="pilha" />

        <meta name="msvalidate.01" content="E9890CFD71E9635C4502AAC28C05B1B0" />
      </Head>

      <section id="main-content">
        <div>new banner</div>

        <div className="customBanner">
            <div className="container">
                <div className="border-pad black-gradient-bg banner-register-bf small p-l-5 p-r-5">
                    <div className="row flex center">
                        <div className="col-md-7">
                            <img src="/img/logo-bf-lighting.png" className="img-responsive m-0-auto logo-bf"/>
                            <form action="" className="m-b-10 form-banner-op-02" data-form-send="newsletter">
                                <div className="row">
                                    <div className="col-sm-5 col-md-5 m-b-20-mb"> 
                                        <div className="form-group">                                           
                                            <input type="text" name="name" className="form-control" placeholder="Seu nome" required=""/>
                                        </div>
                                    </div>
                                    <div className="col-sm-7 col-md-7">
                                        <div className="banner-op-2-input-button">
                                            <div className="form-group">                                               
                                                <input type="email" name="email" placeholder="Digite seu e-mail" required=""/>
                                            </div>
                                            <button type="submit" className="editContent"> Cadastrar </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="or-text">
                                            ou entre com a sua conta do
                                            <a href="https://www.facebook.com/v2.2/dialog/oauth?client_id=1463689027024101&amp;state=11b4bf8633a3dfec3f252fd3ba2e60d8&amp;response_type=code&amp;sdk=php-sdk-5.6.3&amp;redirect_uri=https%3A%2F%2Fwww.buscadescontos.com.br%2Ffacebook%2Fcallback&amp;scope=email" className="loginBtn loginBtn--facebook s-small"></a> 
                                        </div>                                
                                    </div>
                                </div>
                            </form>
                            <div className="row">
                                <h1 className="text-center m-b-20 editContent banner-title">Cadastre-se para receber as melhores <br/> ofertas do Black-Friday</h1>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className="offer-track bg-yellow relative-fixed-on-scroll v2">
            <div className="container p-relative offer-track-content">
                <div className="img-offer-track">
                    <img src="/img/img-oferta-v2.png" alt="Oferta" className="img-responsive"/>
                </div>
                <div className="row">
                    <div className="col-sm-offset-4 col-sm-4 col-md-offset-3 col-md-4">
                        <h1 className="editContent"> Receba novidades, ofertas e os melhores cupons no seu email </h1>
                    </div>
                    <div className="col-sm-4 col-md-5">
                        <div className="row">
                            <form className="form-offer-track" data-form-send="newsletter">
                                <div className="form-group">
                                    <input className="form-control" name="email" placeholder="Digite seu e-mail aqui" required="" type="email"/>
                                </div>
                                <button type="submit"> 
                                    <span className="editContent"> Quero desconto! </span>
                                </button>                                    
                            </form>
                        </div>
                        <p>Ao enviar seus dados, você aceita nossa <a href="/politica-de-privacidade" target="_blank">Política de Privacidade</a> além de receber nossas ofertas e publicidade enviado por Black Friday/Busca Descontos e nossos parceiros .</p>
                    </div>
                </div>
            </div>
        </section>
      </section>
    </>
  )
}
