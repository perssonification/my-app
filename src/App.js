import Navbar from './Navbar';
import Home from './Home';

console.log('Navbar import:', Navbar);
console.log('Home import:', Home);



function App() {
  return (
    <div className="App">
      <Navbar />
      <div className = "content">
        <Home/>
      </div>
    </div>
  );
}

export default App;
