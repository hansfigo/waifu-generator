import logo from './logo.svg';
import './App.css';
import ImageGenerator from './get_image';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cih Psange</h1>
        <p>Created by figo mager</p>
        <ImageGenerator className="image-column"></ImageGenerator>
      </header>
    </div>
  );
}

export default App;
