function kataWordWrap(str, column) {
    if(column < 0){
        return "Column could be a positive number";
    }
    if (column == 0) {
        return str;
    }
    if ((str.length == 1) || (str.length == column)) {
        return str;
    } else {
        let myNewString = '';
        for (let i = 0; i < str.length; i++) {
            if (i == column) {
                myNewString+= '_';
                column = 2 * column;
            }
            myNewString+= str[i];
        }
        console.log(myNewString);
        return myNewString;
    }
}

describe('kata-wordwrap', () => {
    test('canary test shows the infrastructure works', () => {
      expect(true).toBe(true);
    });
    test('when given (a,1) it should return 1 column with a', () => {
        expect(kataWordWrap('a', 1)).toEqual('a');
      });
      test('when given (ab,2) it should return ab', () => {
        expect(kataWordWrap('ab', 2)).toEqual('ab');
      }); 
      test('when given (abc,3) it should return ab', () => {
        expect(kataWordWrap('abc', 3)).toEqual('abc');
      }); 
      test('when given (abc,2) it should return ab_c', () => {
        expect(kataWordWrap('abc', 2)).toEqual('ab_c');
      }); 
      test('when given (aabb,3) it should return aab_b', () => {
        expect(kataWordWrap('aabb', 3)).toEqual('aab_b');
      });
      test('when given (aabb,4) it should return aabb', () => {
        expect(kataWordWrap('aabb', 4)).toEqual('aabb');
      });
      test('when given (abc,1) it should return a_b_c', () => {
        expect(kataWordWrap('abc', 1)).toEqual('a_b_c');
      });
      test('when given (abc,1) it should return a_b_c', () => {
        expect(kataWordWrap('abc', 1)).toEqual('a_b_c');
      });
      test('when given (abc,0) it should return abc', () => {
        expect(kataWordWrap('abc', 0)).toEqual('abc');
      });
      test('when given (abc,-1) it should return an error', () => {
        expect(kataWordWrap('abc', -1)).toEqual("Column could be a positive number");
      });
      test('when given (abcdefghi, 3) it should return abc_def_ghi', () => {
        expect(kataWordWrap('abcdefghi', 3)).toEqual("abc_def_ghi");
      });
      test('when given (abc, 5) it should return abc', () => {
        expect(kataWordWrap('abc', 5)).toEqual("abc");
      });
      test('when given (aa , 3) it should return aa ', () => {
        expect(kataWordWrap('aa ', 3)).toEqual("aa ");
      });

});