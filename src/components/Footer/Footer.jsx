import './Footer.scss'
import Boleto from './images/boleto.png'
import Visa from './images/visa.svg'
import Mastercard from './images/master.svg'
import Pix from './images/pix.png'

import Instagram from './images/instagram.svg'
import Facebook from './images/facebook.svg'
import Twitter from './images/twitter.svg'
import Youtube from './images/youtube.svg'

function Footer() {
  return (
    <footer>
      <div id="atendimento">
        <h3>Atendimento</h3>
        <ul>
          <li>Fale Conosco</li>
          <li>Perguntas Frequentes</li>
          <li>Meus Pedidos</li>
          <li>Nossas Lojas</li>
        </ul>
      </div>
      <div id="pagamento">
        <h3>Formas de Pagamento</h3>
        <div className="formas-pagamento">
          <img src={Mastercard} alt="" />
          <img src={Visa} alt="" />
          <img src={Pix} alt="" />
          <img src={Boleto} alt="" />
        </div>
      </div>
      <div id="sociais">
        <h3>siga-nos nas redes sociais</h3>
        <img src={Instagram} alt="" />
        <img src={Facebook} alt="" />
        <img src={Youtube} alt="" />
        <img src={Twitter} alt="" />
      </div>
    </footer>
  )
}

export default Footer
