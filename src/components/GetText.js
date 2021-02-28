export default () => {
  const texts = [
    "В декабре ударили морозцы. Они застудили холодную землю. Крепким ледком покрылись река и соседний пруд. Ночью выпал чистый белый снег. Деревья и кустарники укрылись хлопьями снега. Заискрились ровные луга. В лесу стало снова нарядно. Старые пни надели на голову пушистые шапки. На полях перестал зябнуть озимый хлеб. Настала зима.",
    "Много разных птиц живёт в наших лесах. Это дрозд, сова, зяблик, соловей, кукушка. Птицы вьют свои гнёзда на сучьях деревьев. Иногда они прячут их в густой траве. Весной и летом щебечут в гнёздах птенцы. Любят птицы густой солнечный лес. Птичьи голоса слышны со всех концов. Хорошо летом птицам в лесу!",
    "Слонёнок, попугай, удав и мартышка жили в Африке. Каждый день они собирались вместе. Мартышка пела смешные песенки. Удав, слонёнок и попугай слушали и смеялись. Слонёнок задавал всем умные вопросы. Иногда слонёнок и мартышка брали удава и крутили, как скакалку, а попугай прыгал через него.",
    "Лежит на столе тёплый душистый хлеб. Кто дарит нам это чудо? Золотые руки людей растят хлеб. Весной они пашут землю, сеют хлеба. Всё лето они ухаживают за посевами. Люди хотят получить хороший урожай. Они хотят подарить всем хлеба побольше.",
    "Костя Васильев и Андрей Кирьянов бегут в рощу. Звонко поют птицы. Чудесно пахнут ландыши. От стволов на земле длинные тени. В гнезде пищат птенцы. Вот летит их мать. Она принесла грачатам корм. Малыши ели пищу. Мальчики ушли. Зачем пугать птицу?",
    "Пришли кот с лисой на поляну. Захотелось волку посмотреть на Котофея Ивановича. Он начал разгребать листья. А кот подумал, что в листьях мышка спряталась. Он кинулся туда и впился когтями в волка. Волк бросился бежать. Кот сам испугался и полез на дерево.",
    "Прошло осеннее ненастье. На дворе зима. Стоит хорошая погода. Кругом светло от снега. Пришла зимушка и в лесную чащу. Запушила деревья. Красивый наряд лежит на ветвях. На снегу можно заметить следы зверей. Вот бежал через поляну заяц. Под сосной пушистые шишки. Чья это работа? Белочки или дятла.",
    "На пеньке сидел маленький рыжий зверёк. У него был пушистый хвост, рыжая шубка с серым отливом. Это была белочка. Она грызла еловую шишку. Маленькому медвежонку понравился зверёк. Он подбежал и хотел поиграть с белочкой. Белка испугалась и стрелой взвилась ввысь по стволу дерева. Не захотела она играть с медвежонком.",
  ];

  return texts[Math.floor(Math.random()*texts.length)];
}
