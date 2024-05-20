const submitDetails = () => {
    // alert('yes i am working')
    if(matricNo.value == "" || passwordKey.value == ""){
        document.getElementById('errorMsg').style.display = "block"
    }else{
        document.getElementById('errorMsg').style.display = "none"
        document.getElementById('successMsg').style.display = "block"
    
    }
}