

const form = document.querySelector('.entry-form');
const input = document.querySelector('input');
const peopleCards = document.querySelector('.people-cards');


form.addEventListener('submit', e => {
    e.preventDefault();

    if(!input.value){
        alert('Please enter a name!');
    } else{
        let card = createCard(input.value);
        peopleCards.appendChild(card);
        // input.value = "";
    }
});

//Highlight on Checkbox

peopleCards.addEventListener('change', e => {
    const checkbox = e.target;
    const checked = checkbox.checked;
    const card = checkbox.parentNode.parentNode;
    if(checked){
        card.classList.add('responded');
    } else {
        card.classList.remove('responded');
    }
});

//Edit and Remove

peopleCards.addEventListener('click', event => {
    if(event.target.tagName === 'BUTTON') {
        const button = event.target;
        const card = button.parentNode.parentNode;
        const cardHolder = card.parentNode;
        if(button.textContent == 'Remove'){
            cardHolder.removeChild(card);
        }else if(button.textContent == 'Edit') {
            const h3 = card.firstElementChild;
            const input = document.createElement('input');
            input.type = 'text';
            input.value = h3.textContent;
            card.insertBefore(input, h3);
            card.removeChild(h3);
            button.textContent = 'Save';
        }else if (button.textContent == 'Save') {
            const input = card.firstElementChild;
            const h3 = document.createElement('h3');
            h3.className = 'card-header';
            h3.textContent = input.value;
            card.insertBefore(h3, input);
            card.removeChild(input);
            button.textContent = 'Edit';
        }
    }
});

// Filter Confirmed

let hidePeople = document.querySelector('#hidePeople');

hidePeople.addEventListener('change', e => {
    const isChecked = e.target.checked;
    const allCards = peopleCards.children;

    if(isChecked){
        for(let i=0; i < allCards.length; i++){
            let checkedCards = allCards[i];
            if(checkedCards.className == 'card responded'){
                checkedCards.style.display = '';
            } else{
                checkedCards.style.display = 'none';
            }
        }
    } else{
        for(let i=0; i < allCards.length; i++){
            let cards = allCards[i];
            cards.style.display = '';
        }
    }
});