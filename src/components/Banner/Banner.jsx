import BannerImg from '../../assets/banner.jpg'
import './Banner.scss'

function Banner() {
  return (
    <div id="banner">
      <img className="image-banner" src={BannerImg} alt="" />
    </div>
  )
}
export default Banner
