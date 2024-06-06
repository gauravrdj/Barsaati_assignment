import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [trends, setTrends] = useState([]);
  const [ip, setIp]=useState('');
  const [date, setDate] = useState('');
  const [id, setId] =useState('');

  useEffect(() => {
    // console.log('ID updated:', id);
    // console.log('Date updated:', date);
    // console.log('Trends updated:', trends);
    // console.log('IP updated:', ip);
  }, [id, date, trends, ip]);

  return (
    <div className="container mx-auto p-4">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={async () => {
          const res = await axios.get('http://localhost:3000/');
          setId(res.data.id);
          setDate(res.data.Date);
          setTrends(res.data.trendings);
          setIp(res.data.publicIP);
        }}
      >
        Click here to run the script
      </button>
  
      <div>
        {date==='' ? null : <h2 className="text-lg font-semibold mb-2">
          These are the most happening topics as on {date}
        </h2>}
        <ul className="list-disc list-inside">
          {trends.map((ele, index) => (
            <li key={index} className="mb-1">{ele}</li>
          ))}
        </ul>
      </div>
  
      <div className="mt-4">
        {ip==='' ? null  : <h2 className="text-lg font-semibold">
          The IP address used for this query was {ip}
        </h2>}
      </div>
    </div>
  );
  
}

export default App
