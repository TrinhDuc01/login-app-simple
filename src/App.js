
import { useSelector } from 'react-redux';
import './App.css';
import Login from './components/Login';
import Theme from './components/Theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const backgroundColor = useSelector(state => state.themeReducer.backgroundColor)
  return (

    <div className="App" style={{ backgroundColor: backgroundColor, transition: "3s" }}>
      <Theme />
      <Login />
      <ToastContainer

      />
      {/* Same as */}
      <ToastContainer />
    </div>

  );
}

export default App;
