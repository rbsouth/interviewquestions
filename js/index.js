
onezero = '10'

function stringy(size) {
	for (var i = 0; i < size; i++) {
		console.log(onezero)
		console.log(size[i])
    console.log(onezero) * size/2 //easier to split the number and print 10 than individually print 1 and 0 based on full number
  }
		//print(size.length[i] = '10')
		//console.log(size[i]);
	
}
var number = ['', '', '', '', '']
console.log(number);
stringy(number);
var int = 214620

function reverse(number){
	number = number + '';
	console.log(number);
	numarr = [''];
	for (var i = number.length; i >= 0 ; i--) {//loop backwards to get items in reverse order
		number[i]
		console.log(number[i])
		numarr = [number[i]]//put into array to group together
		console.log(numarr)
	}

	function reverseIntAsArray(int) {
		let numsAsString = int.toString();
		let newArr = [];
		for (var i = numsAsString.length - 1; i >= 0; i--) {
			newArr.push(parseInt(numsAsString[i]));
			}
			return newArr;
		}

		console.log(reverseIntAsArray(378407));


	for (var i = 0; i < number.length; i++) {
		number[i];
		console.log(number[i]);
		numarr = [number[i]];
		console.log(numarr);
	}
	numarr = [number]
	console.log(numarr)

	}
}

reverse(int);

function oneAndZero(count) {
	let stringThingy = '';

}
function checkPalindrome(inputString) {
    newArr = []
    otherArr = []
    for (var i=0; i < inputString.length; i++){
        newArr.push(inputString[i]);
      }
    for (var p=inputString.length -1; p>=0; p--){
        otherArr.push(inputString[p]);
      }
      otherArr.toString();
      newArr.toStriing();
      console.log(newArr);
      console.log(otherArr);
    if (newArr === otherArr){
        return true
    }else{
        return false
    }
}
console.log(checkPalindrome('abba'));
