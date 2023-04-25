import React, { useState } from 'react';

export const Background=()=>{
  const [backgroundImage, setBackgroundImage] = useState('');

  const handleFileChange = (event) => {
    setBackgroundImage(URL.createObjectURL(event.target.files[0]));
  }

  return (
    <div style={{backgroundImage: `url(${backgroundImage})`, height: '100vh'}}>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
}

export default Background;
