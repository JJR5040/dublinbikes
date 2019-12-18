function joined() {
    window.alert("Sign up successful!");
}

function joinup() {
    var n=document.getElementsByName("name");

    for(i = 0; i < n.length; i++){
        if(n[i].value.length === 0) {
            i=n.length + 1;
            var b = i;
        }
    }

    if(b === n.length + 1) {
        window.alert("Please fill all text boxes.");
    }
}