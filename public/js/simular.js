
function simular() {
  var altura = input_altura.value;
  var peso = input_peso.value;
  var time = input_time.value;
  var lado = input_lado.value;
  var posicao = "";

  

  if (lado == "Ataque" && altura <= 180 && peso > 75 & peso <= 100) {
    div_resultado.innerHTML = `Você poderia ser um Running Back no ${time} <br> ${`<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9cb80194-325f-4e96-911c-c893f69df724/dcuo9h1-58e44c14-98c9-47c4-85ee-60cf7da47259.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzljYjgwMTk0LTMyNWYtNGU5Ni05MTFjLWM4OTNmNjlkZjcyNFwvZGN1bzloMS01OGU0NGMxNC05OGM5LTQ3YzQtODVlZS02MGNmN2RhNDcyNTkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9DJnEP9k7YWiZZnCnjb2hyPKNPC8xyufCLv3wx2_6dY" style="width: 350px; height: 370px">`}`;
    posicao = "Running Back";
  }

  if (lado == "Ataque" && altura > 180 && peso < 100) {
    div_resultado.innerHTML = `Você poderia ser um Wide Receiver no ${time} ${`<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP9FFSDhkkcMjgBYGJGOwhhIVBRqiDkvNR8g&usqp=CAU" style="width: 350px; height: 370px">`}`
    posicao = "Wide Receiver";
  }

  if (lado == "Ataque" && altura >= 188 && peso < 100) {
    div_resultado.innerHTML = `Você poderia ser um Quaterback no ${time} ${`<img src="https://cdn.vox-cdn.com/thumbor/IpeIGC-S2bdLKmSugYj4PlrNGRY=/0x0:5000x3334/1200x800/filters:focal(1892x660:2692x1460)/cdn.vox-cdn.com/uploads/chorus_image/image/70393375/usa_today_17444321.0.jpg" style="width: 350px; height: 370px">`}`
    posicao = "Quaterback";
  }

  if (lado == "Ataque" && altura >= 188 && peso > 100) {
    div_resultado.innerHTML = `Você poderia ser um jogador de linha no ${time} ${`<img src="https://cdn.vox-cdn.com/thumbor/JQhDh3qxZ7hE7rAN0YHpp0ZTQOw=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23760829/1340804833.jpg" style="width: 350px; height: 370px">`}`
    posicao = "OL";
  }

  if (lado == "Defesa" && altura < 182 && peso < 100) {
    div_resultado.innerHTML = `Você poderia ser um Safety no ${time} ${`<img src="https://e1.pxfuel.com/desktop-wallpaper/681/905/desktop-wallpaper-earl-thomas-highlights-earl-thomas.jpg" style="width: 350px; height: 370px">`}`
    posicao = "Safety";
  }

  if (lado == "Defesa" && altura >= 182 && peso < 100) {
    div_resultado.innerHTML = `Você poderia ser um Corner Back no ${time} ${`<img src="https://static.clubs.nfl.com/image/private/t_new_photo_album/rams/gcu1ae8xtioawnodncsr.jpg" style="width: 350px; height: 370px">`}`
    posicao = "Corner Back";
  }

  if (lado == "Defesa" && altura > 185 && peso >= 100) {
    div_resultado.innerHTML = `Você poderia ser um LineBacker no ${time} ${`<img src="https://wallpapercave.com/wp/wp11922920.jpg" style="width: 350px; height: 370px">`}`
    posicao = "LineBacker";
  }

  if (lado == "Defesa" && altura > 190 && peso >= 110) {
    div_resultado.innerHTML = `Você poderia ser um Defensive Line no ${time} ${`<img src="https://wallpaperaccess.ir/upload/picture-518/wp3809394.jpg" style="width: 350px; height: 370px">`}`
    posicao = "Defensive Line";
  }


  fetch("/simular", {
    method:"POST",
    headers: {
      "Content-Type": "application/json", 
    },
    body: JSON.stringify({
      posicaoServer: posicao,
      timeServer: time
    })
  })
  resetarGrafico();
}
