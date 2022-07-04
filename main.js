
function saveData(){
    swal("Good job!", "You clicked the button!", "success");

let name,email,subject,msg;
name=document.getElementById("name").value;
email=document.getElementById("email").value;
subject=document.getElementById("subject").value;
msg=document.getElementById("msg").value;

localStorage.setItem("name",name)
localStorage.setItem("email",email)
localStorage.setItem("subject",subject)
localStorage.setItem("msg",msg)
  
if (name ==''|| email ==''||subject ==''|| msg =="") {
    swal({
        title: "fields empty!",
        text: "please check the missing fields",
        icon: "warning",
        button:"ok",
      });
}
else{
    swal({
        title: "Thankyou",
        text: "i will get back to you soon",
        icon: "success",
      });
}
}
    