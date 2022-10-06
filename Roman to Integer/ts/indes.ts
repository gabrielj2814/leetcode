function romanToInt(s: string): number {
    const numerosRomanos:any ={
        I:             1,
        V:             5,
        X:             10,
        L:             50,
        C:             100,
        D:             500,
        M:             1000
    }
    let referenciaLetras = {
        V:            "I",
        X:            "I",
        L:            "X",
        C:            "X",
        D:            "C",
        M:            "C"
    }
    let listaLetrasOjito:string[] = ["V","X","L","C","D","M",] 
    let numeros:number[] = []
    let letraAnterior:string = ""
    for (let index:number = 0; index < s.length; index++) {
        const letra = s[index];
        if(letraAnterior!==""){
            let ultimaPosicionLista:number = numeros.length -1
            if(letra===letraAnterior){
                numeros[ultimaPosicionLista] = numeros[ultimaPosicionLista] + numerosRomanos[letra]
            }
            if(letra!==letraAnterior){
                if(referenciaLetras[letra]===letraAnterior){
                    numeros[ultimaPosicionLista] = numerosRomanos[letra] - numeros[ultimaPosicionLista]
                }
                else{
                    numeros.push(numerosRomanos[letra])
                }
            }
        }
        else{
            numeros.push(numerosRomanos[letra])
        }
        letraAnterior=letra
    }
    let acumulador:number = 0
    for (let constador:number = 0; constador < numeros.length; constador++) {
        acumulador=acumulador+numeros[constador]
    }
    return acumulador
};

let s:string = "MCMXCIV"
console.log(romanToInt(s))