// The console.assert() method writes a message to the console, but only if an expression evaluates to false.

function testCheckIfThereAre3QuestionsMarksBetweenTwoNumbersThatAddUpTo10() {
    let input = questionsMarks("aa6?9");
    console.assert(false == input, " testCheckIfThereAre3QuestionsMarks failed");
}
function testCheckIfBetweenTwoNumbersThatAddUpTo10ThereAre3QuestionsMarks() {
    let input = questionsMarks("acc?7??sss?3rr1??????5");
    console.assert(true == input, " testCheckIfBetweenTwoNumbersThatAddUpTo10ThereAre3QuestionsMarksfailed");
}


function runAllTests() {
    testCheckIfThereAre3QuestionsMarksBetweenTwoNumbersThatAddUpTo10(),
    testCheckIfBetweenTwoNumbersThatAddUpTo10ThereAre3QuestionsMarks()
    
}

runAllTests();