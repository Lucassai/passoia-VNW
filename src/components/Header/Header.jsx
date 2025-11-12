import Logo from '../../assets/LogoHeader.svg'
import './Header.css'

function Header() {
  return (
    <header>
      <img src={Logo} alt="" />
      <nav>
        <ul>
          <li>LOOKS</li>
          <li>LANÇAMENOTS</li>
          <li>NOVIDADES</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
