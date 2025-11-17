import Labios from '../../assets/Labios.png'
import Olhos from '../../assets/Olhos.jpg'
import Rosto from '../../assets/Rosto.png'
import Tendencia from '../../assets/Tendencia.png'
import './Looks.scss'

function Looks() {
  return (
    <div id="looks">
      <h1>LOOKS E DICAS DE MAQUIAGEM</h1>
      <div id="images">
        <ul>
          <li>
            <img src={Labios} alt="" />
            <p>lábios</p>
          </li>
          <li>
            <img src={Olhos} alt="" />
            <p>olhos</p>
          </li>
          <li>
            <img src={Rosto} alt="" />
            <p>rosto</p>
          </li>
          <li>
            <img src={Tendencia} alt="" />
            <p>tendência</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Looks
