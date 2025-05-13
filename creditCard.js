/**TO DO
 * Obsucre Credit Card # - except last 4
 * test to make sure fucntion obscures digits
 * b/w 12 - 16 (last 4 seen)
 * create module thyat takes in values / checks #'s -> retrun a string?
 * use a for loop
 * push to array | slice | use ** for hidden #'s
 * export module for test ref.
 */

function hiddenCardNums(cardNums) {
  //chck length | validate
  if (cardNums.length < 12 || cardNums.length > 16) {
    return "Not valid Card Number - try again...";
  }
  //   else pass onto next - take length | slice last 4#'s +obscure rest
  else {
    const shown = cardNums.slice(-4);
    // total length - the last 4#'s
    const hidden = "*".repeat(cardNums.length - 4);
    return hidden + shown;
  }
}

// export moduel to ref. durign test--
module.exports = hiddenCardNums;
