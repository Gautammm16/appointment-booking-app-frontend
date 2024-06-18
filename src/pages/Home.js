import React, { useEffect } from 'react';
import axios from 'axios';

function Home() {
  const getData = async () => {
    try {
      const response = await axios.get('/api/user/get-user-info-by-id', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      });
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      This is Home Page
    </div>
  );
}

export default Home;

