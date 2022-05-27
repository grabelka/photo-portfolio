import './App.css';
import Header from './components/Header';
import MyCarousel from './components/MyCarousel';
import Menu from './components/Menu';
import Galery from './components/Galery';
import CommentList from './components/CommentList';
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
      <section className='App-section'>
        <Galery />
      </section>
      <section className='App-comment'>
        <h2 id='App-comments'>Comments</h2>
        <CommentList />
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
