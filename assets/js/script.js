const vehiculo = {
    marca: "PeakAuto",
    modelo: "Goenx",
    motor: {
        tipo: "4 Cilindros",
        bloque: "Aluminio",
        desplazamiento: 1.99,
        fuerza: 6500,
        linea: 6700,
        inyeccion: "Puntos Múltiples",
        /* encendido: "" */
        }
};

let marca = vehiculo.marca;
console.log(marca)
let modelo = vehiculo.modelo;
console.log(modelo);
let tipoMotor = vehiculo.motor.tipo;
console.log(tipoMotor);
let presionMotor = vehiculo.motor.presion ??= undefined; 
console.log(presionMotor)
let bloqueMotor = vehiculo.motor.bloque;
console.log(bloqueMotor);
let desplazamientoMotor = vehiculo.motor.desplazamiento;
console.log(desplazamientoMotor);
let fuerzaMotor = vehiculo.motor.fuerza;
console.log(fuerzaMotor);
let lineaMotor = vehiculo.motor.linea;
console.log(lineaMotor);
let smartMotor = vehiculo.motor.smart ??= undefined; 
console.log(smartMotor)
let inyeccionMotor = vehiculo.motor.inyeccion;
console.log(inyeccionMotor);
let encendidoMotor = vehiculo.motor.encendido ??= undefined; 
console.log(encendidoMotor);





