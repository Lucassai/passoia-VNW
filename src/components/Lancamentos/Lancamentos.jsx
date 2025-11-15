import './Lancamentos.scss'
import { useState } from 'react'

import Estrelas from './images/estrelas.png'

import Kit1 from './images/kit1.png'
import Kit2 from './images/kit2.png'
import Kit3 from './images/kit3.png'

import Blue from './images/blue.png'
import Red from './images/red.png'
import Browm from './images/brown.png'
import Pink from './images/pink.png'

function Lancamentos() {
  const [cor, setCor] = useState(Red)

  return (
    <div id="lancamentos">
      <h2>aproveite os lançamentos</h2>
      <div id="lancamentos-content">
        <div id="kits">
          <img src={Kit1} alt="" />
          <img src={Kit2} alt="" />
          <img src={Kit3} alt="" />
        </div>
        <img src={cor} alt="" />
        <div className="batom ativo">
          <img src={Estrelas} alt="" />
          <h3>Matte Premium</h3>
          <span>Cores disponiveis</span>
          <div id="cores">
            <button>Blue</button>
            <button>Red</button>
            <button>Brown</button>
            <button>Pink</button>
          </div>
          <h4>Descrição</h4>
          <p>
            O Batom Matte possui uma fórmula inovadora desenvolvida para
            entregar o máximo de cor na primeira aplicação com um deslize suave
            e macio. Tem acabamento matte aveludado e manteiga de manga que
            ajuda a hidratar e a proteger os lábios contra ressecamento. Ajuda
            na hidratação dos lábios, textura fina e macia que não pesa nos
            lábios.
          </p>
        </div>
        <div className="batom">
          <img src={Estrelas} alt="" />
          <h3>Lilás Suave</h3>
          <span>Cores disponiveis</span>
          <div id="cores">
            <button>Blue</button>
            <button>Red</button>
            <button>Brown</button>
            <button>Pink</button>
          </div>
          <h4>Descrição</h4>
          <p>
            O Batom Matte Lilás Suave possui uma tonalidade delicada e moderna,
            ideal para quem busca um visual elegante e diferenciado. Sua fórmula
            matte aveludada desliza maciamente, garantindo conforto durante todo
            o dia. Enriquecido com manteiga de manga, hidrata e protege os
            lábios contra o ressecamento, oferecendo cor uniforme sem pesar.
          </p>
        </div>
        <div className="batom">
          <img src={Estrelas} alt="" />
          <h3>Vermelho Intenso</h3>
          <span>Cores disponiveis</span>
          <div id="cores">
            <button>Blue</button>
            <button>Red</button>
            <button>Brown</button>
            <button>Pink</button>
          </div>
          <h4>Descrição</h4>
          <p>
            O Batom Matte Vermelho Intenso entrega máxima pigmentação logo na
            primeira aplicação, trazendo um toque clássico e poderoso ao visual.
            Com textura fina e acabamento matte aveludado, proporciona um
            deslizamento suave e macio. Sua fórmula com manteiga de manga mantém
            os lábios hidratados e protegidos, garantindo cor vibrante e
            duradoura.
          </p>
        </div>
        <div className="batom">
          <img src={Estrelas} alt="" />
          <h3>Matte Premium</h3>
          <span>Cores disponiveis</span>
          <div id="cores">
            <button>Blue</button>
            <button>Red</button>
            <button>Brown</button>
            <button>Pink</button>
          </div>
          <h4>Descrição</h4>
          <p>
            O Batom Matte Coral Quente combina vibração e suavidade em uma cor
            perfeita para iluminar qualquer look. Sua fórmula inovadora
            proporciona cor intensa com um deslize suave e textura macia. O
            acabamento matte aveludado, aliado à manteiga de manga, mantém os
            lábios hidratados, protegidos e com toque leve durante todo o dia.
          </p>
        </div>
        <div className="batom">
          <img src={Estrelas} alt="" />
          <h3>Matte Premium</h3>
          <span>Cores disponiveis</span>
          <div id="cores">
            <button>Blue</button>
            <button>Red</button>
            <button>Brown</button>
            <button>Pink</button>
          </div>
          <h4>Descrição</h4>
          <p>
            O Batom Matte Vinho Elegante traz sofisticação instantânea com sua
            cor profunda e marcante. Desenvolvido para oferecer cobertura
            uniforme desde o primeiro toque, possui acabamento matte confortável
            que não resseca. A manteiga de manga presente na fórmula garante
            hidratação prolongada e sensação agradável nos lábios.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Lancamentos
