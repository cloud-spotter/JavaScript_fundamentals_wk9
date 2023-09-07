// Code for the first exercise in Phase 1, Section 09:

const person = {
    name: 'Maxine',
    age: 32,
    address: {
        city: 'London',
        postcode: 'E1 123'
    },
    hobbies: ['writing', 'tennis', 'cooking']
};

//--------------------------------------------------------------------
// Exercise

// Print the value of the city attribute ('London')
console.log(person.address.city)
// Print the value of the second hobbies value ('tennis')
console.log(person.hobbies[1])

//--------------------------------------------------------------------
// Challenge

/**
 * 
 * @param {string} name 
 * @param {number} id 
 * @param {array} students 
 */
const cohort = {
    name: 'July2023',
    id: 12345,
    students: ['student1', 'student2', 'student3', 'student4']
};

const displayCohortDetails = (cohort) => {
    console.log(`cohort id: ${cohort.id} - cohort name: ${cohort.name} - ${cohort.students.length} students in this cohort`)
}
displayCohortDetails(cohort)