
require('dotenv').config();
const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: { type: [String], default: [] }
});
const Person = mongoose.model('Person', personSchema);


function createAndSavePerson() {
  const person = new Person({
    name: 'John Doe',
    age: 30,
    favoriteFoods: ['pizza', 'burritos']
  });
}


function createManyPeople(arrayOfPeoplee) {
  Person.create(arrayOfPeople);
}


function findPeopleByName(personName, ) {
  Person.find({ name: personName }, );
}


function findOneByFood(food) {
  Person.findOne({ favoriteFoods: food }, );
}


function findPersonById(personId, ) {
  Person.findById(personId, );
}

function findAndUpdate(personName) {
  Person.findOneAndUpdate(
    { name: personName },
    { age: 20 },
    { new: true },
    done
  );
}


function removeById(personId) {
  Person.findByIdAndRemove(personId);
}


function removeManyPeople(done) {
  Person.remove({ name: 'Mary' });
}