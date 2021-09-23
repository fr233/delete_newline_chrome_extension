function updateClipboard(newClip) {
  navigator.clipboard.writeText(newClip).then(function() {

  }, function() {
    console.log("write clipboard failed");
  });
}

function remove_newline_and_set(text){
    text = text.replace(/[\r\n]/g,"");
    updateClipboard(text);
}

document.addEventListener('paste', function(e) {
    navigator.clipboard.readText().then(text => remove_newline_and_set(text));
});