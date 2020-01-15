import wordWrap from './wordWrap';

describe('wordWrap', () => {
  describe('negative tests', () => {
    it('" " should throw an error', () => {
      expect(() => {
        wordWrap('  ')
      }).toThrow(new Error ('Not a valid string'));
    })
    it('"   " should throw an error', () => {
      expect(() => {
        wordWrap('    ')
      }).toThrow(new Error ('Not a valid string'));
    })
  })
  it('canary tests shows the infrastructure works', () => {
    expect(true).toEqual(true);
  });

  it('{a, 1} should return a', () => {
    expect(wordWrap('a', 1)).toEqual('a');
  });

  it('{aa, 1} should return a in two different lines', () => {
    expect(wordWrap('aa', 1)).toEqual('a\na');
  });

  it('{aaa, 1} should return a in three different lines', () => {
    expect(wordWrap('aaa', 1)).toEqual('a\na\na');
  });

  it('{aaaa, 2} should return aa in two different lines', () => {
    expect(wordWrap('aaaa', 2)).toEqual('aa\naa');
  });

  it('{apple pie, 4} should return appl e pie in three different lines', () => {
    expect(wordWrap('apple pie', 4)).toEqual('appl\ne\npie');
  });

  it('{a b c d, 4} should return a b c d in four different lines', () => {
    expect(wordWrap('a b c d', 4)).toEqual('a\nb\nc\nd');
  });

  it('{ , 1} should return empty space', () => {
    expect(wordWrap(' ', 1)).toEqual(' ');
  });

  it('{a bcdefg, 3} should return a b c d in four different lines', () => {
    expect(wordWrap('a bcdefg', 3)).toEqual('a\nbcd\nefg');
  });

});
