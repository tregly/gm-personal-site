import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1976-08-12T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 20,
    link:
      'https://www.google.com/maps/d/viewer?mid=1ksrgKl1-YwAFRJSw0-Jno5SOPnY&ll=42.09403075423656%2C5.333140499999999&z=4',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Bari, IT',
  },
];

export default data;
