function writeCards(names, giftType) {
  let newArray = [];

  for (let i = 0; i < names.length; i++) {
    newArray.push(`Thank you, ${names[i]}, for the wonderful ${giftType} gift!`)
  }

  return newArray;
}
function countDown() {

  for (let countDown = 10; countDown >= 0; countDown--) {
    console.log(countDown);
  }

}
    