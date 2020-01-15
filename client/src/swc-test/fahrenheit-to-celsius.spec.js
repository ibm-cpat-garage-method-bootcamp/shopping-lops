import fahrenheitToCelsius from './fahrenheit-to-celsius'

describe('fahrenheitToCelsius', () => {

  describe('negative tests', () => {
    it('NaN should throw an error', () => {
      expect(() => {
        fahrenheitToCelsius('test');
      }).toThrow(new Error('Not a valid temperature'));
    });
  });

  it('canary test shows the infrastructure works', () => {
    expect(true).toEqual(true);
  });

  it('32 degrees fahrenheit is 0 degrees celsius', () => {
    expect(fahrenheitToCelsius(32)).toEqual(0);
  });

  it('212 degrees fahrenheit is 100 degrees celsius', () => {
    expect(fahrenheitToCelsius(212)).toEqual(100);
  });

  it('-40 degrees fahrenheit is -40 degrees celsius', () => {
    expect(fahrenheitToCelsius(-40)).toEqual(-40);
  });
});
