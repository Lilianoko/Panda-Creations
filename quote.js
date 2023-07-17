function sendMail() {
  var params = {
    name: document.getElementsByClassName("text").value ,
    email: document.getElementsByClassName("email").value ,
    tel: document.getElementsByClassName("tel").value ,
    message: document.getElementsByClassName("message").value ,
    
  };
const serviceID ="service_xte36jt";
const templateID ="template_qu0ljh2"

emailjs
.send(serviceID, templateID, params)
.then((res) => {
    document.getElementsByClassName("name").value = "";
    document.getElementsByClassName("emaill").value = "";
    document.getElementsByClassName("tel").value = "";
    console.log(res);
    alert("Your email sent sucessfully");
  })

  .catch((err) => console.log(err));
}