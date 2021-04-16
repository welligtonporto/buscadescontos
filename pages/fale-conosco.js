import Head from "next/head"

export default function Index() {
  return (
    <>
      <Head>
        <title>Fale conosco</title>
        <meta name="description" content="Fale com o Busca Descontos" />
        <link rel="canonical" href="https://www.buscadescontos.com.br/fale-conosco" />

        <meta property="og:title" content="Desconto e Cupons Desconto Grátis é no Busca Descontos" />
        <meta property="og:description" content="Desconto, Oferta e Cupom Desconto nas melhores Lojas. Milhares de Descontos Grátis no Maior Site de Descontos do Brasil" />
        <meta property="og:url" content="https://www.buscadescontos.com.br/fale-conosco" />
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
            <section className="m-b-30">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <div className="border-pad bg-white p-20">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h5 className="f-16 f-w-800 m-b-30" data-selector="h5">CONTATO</h5>
                                        <form className="form-contato" data-form-send="talkwithus">
                                            <div className="row">
                                                <div className="form-group col-md-6">
                                                    <label for="name">
                                                        <input name="name" className="form-control" placeholder="Nome:" required="" type="text"/>
                                                    </label>
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label for="lastname">
                                                        <input name="lastname" className="form-control" placeholder="Sobrenome:" required="" type="text"/>
                                                    </label>
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label for="email">
                                                        <input name="email" className="form-control" placeholder="E-mail:" required="" type="email"/>
                                                    </label>
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label for="phone">
                                                        <input name="phone" className="form-control" placeholder="Telefone:" required="" type="text"/>
                                                    </label>
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label for="company_name">
                                                        <input name="company_name" className="form-control" placeholder="Empresa:" required="" type="text"/>
                                                    </label>
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label for="site">
                                                        <input name="site" className="form-control" placeholder="Site:" required="" type="text"/>
                                                    </label>
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label for="state">
                                                        <input name="state" className="form-control" placeholder="Estado:" required="" type="text"/>
                                                    </label>
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label for="city">
                                                        <input name="city" className="form-control" placeholder="Cidade:" required="" type="text"/>
                                                    </label>
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label for="segment">
                                                        <input name="segment" className="form-control" placeholder="Departamento:" required="" type="text"/>
                                                    </label>
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label for="message">
                                                        <textarea className="form-control" name="message" rows="3" placeholder="Sua Mensagem"></textarea>
                                                    </label>
                                                </div>
                                                <div className="form-group text-center">
                                                    <button type="submit" className="btn-rounded btn-rounded-green f-20">Enviar Mensagem</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                    </div>
                </div>
            </div></div></div></section>
         
         </section>
    </>
  )
}
