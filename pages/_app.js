import Head from "next/head"
import React, { useState } from 'react'
import Image from 'next/image'

import '../styles/style.min.css'
import '../styles/custom.css'

function MyApp({ Component, pageProps }) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
      </Head>

      <header className="header-desktop">
        <div className="container">
        <div className="flex-header row">
        <div className="">
        <a href="/" className="logo">
        <Image src="/img/logo-busca-descontos.png" alt="Logo Busca Descontos" className="img-responsive" width="226" height="49" />
        </a>
        </div>

        <div className="header-desktop-actions">
          <div>
            <a href="/lojas" className="btn-rounded">Lojas <i className="fa fa-angle-right" aria-hidden="true"></i> </a>
          </div>

          <div>
            <button type="button" className="btn-rounded btn-rounded-green desktop-user" data-toggle="modal" data-target="#modalRegister">Cadastre-se</button>
          </div>
        </div>
        
        </div>
        </div>
      </header>

      <header className="header-mobile">
        <div className="container">
          <div className="row flex-header-mobile">
          <div className="col-xs-6 col-sm-3">
          <a href="/" className="logo">
          <Image src="/img/logo-busca-descontos.png" alt="Logo Busca Descontos" className="img-responsive" width="226" height="49" />
          </a>
          </div>
          <div className="col-xs-6 col-md-9 text-right">
          <a href="/lojas" className="btn-rounded mobile-button-header"><i className="fa fa-shopping-cart"></i> </a>
          <button className="btn-rounded btn-rounded-green mobile-user mobile-button-header" onClick={() => console.log("register")}>
          <i className="fa fa-user"></i> 
          </button>
          </div>
          </div>
        </div>
      </header>

      <Component {...pageProps} />

      <footer className="bg-white">
        <section className="bg-blue p-b-15 p-t-15 m-b-40">
        <div className="container">
        <div className="row">
        <div className="col-md-1">
        <a href="/">
        <img src="/img/logo-busca-footer.png" alt="" className="img-responsive m-0-auto"/>
        </a>
        </div>
        <div className="col-md-11">
        <nav className="footer-nav">
        <ul>
        <li><a href="/termos-de-uso">Termos de Uso</a></li>
        <li><a href="/politica-de-privacidade">Politica de Privacidade</a></li>
        <li><a href="/fale-conosco">Fale Conosco</a></li>
        </ul>
        </nav>
        </div>
        </div>
        </div>
        </section>
        <div className="container">
        <h4 className="f-w-600">Nossos Sites</h4>
        <div className="p-relative">
        <div className="m-b-60">
        <div className="row" style={{ display: "flex" }}>
        <div className="col">
        <a href="http://blackfriday.com.br/" target="_blank">
        <img src="/img/logo-blackfriday.png" alt="Logo" className="img-responsive m-0-auto"/>
        </a>
        </div>                    
        <div className="col">
        <a href="https://black-friday.discount/" target="_blank">
        <img src="/img/blackfriday2.png" alt="Logo" className="img-responsive m-0-auto"/>
        </a>
        </div>
        <div className="col">
        <a href="http://www.brasilgameday.com.br/" target="_blank">
        <img src="/img/logo-brasil-game.png" alt="Logo" className="img-responsive m-0-auto"/>
        </a>
        </div>
        <div className="col">
        <a href="http://www.diadofretegratis.com.br/" target="_blank">
        <img src="/img/logo-frete-gratis.png" alt="Logo" className="img-responsive m-0-auto"/>
        </a>
        </div>
        <div className="col">
        <a href="http://www.cybermondaybrasil.com.br/" target="_blank">
        <img src="/img/logo-cyber-monday.png" alt="Logo" className="img-responsive m-0-auto"/>
        </a>
        </div>
        </div>
        </div>
        <div className="swiper-pagination swiper-pagination-footer swiper-footer-custom-pagination"></div>
        </div>

        <p>O Busca Descontos n??o vende produtos, ?? um site gratuito para os internautas. Como um agregador de ofertas n??o podemos garantir o pre??o e a disponibilidade das ofertas. As imagens s??o meramente ilustrativas. Caso haja diferen??a de pre??o ou descri????o do produto entre o site do Busca Descontos e o site da loja, a condi????o v??lida e praticada ser?? a do site do lojista. Sempre confira o pre??o e as condi????es diretamente no site da loja. Veja tamb??m as regras de entrega gratuita, parcelamento e pol??tica de vendas no site do lojista. As ofertas, condi????es de venda e pre??os dos varejistas podem ser alteradas ou interrompidas a qualquer momento, sem aviso pr??vio. Confira sempre o pre??o na p??gina do produto da loja direcionada antes de efetuar a compra. A entrega do pedido ?? condicionada a disponibilidade do estoque do lojista e n??o est?? sob o controle das opera????es do buscadescontos.com.br.</p>

        <p>Participamos do Programa de Associados da Amazon, um servi??o de intermedia????o entre a Amazon e os clientes, que remunera a inclus??o de links para o site da Amazon e os sites afiliados./p&gt;
        </p><p>Compre com grandes descontos | ?? Copyright 2006-2015 Busca Descontos | Todos os direitos reservados | Mobile</p>
        </div>
      </footer>

      <div className="modal fade customModal" id="modalRegister" tabIndex="-1" role="dialog" aria-labelledby="modalRegisterLabel">
        <div className="modal-dialog modal-sm" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <h4 className="modal-title">Cadastre-se para receber as melhores ofertas em seu e-mail</h4>
              <form data-form-send="newsletter">
              <div className="form-group">
              <input type="text" name="name" placeholder="Seu Nome" required="" className="form-control"/>
              </div>
              <div className="form-group m-b-20">
              <input type="email" name="email" placeholder="Seu E-mail" required="" className="form-control"/>
              </div>   
              <button type="submit" className="btn btn-register"><span className="text">Cadastrar</span></button>
              <br/><br/>
              <h4 className="modal-title">Ao enviar seus dados, voc?? aceita nossa <a href="https://www.buscadescontos.com.br/politica-de-privacidade" target="_blank">Pol??tica de Privacidade</a> al??m de receber nossas ofertas e publicidade enviado por Black Friday/Busca Descontos e nossos parceiros .</h4>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyApp
