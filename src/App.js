import React, { useEffect, useState } from 'react';

function App() {


  const [data, setData] = useState(null);

  useEffect(() => {
    // Function to fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await fetch('https://2d97-2405-201-f001-a1c4-5ca9-ec26-1d1a-ac01.ngrok-free.app/users/sampleview/');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const postData = async () => {
    try {
      const response = await fetch('https://2d97-2405-201-f001-a1c4-5ca9-ec26-1d1a-ac01.ngrok-free.app/users/sampleview/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ key: 'value' }),
      });
      const responseData = await response.json();
      console.log('Response from backend:', responseData);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  }

  return (
    <div>
      <h2>Data Details</h2>
      <p>{data}</p>
      <button onClick={postData}>Post Data</button>

    </div>
  );
}

export default App;
