const submitDetails = () => {
    // alert('yes i am working')
    if(matricNo.value == "" || passwordKey.value == ""){
        document.getElementById('errorMsg').style.display = "block"
    }
}