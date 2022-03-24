import './App.css';
import Meals from './componenets/Meals/Meals';
import Navbar from './componenets/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div >
      <Navbar/>
      <Meals></Meals>
    </div>
  );
}

export default App;
