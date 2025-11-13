import { useEffect } from 'react'

import Logo from '../../assets/LogoHeader.svg'
import BurguerMenu from '../../assets/BurguerMenu.svg'
import './Header.css'

function Header() {
  useEffect(() => {
    const menu = document.querySelector('#menu')
    const burguerButton = document.querySelector('#hamburguer-button')

    const handleClick = (e) => {
      e.stopPropagation() // evita que o clique no botão seja tratado como "fora"
      menu?.classList.toggle('active')
    }

    const handleOutsideClick = (e) => {
      if (!menu || !burguerButton) return
      if (!menu.contains(e.target) && !burguerButton.contains(e.target)) {
        menu.classList.remove('active')
      }
    }

    burguerButton?.addEventListener('click', handleClick)
    document.addEventListener('click', handleOutsideClick)

    return () => {
      burguerButton?.removeEventListener('click', handleClick)
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  return (
    <header>
      <img src={Logo} alt="" />
      <nav>
        <button id="hamburguer-button" className="hamburguer-button">
          <img src={BurguerMenu} alt="" />
        </button>

        <ul id="menu">
          <li>
            <a href="#">LOOKS</a>
          </li>
          <li>
            <a href="#">LANÇAMENTOS</a>
          </li>
          <li>
            <a href="#">NOVIDADES</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
