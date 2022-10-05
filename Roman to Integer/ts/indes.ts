function romanToInt(s: string): number {
    // TODO: falta que puedas hacer la resta entre las letras teniendo en cuanta la letra anterior
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
    for (let index = 0; index < s.length; index++) {
        const letra = s[index];
        if(letraAnterior!==""){
            let ultimaPosicionLista = numeros.length -1
            if(letra===letraAnterior){
                numeros[ultimaPosicionLista] = numeros[ultimaPosicionLista] + numerosRomanos[letra]
            }
        }
        else{
            numeros.push(numerosRomanos[letra])
        }
        letraAnterior=letra
    }
    console.log(numeros)
    return 1
};

let s:string = "MCMXCIV"
console.log(romanToInt(s))