module.exports = function FindNarcissusFrom(people) {

    const narcissusSearch = people.filter(({ name, know }) =>
        !know.length && people.filter(({ know }) =>
            know.some(person => person === name).length === people.length - 1));
    
    const found = narcissusSearch.map(narcissus => narcissus.name).toString();
    
    if (!found) {
       alert("")
    } if (found) {
       alert(`${found}`) 
    }    
};