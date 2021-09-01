// const loadBuddy = () =>{
//     fetch('https://randomuser.me/api/?results=5')
//     .then(res => res.json())
//     .then(data => displayBuddy(data))
// }
// loadBuddy()

// const displayBuddy = data =>{
//     const buddes = data.results
//     // console.log(data.results)
//     const buddyContainer = document.getElementById('buddes')
//     for(buddy of buddes){

//         console.log(buddy);
//         const p= document.createElement('p');
//         p.innerText = `  first:${buddy.name.first}  ${buddy.name.last}
//          Email:${buddy.email}
//          dob:${buddy.dob.date}
//         `
//         buddyContainer.appendChild(p);
//     }
// }

const loadBuddy = () =>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res =>res.json())
    .then(data => displayBuddy(data))
}
loadBuddy()
const displayBuddy = (data) => {
    const buddes = data.results
    console.log(buddes)
    const buddyContainer = document.getElementById('buddes')
    for(buddy of buddes){
        const p = document.createElement('p');
        p.innerText = `name:${buddy.name.first} ${buddy.name.last}`
        buddyContainer.appendChild(p);
        console.log(buddy)
    }
}