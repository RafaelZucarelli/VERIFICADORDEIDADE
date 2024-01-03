function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert ('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ' '
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked ){
            gênero = 'Homem'
            if (idade >= 0 && idade <10 ){
                //CRIANÇA
                img.setAttribute('src', 'babyh.png')
            } else if (idade >= 10 && idade < 21){
                // Jovem HOMEM
                img.setAttribute('src', 'jovemh.png')
            } else if ( idade < 50) {
                //Adulto HOMEM
                img.setAttribute('src', 'homem.png')
            } else {
                // IDOSO
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade <10 ){
                //CRIANÇA
                img.setAttribute('src', 'babym.png')
            } else if (idade >= 10 && idade < 21){
                // Jovem MULHER
                img.setAttribute('src', 'jovemm.png')
            } else if ( idade < 50) {
                //Adulto MULHER
                img.setAttribute('src', 'mulher.png')
            } else {
                // IDOSA 
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}
