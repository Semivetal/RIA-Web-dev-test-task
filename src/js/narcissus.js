module.exports = function FindNarcissusFrom(people) {

    const narcissusSearch = function (arr) {
        let numEl = arr.length;
        let name = '';
        let increment = 0;
        let decrement = 1;
        let counter = [];

        for (let i = 0; i < numEl; i++) {
            let element = arr[i];
            name = element.name;

            arr.forEach(row => {
                let r = row.know.find(function (element) {
                    return element === name;
                });
                if (r == name) increment++
                
            });
            let tmp = {
                increment,
                i,
                name
            }
            counter.push(tmp);
            
            increment = 0; 
        }

        counter.sort((a, b) => {
            return b.increment - a.increment;
        });

        let result = '';

        if (counter[0].name == arr[counter[0].i].know[0]) {
            decrement = 2;
        }
        if (counter[0].increment >= numEl - decrement) {
            result = counter[0].name
        }
        return result;

    }

    const found = narcissusSearch(people);
    
    if (!found) {
       alert("")
    } if (found) {
       alert(`${found}`) 
    }    
};