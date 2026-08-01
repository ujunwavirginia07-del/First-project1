
let laptop2 = {
    cpu: `i7`,
    ram: 16,
    brand: `Apple`,

    getconfig: function(){

        console.log(this.cpu);
    }
}


let laptop1 = {
    cpu: `i9`,
    ram: 16,
    brand: `HP`,

    getconfig: function(){

        console.log(this.cpu);

    }
}

laptop2.getconfig();