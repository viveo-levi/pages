var password = document.getElementById("password");

function genPassword() {
   let chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   let pwordLength = 20;
   let password = '';

   const array = new Uint32Array(chars.length);
   window.crypto.getRandomValues(array);

   for (let i = 0; i < pwordLength; i++) {
     password += chars[array[i] % chars.length];
   }
        document.getElementById("password").value = password;
 }

function copyPassword()
  {
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");  
  alert("Senha copiada para sua área de transferência!")
  }