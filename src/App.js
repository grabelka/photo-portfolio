import './App.css';
import Header from './components/Header';
import MyCarousel from './components/MyCarousel';
import Menu from './components/Menu';
import About from './components/About';
import Galery from './components/Galery';
import CommentList from './components/CommentList';
import Booking from './components/Booking';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="App-section">
        <MyCarousel />
        <Menu />
      </section>
      <section className='App-info'>
        <h2 id='App-about'>About Andrew Brown</h2>
        <About />
      </section>
      <section>
        <h2  id='App-galery'> </h2>
        <Galery />
      </section>
      <section className='App-info'>
        <h2 id='App-comments'>Comments</h2>
        <CommentList />
      </section>
      <section className='App-info'>
        <h2 id='App-book'>Book Andrew Brown</h2>
        <Booking />
      </section>
      <section className='App-contacts'>
        <h2 id='App-contacts'>Contacts</h2>
        <Contacts />
      </section>
      <Footer />
    </div>
  );
}

export default App;
