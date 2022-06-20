console.log('hi')
let developers = [
  {
    nick: "5opka",
    rule: "Дизайнер"
  },
  {
    nick: "MrVikindog",
    rule: "Web разработчик"
  },
  {
    nick: "Notch",
    rule: "Ноунейм"
  }
];

for (var val in developers) {
  let card = document.createElement("div")
  card.classList.add("devs__card")
  card.innerHTML = '<div class="devs__profil"><img src="https://mineskin.eu/armor/bust/'+developers[val].nick+'/100.png" alt="5opka"></div> <div class="devs__name">Don</div> <div class="devs__rule">Дизайнер</div>'
  document.querySelector(".devs__container").appendChild(card)
}