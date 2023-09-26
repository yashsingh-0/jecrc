function validateForm()
{
	if (document.getElementById('department').value == "0") {
                alert("Please Select Department ");
                document.getElementById('department').focus();
				return false;
            }
}