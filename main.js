alert("Vamos a pedirte un par de datos para calcular el consumo de tu auto y que modelos tienen consumo similar, los cuales seran mostrados en consola. Referencia: Se considera dentro de la media consumos entre 8L y 10L cada 100 km mediante la funcion comparaConsumo()");



const listaAutos = [
    { nombre: "Toyota RAV4", consumo: 6 },
    { nombre: "Citroën C-Elysee", consumo: 6 },
    { nombre: "Ford Mondeo", consumo: 7 },
    { nombre: "Chevrolet Onix", consumo: 7 },
    { nombre: "VW UP!", consumo: 7 },
    { nombre: "Fiat Mobi", consumo: 7 },
    { nombre: "Toyota Yaris", consumo: 8 },
    { nombre: "Puegeot 2008", consumo: 8 },
    { nombre: "Ford Ecoesport", consumo: 9 },
    { nombre: "Ford Ka", consumo: 9 },
    { nombre: "Fiat Tipo", consumo: 9 },
    { nombre: "Renault Capture", consumo: 10 },
    { nombre: "Nissan Frontiere", consumo: 10 },
    { nombre: "Kia Karnivale", consumo: 10 },
    { nombre: "Ford Ranger Raptor", consumo: 11 },
    { nombre: "Fiat Toro", consumo: 11 },
    { nombre: "Jeep Compass", consumo: 11 },
    { nombre: "Haval H6", consumo: 12 },

];

function comparaConsumo() {
    let kmRecorrido = parseInt(prompt("Cuántos kilometros recorriste con el tanque lleno? Ingrese número  "));
    if (Number(kmRecorrido) == kmRecorrido) {
        console.log(`Usted Ingreso que recorrió ${kmRecorrido} km`);
    } else {
        alert("Vuelva a intentarlo ingresando un dato válido (número)")
        return false;
    }


    let capacidadTanque = parseInt(prompt("Cuál es la capacidad de tu tanque en litros . Ingrese Número "));
    if (Number(capacidadTanque) == capacidadTanque) {
        console.log(`Usted Ingreso que la capacidad de su tanque es ${capacidadTanque} litros`);
    } else {
        alert("Vuelva a intentarlo ingresando un dato válido (número)")
        return false;
    }


    let consumoCombustible = parseInt((capacidadTanque / kmRecorrido) * 100);
    console.log(`Tu consumo es de ${consumoCombustible} litros cada 100 km aproximadamente`);

    if (consumoCombustible > 10) {
        let filtraPorConsumo = listaAutos.filter(cons => cons.consumo > 10)
        console.log("Vehículos con consumo dentro de tu rango. Se considera por encima de la media consumo mayor a 10 L c/100 km");
        console.log(filtraPorConsumo);

    }

    else if (consumoCombustible <= 10 && consumoCombustible >= 8) {
        let filtraPorConsumo = listaAutos.filter(cons => cons.consumo <= 10 && cons.consumo >= 8)
        console.log("Vehículos con consumo dentro de tu rango. Se consideran vehículos con consumo estandar aquellos que se encuentren entre los 8L y 10L c/100 km");
        console.log(filtraPorConsumo);

    }

    else {

        let filtraPorConsumo = listaAutos.filter(cons => cons.consumo < 8);
        console.log("Vehículos con consumo dentro de tu rango. Tu vehículo se encuentra dentro de lo que se considera excelente consumo (menor a 8 listos c/100km)");
        console.log(filtraPorConsumo);




    }


}






