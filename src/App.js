import './App.css';
import image from './assets/worktrack image.jpg';
import Header from './compnents/Header'; // Fixed typo in 'components'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="h-screen w-screen bg-black flex">
        <div className="h-full w-6/12 bg-white flex items-center justify-center">
          <h1 className="text-center text-xl font-bold">
            Track your work progress
            <br />
            anywhere anytime!
          </h1>
        </div>
        <div className="h-full w-6/12 bg-blue-200">
          <img
            className="h-full w-full object-cover"
            src={image}
            alt="Work Progress"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
