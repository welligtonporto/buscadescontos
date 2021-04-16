import Head from "next/head"

export default function Index() {
  return (
    <>
      <Head>
        <title>_____title</title>
        <meta name="description" content="_____description" />
        <link rel="canonical" href="_____link" />

        <meta property="og:title" content="_____title" />
        <meta property="og:description" content="_____description" />
        <meta property="og:url" content="_____link" />
        <meta property="og:image" content="_____img" />

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
      </section>
    </>
  )
}
