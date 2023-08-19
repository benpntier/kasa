import Banner from '../../components/Banner'
import aboutBannerImage from '../../assets/banner-about.png'

function About() {
  document.title = 'Kasa - A Propos'
  return (
    <main class="about max-width">
      <Banner img={aboutBannerImage} />
    </main>
  )
}

export default About
