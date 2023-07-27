
const findTheOldest = function(arr) { 
        return arr.reduce((oldestPerson, nextPerson) => {
            const oldestAge = age(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath); 
            const nextAge = age(nextPerson.yearOfBirth, nextPerson.yearOfDeath);

            return oldestAge < nextAge ? nextPerson:oldestPerson; 
        });
};

const age = function(birth, death){
    if(!death) {
        death = new Date().getFullYear();
        
    }
    return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;