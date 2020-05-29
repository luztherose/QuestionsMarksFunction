/* 

Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.

For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.
Examples
Input: "aa6?9"
Output: false
Input: "acc?7??sss?3rr1??????5"
Output: true

*/

function questionsMarks(str) {
    let countQuestionsMarks = 0;
    let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let num1;
    let num2;
    let indexFirstNum;
    let indexSecondNum;
    for (let i = 0; i < str.length; i++) {

        for (let n = 0; n < numbersArray.length; n++) {
            if (str[i] == numbersArray[n]) {
                if (num1 == undefined) {
                    num1 = parseInt(str[i]);
                    indexFirstNum = i;
                } else {
                    if (num2 == undefined) {
                        num2 = parseInt(str[i]);
                        indexSecondNum = i ;
                    }
                    if(num1 + num2 != 10) {
                        num1 = undefined;
                        num2 = undefined;
                    }
                }
                
            }
        }
    }
    
    // indexFirstNum = str.indexOf(num1);
    // indexSecondNum = str.indexOf(num2);

    for (let j = indexFirstNum; j < str.length; j += 1) {
        if(j <  indexSecondNum) {
            if (str[j] == "?") {
                countQuestionsMarks += 1;
                
            }
        }
    }
    if (countQuestionsMarks == 3 && (num1 + num2) == 10) {
        return true;
    } else {
        return false;
    }
}
console.log(questionsMarks("aa1??aaa?9"));