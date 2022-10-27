let selec = {
    _from: "",
    _to: "",
    _date: "",
    _subject: "",
    _body: ""
}

module.exports.selec = selec

// let correos = {
//     from: "",
//     to: "",
//     date: "",
//     subject: "",
//     body: ""
// }
let correos = []

let setCorreos = (Array) =>{
    correos = Array
}

let getCorreos = ()=>{
    return correos
}

module.exports.correos = correos
module.exports.setCorreos = setCorreos
module.exports.getCorreos = getCorreos