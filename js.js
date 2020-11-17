const toggleList = document.getElementById('toggleList'); //button
const listDiv = document.querySelector('.list'); //div

const myHeading = document.querySelector('h1');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = document.querySelector('ul');
const addItemInput = document.querySelector('.addItemInput');
const addItemButton = document.querySelector('.addItemButton');
const lis = listUl.children;

const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;

firstListItem.style.backgroundColor = 'rgba(243, 156, 18,0.5)';
lastListItem.style.backgroundColor = 'rgb(46, 204, 113,0.3)';

function attachListItemButton(li){
    let up = document.createElement('button');
    up.className = 'up';
    up.textContent = 'Up';
    li.appendChild(up);

    let down = document.createElement('button');
    down.className = 'down';
    down.textContent = 'down';
    li.appendChild(down);

    let remove = document.createElement('button');
    remove.className = 'remove';
    remove.textContent = 'remove';
    li.appendChild(remove);
    

}

for(let i = 0; i < lis.length; i++){
    attachListItemButton(lis[i])
}


listUl.addEventListener('click',(event)=>{
    if(event.target.tagName == 'BUTTON'){
        if (event.target.className == 'remove') {    
            let li = event.target.parentNode;
            let ul = li.parentNode;
            ul.removeChild(li)
        }
        if (event.target.className == 'up') {    
            let li = event.target.parentNode;
            let prevLi = li.previousElementSibling;
            let ul = li.parentNode;
            if (prevLi) {
                ul.insertBefore(li,prevLi);
            }
           
        }
        if (event.target.className == 'down') {
            let li = event.target.parentNode;
            let nextLi = li.nextElementSibling;
            let ul = li.parentNode;
            if (nextLi) {
                ul.insertBefore(nextLi,li);
            }
        }
    }
});



toggleList.addEventListener('click',() => {
    
    if (listDiv.style.display == 'none'){
        toggleList.textContent = 'Hide List';
        listDiv.style.display = 'block';
    }else{
        toggleList.textContent = 'Show List'
        listDiv.style.display = 'none';
    }

});


descriptionButton.addEventListener('click',()=>{
    descriptionP.innerHTML  = descriptionInput.value + ':'
    descriptionP.value = '';
});



addItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    attachListItemButton(li)
    ul.appendChild(li);
    addItemInput.value = '';
});

// removeButton.addEventListener('click', () =>{
//     let ul = document.getElementsByTagName('ul')[0];
//     let li = document.querySelector('li:last-child');
//     ul.removeChild(li);
    

// });


