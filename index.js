import { guardar_cliente} from './firebase.js'

const amapollaForm = document.getElementById('formulario_amapola');

amapollaForm.addEventListener('submit', (e)=>{ 
    e.preventDefault()
    const nombre  =  amapollaForm["nombre"].value // = task.pago;
    const celular =  amapollaForm["telefono"].value //= task.modelo;
    const correo =  amapollaForm["email"].value
    const fuente =  "Amapolla"
  
    guardar_cliente(nombre,celular,correo,fuente);
    console.log(nombre,celular,correo,fuente);

    setTimeout(function(){

        onclick(
            parent.location='gracias.html'
          )

    }, 2000);
    
      
    
} )

