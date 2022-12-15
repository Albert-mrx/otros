const jefe = 5000;
const analista = 4000;
const programador = 3000;
const soporte = 2000;
const asistente = 1500;
class empleado{
            id ;
            nombre ;
            apellido ;
            correo ;
            cargo ;
        sueldoBruto(){
            if(this.cargo=="jefe"){
                return jefe;
            }else if(this.cargo=="analista"){
                return analista;
            }else if(this.cargo=="programador"){
                return programador;
            }else if(this.cargo=="soporte"){
                return soporte;
            }else if(this.cargo == "asistente"){
                return asistente;
            }
        }
        descuento(){
            let sueldobruto=this.sueldoBruto();
            let descuento =(sueldobruto*12.5)/100;
            return descuento;
        }
        sueldoNeto(){
            let descuento = this.descuento();
            let sueldoBruto = this.sueldoBruto();
            let total = sueldoBruto-descuento;
            return `el sueldo neto es : s/${total}`;
        }
}
let user = new empleado();


user.id = prompt("ingrese id");
user.nombre= prompt("ingrese nombre");
user.apellido = prompt("ingrese apellido");
user.correo = prompt("ingrese correo");
user.cargo = prompt("ingrese cargo");

alert(user.sueldoNeto());

// let usuario={nombre:"kevin"}
// console.log(usuario.nombre="perez");

