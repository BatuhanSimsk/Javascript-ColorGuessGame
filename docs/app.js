var index = null;

function main()
{
	document.getElementById("result").innerHTML="Result:";
	
	var arr = [0,1,2,3,4,5,6,7,8];
	var r= Math.floor((Math.random())*256);
	var g=Math.floor((Math.random())*256);
	var b=Math.floor((Math.random())*256);

	document.getElementById("colorName").innerHTML="(Red: "+r+" / Green: "+g+" / Blue: "+b+")";

    // If there is no current index, select a new one
    if (index === null) {
        index = Math.floor((Math.random())*9);
    }

    for(i=0;i<9;i++)
	{
		var red=Math.floor((Math.random())*256);
		var green=Math.floor((Math.random())*256);
		var blue=Math.floor((Math.random())*256);
		document.getElementById(arr[i]).style.backgroundColor= "rgb("+red+" ,  "+green+" ,  "+blue+")";
        if (i === index) {
            document.getElementById(arr[i]).style.backgroundColor= "rgb("+r+" ,  "+g+" ,  "+b+")";
        }
	}
}

function choice()
{
	if(document.activeElement.id==index)
	{
		document.getElementById("result").innerHTML="Result: Correct.";
	}

	else
	{
		document.getElementById("result").innerHTML="Result: Wrong.";
	}
}

function replay()
{
	window.location.reload();
}