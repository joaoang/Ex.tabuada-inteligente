function calcular () {

    var numero = document.getElementById('box.numero')
    var res = document.getElementById('res')
    var n = Number(numero.value)
    var sequencia = 0
    

    if (n < 0 ) {
       window.alert ('Prenencha corretamente os dados. Mínimo é zero.')
    }

    else {
        res.innerHTML = null
        while ( sequencia <= 10 ) {
            res.innerHTML += (` ${sequencia} x ${n} = ${sequencia*n} <br> ` )
            sequencia = sequencia + 1
        }
    }   
}







