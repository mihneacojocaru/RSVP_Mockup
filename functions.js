// Functie ce primeste parametru un text si returneaza un card


function createCard(text){
    
    let card = document.createElement('div');
    card.classList.add('card');

    let nameTag = document.createElement('h3');
    nameTag.textContent = text;

    let label = document.createElement('label');
    label.for = 'confirmed';
    label.className = 'confirmed-label';
    label.textContent = 'Confirmed ';

    let input = document.createElement('input');
    input.type = 'checkbox';
    input.name = 'confirmed';
    input.className = 'confirmed-check';

    label.appendChild(input);

    let buttonDiv = document.createElement('div');
    buttonDiv.className = 'card-buttons';

    let btnEdit = document.createElement('button');
    btnEdit.className = 'btnEdit';
    btnEdit.textContent = 'Edit';
    buttonDiv.appendChild(btnEdit);
    
    let btnRemove = document.createElement('button');
    btnRemove.className = 'btnRemove';
    btnRemove.textContent = 'Remove';
    buttonDiv.appendChild(btnRemove);

    card.appendChild(nameTag);
    card.appendChild(label);
    card.appendChild(buttonDiv);
    
    return card;
}
