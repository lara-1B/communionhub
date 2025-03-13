import '../App.css'
import Navbar from '../components/navbar/Navbar.component';
import MainSection from '../components/MainSection/MainSection.component';
import WhyCommunion from '../components/Communion/WhyCommunion.component';
import FAQSection from '../components/FAQ/Faq.component';
import Footer from '../components/FooterSection/Footer.component';
const HomePage=()=> {
  return (
    <div>
      <Navbar/>
      <MainSection/>
      <WhyCommunion/>
      <FAQSection/>
      <Footer/>
    </div>
  );
}

export default HomePage;