import Head from 'next/head'
import Image from 'next/image'

import '../styles/style.min.css'
import '../styles/custom.css'

// import logo from "../img/logo-busca-descontos.png"

function MyApp({ Component, pageProps }) {
  return (
    <>
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
            <button className="btn-rounded btn-rounded-green desktop-user" onClick={() => console.log("modal register")}>Cadastre-se</button>
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

        <p>O Busca Descontos não vende produtos, é um site gratuito para os internautas. Como um agregador de ofertas não podemos garantir o preço e a disponibilidade das ofertas. As imagens são meramente ilustrativas. Caso haja diferença de preço ou descrição do produto entre o site do Busca Descontos e o site da loja, a condição válida e praticada será a do site do lojista. Sempre confira o preço e as condições diretamente no site da loja. Veja também as regras de entrega gratuita, parcelamento e política de vendas no site do lojista. As ofertas, condições de venda e preços dos varejistas podem ser alteradas ou interrompidas a qualquer momento, sem aviso prévio. Confira sempre o preço na página do produto da loja direcionada antes de efetuar a compra. A entrega do pedido é condicionada a disponibilidade do estoque do lojista e não está sob o controle das operações do buscadescontos.com.br.</p>

        <p>Participamos do Programa de Associados da Amazon, um serviço de intermediação entre a Amazon e os clientes, que remunera a inclusão de links para o site da Amazon e os sites afiliados./p&gt;
        </p><p>Compre com grandes descontos | © Copyright 2006-2015 Busca Descontos | Todos os direitos reservados | Mobile</p>
        </div>
      </footer>
    </>
  )
}

export default MyApp
