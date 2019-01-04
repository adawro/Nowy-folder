function stringlength(str)
{ 
if(str.length<2 || str.length> 10)
{ 
return false;
}
else
{ 
return true;
}
}

function validation(form)
{
	if(stringlength(form.elements["text1"].value))
	{
		alert('Your userid have accepted.');
	}
	else
	{
		alert("Please input the userid between " +2+ " and " +10+ " characters");
	}
}