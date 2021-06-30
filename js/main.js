function toggle(source) {
  checkboxes = document.getElementsByName('users-permission');
  for(var i=0, n=checkboxes.length;i<n;i++) {
    checkboxes[i].checked = source.checked;
  }
}

function toggle(source) {
  checkboxes = document.getElementsByName('environment-permission');
  for(var i=0, n=checkboxes.length;i<n;i++) {
    checkboxes[i].checked = source.checked;
  }
}
