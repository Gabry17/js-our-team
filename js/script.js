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

//al click generare un altro user
const btn = document.querySelector('button');

//console.log(team);
btn.addEventListener('click', function(){
    //al click creo nuovo oggetto con valori e lo inserisco nell array
    const inputName = document.getElementById('name').value;
    const inputRole = document.getElementById('role').value;
    const inputImage = document.getElementById('image').value;

    let newObj = {
        name: inputName,
        role: inputRole,
        image: inputImage
    }

    team.push(newObj);
    console.log(team);
    print();
});

//STAMPA IN CONSOLE LE PROPRIETA DI TEAM
//prendo elementi dall array

const container = document.querySelector('.container');

print();
function print() {
    container.innerHTML = '';
    for(let i = 0; i < team.length; i++){
        const thisElem = team[i];
        //scorro oggetti interni con ciclo for in
        //OUTPUT
        //creo elementi
        let div = document.createElement('div');
        let divImage = document.createElement('div');
        for(let key in thisElem){
            //stampare e visualizzare le proprietà nel dom

            if(key !== "image"){
                console.log(key,thisElem[key]);
                div.innerHTML += `<p>${key}: ${thisElem[key]}</p>`;
            }

            if(key === "image" && thisElem.image.length){
                divImage.innerHTML = `<img src="img/${thisElem.image}">`;
            }

            container.appendChild(divImage);
            container.appendChild(div);
            
        }    
    }
}
