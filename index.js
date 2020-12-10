function nothingIsNothing() {
return [...arguments].every(x => x)
}

function nothingIsNothing(){
return [...arguments].every(x => Boolean(x))
}


function modifyLast(str, n) {
	return str + str.slice(-1).repeat(n - 1)
}

function modifyLast(str, n) {
	for (i = 1; i < n; i++) {
		 str += str.substr(-1)
	}
	return str
}

function modifyLast(str, n) {
	let last = str.charAt(str.length-1).repeat(n-1)
	return str + last;
}

function findDigitAmount(num) {
	return num.toString().length;
}

let filterArray = a => a.filter(x=> x % 1 == 0);

function filterArray(arr){
	return arr.filter(el => Number.isInteger(el));
}

const filterArray = arr => arr.filter(Number.isInteger);

function filterArray(arr) {
	return arr.filter(number => Number.isInteger(number))
}

function limitNumber(num, rangeLow, rangeHigh) {
	if(num >= rangeLow && num<=rangeHigh) return num ;
	if(num > rangeHigh) return rangeHigh;
		if(num < rangeLow) return rangeLow ; 	
}

function limitNumber(num, rangeLow, rangeHigh) {
	return Math.max(rangeLow, Math.min(num,rangeHigh))
}

function limitNumber(num, rangeLow, rangeHigh) {
  if(rangeLow>num) {return rangeLow
  } else if(rangeHigh<num) {return rangeHigh}
  else {return num}
}

function firstOne(a = 0, b = 0, c = 0, d = 0) {
	if (a){
		return a;
	}else if (b){
		return b;
}else if (c){
		return c;
}else if (d){
		return d;
}else{
		return "not found";
}
}

function countWords(str) {
	return  str.split(" ").length;
}

function secret(text) {
	arr = text.split('*');
	str="";
	for(i=0;i<parseInt(arr[1]);i++){
		str+="<"+arr[0]+"></"+arr[0]+">";
	}
	return str;
}

function secret(text) {
	let arr = text.split('*');
	return `<${arr[0]}></${arr[0]}>`.repeat(arr[1]);
		
}

const secret = text => {
	const [a, b] = text.split`*`;
	return `<${a}></${a}>`.repeat(b);
}

function secret(text) {
  const split = text.split('*');
	const pat = split[0];
	const num = split[1];
	const num1 = parseInt(num);
	const point = '<' + pat + '>' + '<' + '/' + pat + '>';
	return(point.repeat(num1))
}

function secret(text) {
  let elm= text.split('*')
  return `<${elm[0]}></${elm[0]}>`.repeat(+elm[1])
}

function eq(evaluate) {
	return eval(evaluate);
}

function lastItem(input) {
		return input.slice(-1)[0];
}


function sortWord(word) {
	return word.split('').sort().join('');
}

function scoreCalculator(e, m, h) {
	if(e>=0 && m>=0 && h>=0){
		return ((e*5) + (m*10) + (h*20));
	}else{
		return "invalid";
	}	
}

function scoreCalculator(a, b, c) {
	return (a < 0 || b < 0 || c < 0) ? "invalid" : a*5 + b*10 + c*20;
}
function scoreCalculator(e, m, h) {
	if(e>=0 && m>=0 && h>=0){
		return ((e*5) + (m*10) + (h*20));
	}else{
		return "invalid";
	}
	
}
function scoreCalculator(easy, med, hard) {
	if (easy < 0 || med < 0 || hard < 0) {
		return "invalid";
	} else {
		return easy*5 + med*10 + hard*20;
	}
}
function scoreCalculator(easy, med, hard) {
	if ((Math.sign(easy) === -1)||(Math.sign(med) === -1)||(Math.sign(hard) === -1))
        return "invalid"
    return easy * 5 + med * 10 + hard * 20
}