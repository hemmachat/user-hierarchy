# User Hierarchy

### Some rationals behind the code
- I mainly write code for testability and readibility as people will spend most of their time reading other people's code and hardware is cheap. So, the code might be a bit verbose and might not micro-optimised.
- I create a class ``Role`` to store the relationship of the roles using ``children`` property as it more human understandable and easier to fetch the child nodes, instead of using ``parent`` property.
- I use TDD to write simple test and simple code first. Then build them up together overtime. So, there might be some simple test scenarios that you might think not needed e.g. testing the constructor.
- I create a class ``RoleUserManager`` to manage the role and user which might break the rule of single responsibility. But for our scenario which we have a tight relationship between roles and users, I think it is reasonable to have a single class.
  
You need to have Node.js and NPM installed on your machine. If not, please download and install it from ``www.nodejs.org``

1. Please clone the repo or download the whole directory.
2. Install dependencies by running
````bash
$ npm install
````
3. All the test scenarios are in the test suite in directory ``test/index.js``. You can run it by:
````
$ npm run test
````

### Some possibility of improvements
- More test scenarios such as multiple child nodes, empty nodes, invalid nodes, etc.
- Input validation
- Some code optimisation