// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples

module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of this utility?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe this utility in a few words.',
  },
];
