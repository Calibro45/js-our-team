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
console.log(team);

// recupero dal dom elemento contenitore delle card del team

const teamContainer = document.querySelector('.team-container');
//console.log(teamContainer);

const card = generaCard();

const teamMember = teamMemberGenerator('andrea rondinelli', 'mente criminale', 'immagine');
console.log(teamMember);

// creazione funzione per nuovo membro

function teamMemberGenerator (nome, ruolo, immagine) {
    
    // creazione di un nuovo oggetto
    
    const newTeamMember = {
        name: nome,
        role: ruolo,
        image: immagine,
    }
    
    return newTeamMember;

}


function generaCard () {

    // ciclare array contenente i membri del team

    let card = '';

    for (let i = 0; i < team.length; i++) {
        
        const teamIndex = team[i];
        
        // ricavo le chiavi e il valore degli oggetti presenti nell'array
        
        const name = teamIndex.name;
        const role = teamIndex.role;
        const image = teamIndex.image;
        //console.log(teamIndex, name, role, image);

        // creo elemento html contenente le info del team
        
        card = 
        `
            <div class="team-card">
                <div class="card-image">
                    <img
                    src="img/${image}"alt="${name}"/>
                </div>
                <div class="card-text">
                    <h3>${name}</h3>
                    <p>${role}</p>
                </div>
            </div>
        `;
        //console.log(card);

        teamContainer.innerHTML += card;
        //console.log(teamContainer.innerHTML);
    
    }
    
    return card;

}


