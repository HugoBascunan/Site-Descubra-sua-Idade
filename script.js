function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txano')
   var res = document.getElementById('res')
   if (fano.value.length == 0 || fano.value > ano) {
       window.alert('Digite um ano válido.')
   } else {
       var sexo = document.getElementsByName('sexo')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (sexo[0].checked) {
           genero = 'Homem'
           if (idade >=0 && idade <10) {
                img.setAttribute('src', 'criancahomem.jpg')
           } else if (idade < 21){
                img.setAttribute('src', 'jovemhomem.jpg')
           } else if (idade < 50) {
                img.setAttribute('src', 'adultohomem.jpg')
           } else if (idade>=50) {
                img.setAttribute('src', 'idosohomem.jpg')
           }
        } else if (sexo[1].checked){
           genero = 'Mulher'
           if (idade >=0 && idade <10) {
                img.setAttribute('src', 'criancamulher.jpg')
            } else if (idade < 21){
                img.setAttribute('src', 'jovemmulher.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adultomulher.jpg')
            } else if (idade>=50){
                img.setAttribute('src', 'idosamulher.jpg')
            }
        }
        res.style.textAlign = 'center'    
        res.innerHTML = `Você é ${genero} com ${idade} anos.`
        
        res.appendChild(img)
        
        
       }
   }
 