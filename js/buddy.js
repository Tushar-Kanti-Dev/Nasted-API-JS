const loadBuddie = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}
loadBuddie();
const displayBuddies = datas => {
    const buddies = datas.results;
    const buddiesContainer = document.getElementById('buddes');
    for (const buddy of buddies) {

        const p = document.createElement('p');
        p.innerText = `
        Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}
        Email: ${buddy.email}, Phone :${buddy.phone}
        `;
        buddiesContainer.appendChild(p);
        console.log(buddy.email);
    }
    console.log(buddies)
}