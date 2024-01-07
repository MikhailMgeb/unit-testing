function checkBrackets(inputBracketsString: string): boolean {
  const openedBrackets = ['[', '{', '('];
  const closedBrackets = [']', '}', ')'];
  const bracketsStack: string[] = [];
  const bracketsArray = Array.from(inputBracketsString);

  for (let i = 0; i < bracketsArray.length; i += 1) {
    bracketsStack.push(bracketsArray[i]);
    const prevBracketIndex = bracketsStack.length - 2;
    const curBracketIndex = bracketsStack.length - 1;

    if (closedBrackets.includes(bracketsStack[curBracketIndex])
          && openedBrackets.indexOf(bracketsStack[prevBracketIndex])
        === closedBrackets.indexOf(bracketsStack[curBracketIndex])
    ) {
      bracketsStack.splice(prevBracketIndex, 2);
    }
  }

  if (bracketsStack.length === 0) {
    return true;
  }
  return false;
}

checkBrackets('[]{](}');

export { checkBrackets };
