function validateForm()
{
	if (document.getElementById('regnum').value == "0") {
                alert("Please Insert Your Registration Number ");
                document.getElementById('regnum').focus();
				return false;
            }

	if (document.getElementById('datum1').value == "") {
                alert("Please Select Your Date Of Birth");
                document.getElementById('datum1').focus();
				return false;
            }
	    	
}