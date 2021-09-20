function filter(persons, criteria) {

    let personsAsArray = JSON.parse(persons);
    let [filterBy, data] = criteria.split("-");

    // when non existing criteria is added code is still working example =>   "all" and "data"(due to missing split information) = undefined =>  e["all"] === data  => true and all entries are passing the filter
    personsAsArray.filter(e => e[filterBy] === data)
        .map((e, i) => console.log(`${i}. ${e.first_name} ${e.last_name} - ${e.email}`
            .trim()));

}


filter(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'a'
);