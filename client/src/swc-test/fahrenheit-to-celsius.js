const fahrenheitToCelsius = (degreesFahrenheit) => {

  if(typeof degreesFahrenheit !== 'number') {
    throw new Error('Not a valid temperature');
  };

  return (degreesFahrenheit - 32) * 5 / 9;

};

export default fahrenheitToCelsius;
