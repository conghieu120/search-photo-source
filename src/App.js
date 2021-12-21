import './App.css';
import Header from './component/header'
import Container from './component/container'
import Footer from './component/footer'
import PhotoContextProvider from './component/context'

function App() {
  return (
    <PhotoContextProvider>
      <div className="App">
          <Header/>
          <Container/>
          <Footer/>
      </div>
    </PhotoContextProvider>
   
  );
}

export default App;
