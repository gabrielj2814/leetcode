function isValid(s: string): boolean {
    let respuesta:boolean = false;
    let caracteres = {
        "(" : ")",
        "[" : "]",
        "{" : "}",
    }
    for (let index = 1; index < s.length; index++) {
        const caracterCadena = s[index];
        console.log(caracterCadena)
        if(caracteres[caracterCadena]===undefined){
            const caracterCadenaAnterior = s[index - 1];
            if(caracteres[caracterCadenaAnterior] === caracterCadena){
                respuesta=true
            }
            else{
                respuesta=false
                break;
            }
        }
    }
    return respuesta;
};

let cadena:string = "()[]{}"
console.log(isValid(cadena))