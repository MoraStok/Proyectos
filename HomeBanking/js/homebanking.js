//Declaración de variables
var nombreUsuario = "Mora Stok";
var codSeguridad = 1234;
var saldoCuenta = 5000;
var limiteExtraccion = 2000;
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;
var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML
cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();
iniciarSesion();

//Funciones que tenes que completar
function sumarDinero (cantDinero){
    var cantDinero;
    saldoCuenta += cantDinero;
}

function restarDinero (cantDinero){
    var cantDinero;
    saldoCuenta -= cantDinero;
}

function cambiarLimiteDeExtraccion() {
    var saldoAnt = saldoCuenta;
    var StringLimite = prompt("Ingrese el nuevo límite de extracción:");
    limiteExtraccion = StringLimite;
    actualizarLimiteEnPantalla();
    alert("El límite de extracción ha cambiado a: " + limiteExtraccion);
    
}

function hayDineroSuficiente(cantDinero){
    let result = parseInt(cantDinero);
    if(cantDinero > saldoCuenta){
            alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero.");
            return false;
    }
    return true;
}

function excedeLimite(cantDinero){
    let result = parseInt(cantDinero);
    if (cantDinero > limiteExtraccion){
            alert("Se ha excedido el límite de extracción.");
            return false;
    }
    return true;
}

function validarBillete(cantDinero){
    let result = parseInt(cantDinero);
    if(cantDinero %= 100){
            alert("Sólo se pueden extraer billetes de $100.");
            return false;
    }
    return true;
}

function validarCampo(campo){
    let result = parseInt(campo);
    if (isNaN(result)){
        return false;
    }
    return true;
}

//Ver qué pasa que ahora no me hace la resta.
function extraerDinero() {
    var saldoAnt = saldoCuenta;
    var StringcantDinero = prompt("Ingrese el monto que quiere extraer:");
    var cantDinero = parseInt(StringcantDinero);
    if (validarCampo(cantDinero) == false){
        StringcantDinero = prompt("No ingresó un valor válido. Ingrese el monto que quiere extraer:");
        cantDinero = parseInt(StringcantDinero);
    }else{
        if(validarBillete(cantDinero) == true && hayDineroSuficiente(cantDinero) == true && excedeLimite(cantDinero) == true){
            restarDinero(cantDinero);
            actualizarSaldoEnPantalla();
            alert("Se ha extraído: " + cantDinero + "\nSaldo anterior: " + saldoAnt + "\nSaldo actual: " + saldoCuenta); 
        }
    }
}

function depositarDinero() {
    var saldoAnt = saldoCuenta;
    var StringcantDinero = prompt("Ingrese el monto que quiere depositar:");
    var cantDinero = parseInt(StringcantDinero);
    if (validarCampo(cantDinero) == false){
        StringcantDinero = prompt("No ingresó un valor válido. Ingrese el monto que quiere depositar:");
        cantDinero = parseInt(StringcantDinero);
    }else{
    sumarDinero(cantDinero);
    actualizarSaldoEnPantalla();
    alert("Se ha depositado: " + cantDinero + "\nSaldo anterior: " + saldoAnt + "\nSaldo actual: " + saldoCuenta);
    }
}

function pagarServicio() {
    var saldoAnt = saldoCuenta;
    var Stringservicio = prompt("Ingrese el número que corresponda con el servicio que desea pagar: \n1. Agua\n2. Luz\n3. Internet\n4. Teléfono");
    var servicio = parseInt(Stringservicio);
    switch(servicio){
        case 1: if(saldoCuenta > agua){
            saldoCuenta = saldoCuenta - agua;
            alert("Has pagado el servicio Agua.\nSaldo Anterior: " + saldoAnt + "\nDinero descontado: " + agua + "\nSaldo Actual: " + saldoCuenta);
            actualizarSaldoEnPantalla();
        }else{
            alert("No hay suficiente saldo en tu cuenta para pagar este servicio.")
        }
        break;
        case 2: if(saldoCuenta > luz){
            saldoCuenta = saldoCuenta - luz;
            alert("Has pagado el servicio Luz.\nSaldo Anterior: " + saldoAnt + "\nDinero descontado: " + luz + "\nSaldo Actual: " + saldoCuenta);
            actualizarSaldoEnPantalla();
        }else{
            alert("No hay suficiente saldo en tu cuenta para pagar este servicio.")
        }
        break;
        case 3: if(saldoCuenta > internet){
            saldoCuenta = saldoCuenta - internet;
            alert("Has pagado el servicio Internet.\nSaldo Anterior: " + saldoAnt + "\nDinero descontado: " + internet + "\nSaldo Actual: " + saldoCuenta);
            actualizarSaldoEnPantalla();
        }else{
            alert("No hay suficiente saldo en tu cuenta para pagar este servicio.")
        }
        break;
        case 4: if(saldoCuenta > telefono){
            saldoCuenta = saldoCuenta - telefono;
            alert("Has pagado el servicio Teléfono.\nSaldo Anterior: " + saldoAnt + "\nDinero descontado: " + telefono + "\nSaldo Actual: " + saldoCuenta);
            actualizarSaldoEnPantalla();
        }else{
            alert("No hay suficiente saldo en tu cuenta para pagar este servicio.")
        }
        break;
        default: alert("El número ingresado no pertenece a un servicio.")
    }
}

function transferirDinero() {
    var StringCant = prompt("Ingrese el monto que desea transferir: ");
    var transfer = parseInt(StringCant);
    if (validarCampo(transfer) == false){
        StringCant = prompt("No ingresó un valor válido. Ingrese el monto que desea transferir:");
        transfer = parseInt(StringCant);
    }else{
        if (transfer > saldoCuenta){
            alert("La cantidad que desea transferir excede su saldo actual.");
            StringCant = prompt("Ingrese el monto que desea transferir: ");
            transfer = parseInt(StringCant);
        }
        var StringCuenta = prompt("Ingrese el número de cuenta al que desea transferir: ");
        var cuenta = parseInt(StringCuenta);
        if(cuenta != cuentaAmiga1 && cuenta != cuentaAmiga2){
            StringCuenta = prompt("Sólo se puede transferir a cuentas asociadas. Ingrese nuevamente el número de cuenta: ");
            cuenta = parseInt(StringCuenta);
        }
        restarDinero(transfer);
        actualizarSaldoEnPantalla();
        alert("Se han transferido: " + transfer + "\nCuenta destino: " + cuenta);
    }
}

function iniciarSesion() {
    var Stringcodigo = prompt("¡Bienvenido/a! Por favor, ingrese el código de su cuenta: ");
    var codigo = parseInt(Stringcodigo);
    var i = 0;
    while(codigo != codSeguridad && i <= 2){
        if(i < 2){
            Stringcodigo = prompt("Código incorrecto. Vuelva a ingresar el código:");
            codigo = parseInt(Stringcodigo);
            i++;
        }else if(i == 2){
            alert("Código incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad.");
        }
    }
    if(codigo == codSeguridad){
        alert("Bienvenido/a " + nombreUsuario + ", ya puedes comenzar a realizar operaciones.");
    }
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}

