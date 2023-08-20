import Banner from '../../components/Banner'
import Gallery from '../../components/Gallery'
import homeBannerImage from '../../assets/banner-home.png'

function Home() {
  document.title = 'Kasa'
  let bannerText = 'Chez vous,\n partout et ailleurs'

  return (
    <main className="home max-width">
      <Banner img={homeBannerImage} text={bannerText} />
      <Gallery />
    </main>
  )
}

export default Home
