
const btn = document.getElementById('buttonText')

btn.addEventListener('click', function (){
    
    var dato = document.getElementById('inputText').value; 

    localStorage.setItem('datoGuardado', dato)

    alert('¡Ok, dato guardado!');
});
