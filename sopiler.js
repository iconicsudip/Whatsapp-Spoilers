function spoiler(){
    var warning = document.getElementById("warning").value;
    var message = document.getElementById("message").value;
    if(document.getElementById("checkbox").checked){
        var spoiler_message = warning + ' ' + ' '.repeat(2575) + message;
    }else{
        var spoiler_message = warning + ' ' + '\u200B'.repeat(4000) + message;
    }
    document.getElementById('Afterenter').innerText = "This is your spoil message";
    document.getElementById('Afterenter1').innerText = "Here it is";
    document.getElementById('spoiler').value = spoiler_message;
}

/*backstyle */
