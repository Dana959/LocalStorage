document.addEventListener('DOMContentLoaded', function(){

    var datoGuardado = localStorage.getItem('datoGuardado');
    document.getElementById('data').textContent = datoGuardado;
    });