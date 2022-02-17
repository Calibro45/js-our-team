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


// ciclare array contenente i membri del team

for (let i = 0; i < team.length; i++) {
    
    const teamIndex = team[i];
    
    // ricavo le chiavi e il valore degli oggetti presenti nell'array
    
    const name = teamIndex.name;
    const role = teamIndex.role;
    const image = teamIndex.image;

    // creo elemento html contenente le info del team
    
    const card = 
    `
        <div class="team-card">
            <div class="card-image">
                <img
                src="${image}"
                alt="${name}"
                />
            </div>
            <div class="card-text">
                <h3>${name}</h3>
                <p>${role}</p>
            </div>
        </div>
    `;
    console.log(card);

    console.log(teamIndex, name, role, image);
}


