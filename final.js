// JavaScript Document
function submitform9()
{
	var J = document.myform.jersey.value;
	var S = document.myform.stocks.value;
	var s = document.myform.shoes.value;
	var c = J*100 + S*150 + s*200;
	
	document.myform.result.value = "Your total cost is $" + c;
}



