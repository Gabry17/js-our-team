const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
];

//STAMPA IN CONSOLE LE PROPRIETA DI TEAM
//prendo elementi dall array

const container = document.querySelector('.container');

for(let i = 0; i < team.length; i++){
    const thisElem = team[i];
    //scorro oggetti interni con ciclo for in
    let div = document.createElement('div');
    div.classList.add('mg-top');
    for(let key in thisElem){
        //stampo le proprietà in console
        //console.log(key,thisElem[key]);
        
        div.innerHTML += `${key}: ${thisElem[key]} <br>`;
        container.appendChild(div);
    }
    console.log(div);

}

