function toggle(source) {
  checkboxes = document.getElementsByName('users-permission');
  for(var i=0, n=checkboxes.length;i<n;i++) {
    checkboxes[i].checked = source.checked;
  }
}

// Connection File Type
$(document).on('change', '.div-toggle', function() {
  var target = $(this).data('target');
  var show = $("option:selected", this).data('show');
  $(target).children().addClass('hide');
  $(show).removeClass('hide');
});
$(document).ready(function(){
	$('.div-toggle').trigger('change');
});

// Change Profile
var triggerUpload = document.getElementById('triggerUpload'),
    upInput = document.getElementById('filePicker'),
    preview = document.querySelector('.preview');

//force triggering the file upload here...
triggerUpload.onclick = function() {
  upInput.click();
};


upInput.onchange = function(e) {

  var uploaded = this.value,
      ext = uploaded.substring(uploaded.lastIndexOf('.') + 1),
      ext = ext.toLowerCase(),
      fileName = uploaded.substring(uploaded.lastIndexOf("\\") + 1),
      accepted = ["jpg", "png", "gif", "jpeg"];
  
  /*
    ::Add in blank img tag and spinner
    ::Use FileReader to read the img data
    ::Set the image source to the FileReader data
  */
  function showPreview() {
      preview.innerHTML = "<div class='loadingLogo'></div>";
	    preview.innerHTML += '<img id="img-preview" />';
	    var reader = new FileReader();
	    reader.onload = function () {
	        var img = document.getElementById('img-preview');
	        img.src = reader.result;
	    };
	    reader.readAsDataURL(e.target.files[0]);
      preview.removeChild(document.querySelector('.loadingLogo'));
      document.querySelector('.fileName').innerHTML = fileName + "<b> Uploaded!</b>";
  };
  
  //only do if supported image file
  if (new RegExp(accepted.join("|")).test(ext)) {
    showPreview();
  } else {
    preview.innerHTML = "";
    document.querySelector('.fileName').innerHTML = "Hey! Upload an image file, not a <b>." + ext + "</b> file!";
  }
  
}
