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
            <section class="m-b-30">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-12">
                            <div class="border-pad bg-white p-20">
                                <div class="row">
                                    <div class="col-md-6">
                                        <h5 class="f-16 f-w-800 m-b-30" data-selector="h5">CONTATO</h5>
                                        <form class="form-contato" data-form-send="talkwithus">
                                            <div class="row">
                                                <div class="form-group col-md-6">
                                                    <label for="name">
                                                        <input name="name" class="form-control" placeholder="Nome:" required="" type="text"/>
                                                    </label>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="lastname">
                                                        <input name="lastname" class="form-control" placeholder="Sobrenome:" required="" type="text"/>
                                                    </label>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="email">
                                                        <input name="email" class="form-control" placeholder="E-mail:" required="" type="email"/>
                                                    </label>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="phone">
                                                        <input name="phone" class="form-control" placeholder="Telefone:" required="" type="text"/>
                                                    </label>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="company_name">
                                                        <input name="company_name" class="form-control" placeholder="Empresa:" required="" type="text"/>
                                                    </label>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="site">
                                                        <input name="site" class="form-control" placeholder="Site:" required="" type="text"/>
                                                    </label>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="state">
                                                        <input name="state" class="form-control" placeholder="Estado:" required="" type="text"/>
                                                    </label>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="city">
                                                        <input name="city" class="form-control" placeholder="Cidade:" required="" type="text"/>
                                                    </label>
                                                </div>
                                                <div class="form-group col-md-12">
                                                    <label for="segment">
                                                        <input name="segment" class="form-control" placeholder="Departamento:" required="" type="text"/>
                                                    </label>
                                                </div>
                                                <div class="form-group col-md-12">
                                                    <label for="message">
                                                        <textarea class="form-control" name="message" rows="3" placeholder="Sua Mensagem"></textarea>
                                                    </label>
                                                </div>
                                                <div class="form-group text-center">
                                                    <button type="submit" class="btn-rounded btn-rounded-green f-20">Enviar Mensagem</button>
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
