import palindrome from './palindrome';

describe('palindrome', () => {

  describe('negative tests', () => {
    it('"" should throw an error', () => {
      expect(() => {
        palindrome('')
      }).toThrow(new Error ('Not a valid string'));
    });
  })

  it('canary tests shows the infrastructure works', () => {
    expect(true).toEqual(true);
  });

  it('a should return true as a palindrome', () => {
    expect(palindrome('a')).toEqual(true);
  });

  it('mom should return true as a palindrome', () => {
    expect(palindrome('mom')).toEqual(true);
  });

  it('due should return false as a palindrome', () => {
    expect(palindrome('dude')).toEqual(false);
  });

  it('mom mom should return true as a palindrome', () => {
    expect(palindrome('mom mom')).toEqual(true);
  });

  it('mom dad should return false as a palindrome', () => {
    expect(palindrome('mom dad')).toEqual(false);
  });

  it(' " " should return true as a palindrome', () => {
    expect(palindrome(' ')).toEqual(true);
  });



  it('moM should return true as a palindrome', () => {
    expect(palindrome('moM')).toEqual(true);
  });


});
