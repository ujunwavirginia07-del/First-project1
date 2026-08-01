
let alien = {
    name: 'Ujunwa',
    tech: 'JS',
    laptop : {
        cpu : '17',
        ram : 4,
        brand : 'Asus'
    }
}

for(let key in alien)
{
    console.log(key, alien[key]);
}