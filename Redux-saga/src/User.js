import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const User = (props) => {
  const dispath = useDispatch();
  useEffect(() => {
    dispath({ type: 'FETCH_USERDATA' });
  }, []);
  return (
    <ul>
      <li>User Name :{props.name}</li>
    </ul>
  );
};

export default User;
