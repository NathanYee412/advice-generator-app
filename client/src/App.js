import './App.css';
import Advice from './components/Advice';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {


  const [data, setData] = useState([]);

  useEffect(() => {
    getData()
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(`https://api.adviceslip.com/advice`);
      const data = await response;

      setData(data.data.slip);

    } catch (error) {
      console.log(error);
    }
  }


  console.log(data);

  return (
    <div className="App">
      <Advice number={data.id} quote={data.advice}/>
    </div>
  );
}

export default App;
