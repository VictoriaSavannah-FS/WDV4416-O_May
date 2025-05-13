// import function
const hiddenCardNums = require("./creditCard");

// 1) Test valid Test - range 16 w/ last 4 #'s hidden
test("hides the last 4 digits of a card number", () => {
  expect(hiddenCardNums("1234567890121416")).toBe("************1416");
});

//2) Test invalid Card # range - too short

test("the card number length is less than 12 digits", () => {
  expect(hiddenCardNums("123456789")).toBe(
    "Not valid Card Number - try again..."
  );
});

// 3) Test invalid Card #  range - too long

test("Invalid Card Number: length is more than 16 digits ", () => {
  expect(hiddenCardNums("123456789012141618")).toBe(
    "Not valid Card Number - try again..."
  );
});
// 4) Valid card number length of 12

test("hides the last 4 digits of a card number", () => {
  expect(hiddenCardNums("123456789012")).toBe("********9012");
});

// 5) Valid card number length of 15
test("hides the last 4 digits of a card number", () => {
  expect(hiddenCardNums("123456789012141")).toBe("***********2141");
});
