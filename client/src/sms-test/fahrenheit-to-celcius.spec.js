function fahrenheitToCelsius (degreesFahrenheit){
    return (degreesFahrenheit - 32) * 5 / 9;
}

describe('fahrenheit-to-celsius', () => {
    test('canary test shows the infrastructure works', () => {
      expect(true).toBe(true);
    });
  
    test('32 degrees fahrenheit is 0 degrees celsius', () => {
      expect(fahrenheitToCelsius(32)).toEqual(0);
    });
    
    test('212 degrees fahrenheit is 100 degrees celsius', () => {
        expect(fahrenheitToCelsius(212)).toEqual(100);
    })

    test('-40 degrees fahrenheit is -40 degrees celsius', () => {
        expect(fahrenheitToCelsius(-40)).toEqual(-40);
    })

    describe('negative-tests', () => {
        test('NaN should return NaN', () => {
            expect(fahrenheitToCelsius('test')).toEqual(NaN);
        })
    });

  });


