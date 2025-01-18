heroiMoises("Moises", 9522);

function heroiMoises(nome, lv) {
  console.log(nome + " está no nível " + lv);

  if (lv <= 999) {
    console.log("O herói " + nome + " é Ferro");
  } else if (lv >= 1000 && lv < 2000) {
    console.log("O herói " + nome + " é Bronze");
  } else if (lv >= 2000 && lv < 5000) {
    console.log("O herói " + nome + " é Prata");
  } else if (lv >= 5000 && lv < 7000) {
    console.log("O herói " + nome + " é Ouro");
  } else if (lv >= 7000 && lv < 8000) {
    console.log("O herói " + nome + " é Platina");
  } else if (lv >= 8000 && lv < 9000) {
    console.log("O herói " + nome + " é Ascendente");
  } else if (lv >= 9000 && lv < 10000) {
    console.log("O herói " + nome + " é Imortal");
  } else if (lv >= 10000) {
    console.log("O herói " + nome + " é Radiante");
  }
}