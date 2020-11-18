import './App.scss';
import {HashRouter as Router} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import MainPage from './components/MainPage'
import Header from './components/Header';
import '@fortawesome/fontawesome-free/css/all.css'
import 'animate.css'
import WOW from 'wow.js'
import MobileMenu from './components/MobileMenu';


function App() {
  new WOW().init({
    animateClass:'animate__animated'
  });
  return (
    <Router basename="/blog_v1">
      <ScrollToTop>
      <Header />
      <MobileMenu />
      <MainPage />
      </ScrollToTop>
    </Router>
  );
}

export default App;
