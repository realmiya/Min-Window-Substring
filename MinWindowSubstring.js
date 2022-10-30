Min Window Substring//
function MinWindowSubstring(strArr) { 
	let Nstr = strArr[0];
	let Kneedle = strArr[1].split('');
	//start with the smallest possible substring字串, then go up

	for (let i = Kneedle.length, len = Nstr.length; i <= len; i++ ) {
		for (j = 0; j <= len - i; j++) {
			let mySlice = Nstr.substr(j, i);//此处如果第二个参数的value是i，必须用substr， 而不是substring， substr第二个参数表示length
      let mySlice = Nstr.substring(j, j+i);//substring的第二个参数表示index

			if (isContained(mySlice)) {
				return mySlice;
			}
		}
	}
	return 'Not in string';
// ---------------------- helpers -----------------------------
//isContained checks to see if all the chars in the Kneedle are in the given string
	function isContained(mySlice) {
		let arr = mySlice.split('');
   
		for (let i = 0, len = Kneedle.length; i < len; i++) {
			let place = arr.findIndex(val => {
				return val === Kneedle[i]
			});
			if (place === -1) {
				return;
			} else {
        //  console.log(arr);
				arr.splice(place, 1);//为了保证找到的字串里contain kstr里面相同数量的字母
        //  console.log(arr);
			}
		}
		return true;
	}
}
console.log(MinWindowSubstring(readline()));
