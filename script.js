const submit=document.querySelector("#calcular-input"),texto=document.querySelector("#texto");function calcular(){const a=document.querySelector("#name").value.trim(),b=parseFloat(document.querySelector("#height").value),c=parseFloat(document.querySelector("#weight").value);if(a&&!isNaN(b)&&!isNaN(c)){const a=(c/b**2).toFixed(2);texto.innerHTML=`IMC: ${a}`}else alert("Preencha todos os campos corretamente.")}submit.addEventListener("click",calcular);