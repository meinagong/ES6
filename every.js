function Field(value) {
  this.value = value;
}

Field.prototype.validate = function() {
  return this.value.length > 0;
}

const username = new Field('2cool');
const password = new Field('my_pasword');
const birthdate = new Field('10/10/2010');
const fields = [username, password, birthdate];

const formIsValid = fields.every(function(field) {
  return field.validate();
})

// console.log(formIsValid);
if (formIsValid) {
  // allow user to submit!
} else {
  // show an error message
}