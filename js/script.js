var v_load = document.getElementById("upload");
v_load.onchange = function()
{	
	var cover_box = document.getElementById("cover");
	cover_box.style.backgroundImage = "url('images/load.gif')";
	var reader = new FileReader();
	reader.readAsDataURL(v_load.files[0]);
	reader.onload = function()
	{
		var url = reader.result;
		var player = document.getElementById("video");
		player.src=url;

		if(player.src != "")
		{
			cover_box.style.display = "none";
		}
	}

}
