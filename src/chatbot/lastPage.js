import React from 'react';
import { useParams } from 'react-router-dom';

const LastPage = () => {
  const { name, age } = useParams();

  return (
    <div>
      <p>Your name {name} aged {age} has been added to the student system. You may now exit.</p>
    </div>
  );
};

export default LastPage;
