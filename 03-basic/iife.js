(function person () {
    //name iife 
    console.log(`my name is shushil`);
})();

function person () {
    console.log(`my name is shushil`);
}

 person();

 ((person) => {
    // single iife
    console.log(`my name is shushil ${"shushil"}`);
 }) (person)

