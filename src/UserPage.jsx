import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Import axios
import './UserPage.css'; 

const UserPage = () => {
  const { userId } = useParams();

  useEffect(() => {
    // Make POST API call with userId
    axios.post('https://ywjru1t4oa.execute-api.ap-south-1.amazonaws.com/dev/savemail', { userId })
      .then(response => {
        console.log('API Response:', response.data);
      })
      .catch(error => {
        console.error('API Error:', error);
      });
  }, [userId]);

  return (
    <div className="user-page-container">
      <h1 style={{fontSize:'50px', fontStyle:'oblique'}}>Congratulations</h1>
      <h2 style={{fontSize:'30px' ,fontStyle:'oblique'}}>You will get your digital gold within 24 hours.</h2>
      <h3 style={{fontSize:'25px',fontStyle:'oblique'}}>Please, Don't forget to LOGIN to our App</h3>
    </div>
  );
};

export default UserPage;
