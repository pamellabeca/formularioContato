function validateForm(event) {
    event.preventDefault();
  
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("menssage").value;
  
    if (name === "" || email === "" || message === "") {
      alert("Por favor, preencha todos os campos.");
      return false;
    }
  
    
    document.getElementById("form").submit();
}
  
  document.getElementById("form").addEventListener("submit", validateForm);