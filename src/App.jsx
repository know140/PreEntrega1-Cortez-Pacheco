import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBarcomponent/NavBarComponent';
import './index.css'
import ItemListConteinerComponent from './components/itemListConteinerComponent/itemListConteinerComponent';

function App() {
  return (
    <div>
      <NavBarComponent />
      <ItemListConteinerComponent greeting="Bienvenidos CUBO indumentaria" />
    </div>
  );
}

export default App;