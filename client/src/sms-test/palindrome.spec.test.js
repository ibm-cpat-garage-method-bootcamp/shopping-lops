function isPalindrome (str){

    if(str == null || str.length == 1){
        return true;
    }
    else {
        let firstIndex = 0;
        let lastIndex = str.length - 1;
        if (str[firstIndex] == str[lastIndex]) {
            return true;
        }
    }
    return false;
}

describe('is-palindrome', () => {
    test('canary test shows the palindrome works', () => {
        expect(true).toBe(true);
      });
      test('is the empty space a palindrome', () => {
        expect(isPalindrome(null)).toBe(true);
      });
      test('is b a palindrome', () => {
        expect(isPalindrome('b')).toBe(true);
      });
      test('is mom a palindrome', () => {
        expect(isPalindrome('mom')).toBe(true);
      });
      test('is dude a palindrome', () => {
        expect(isPalindrome('dude')).toBe(false);
      });
      test('is mom mom a palindrome', () => {
        expect(isPalindrome('mom mom')).toBe(true);
      });
      test('is moM palindrome', () => {
        expect(isPalindrome('moM')).toBe(false);
      });
})
