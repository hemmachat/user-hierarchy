const Role = require('../role');
const User = require('../user');
const RoleUserManager = require('../roleUserManager');
const index = require('../index');
const assert = require('assert');

const initRoles = [
    {
        "Id": 1,
        "Name": "System Administrator",
        "Parent": 0
    },
    {
        "Id": 2,
        "Name": "Location Manager",
        "Parent": 1
    },
    {
        "Id": 3,
        "Name": "Supervisor",
        "Parent": 2
    },
    {
        "Id": 4,
        "Name": "Employee",
        "Parent": 3
    },
    {
        "Id": 5,
        "Name": "Trainer",
        "Parent": 3
    }];

const initUsers = [
    {
        "Id": 1,
        "Name": "Adam Admin",
        "Role": 1
    },
    {
        "Id": 2,
        "Name": "Emily Employee",
        "Role": 4
    },
    {
        "Id": 3,
        "Name": "Sam Supervisor",
        "Role": 3
    },
    {
        "Id": 4,
        "Name": "Mary Manager",
        "Role": 2
    },
    {
        "Id": 5,
        "Name": "Steve Trainer",
        "Role": 5
    }];

describe('Role and User class', () => {
    describe('Role constructor', () => {
        it('should return valid role initialised values', () => {
            const role = new Role(1, "System Administrator", 0);

            assert.equal(role.id, 1);
            assert.equal(role.name, "System Administrator");
            assert.equal(role.parent, 0);
        });
    }),

    describe('User constructor', () => {
        it('should return valid user initialised values', () => {
            const user = new User(1, "Adam Admin", 1);

            assert.equal(user.id, 1);
            assert.equal(user.name, "Adam Admin");
            assert.equal(user.role, 1);
        });
    }),

    describe('Role init multiple items', () => {
        it('should return a valid number of role items', () => {
            let roles = [];
            initRoles.forEach(role => {
                roles.push(role);
            });

            assert.equal(roles.length, 5);
        });
    }),

    describe('User init multiple items', () => {
        it('should return a valid number of user items', () => {
            let users = [];
            initUsers.forEach(user => {
                users.push(user);
            });

            assert.equal(users.length, 5);
        });
    })
});

describe('RoleUserManager class', () => {
    describe('setRoles()', () => {
        it('should return valid role values', () => {
            const manager = new RoleUserManager();
            manager.setRoles(initRoles);
            const actual = manager.getRoles();

            assert.equal(actual[0].id, initRoles[0].Id);
        });
    }),

    describe('setUsers()', () => {
        it('should return valid user values', () => {
            const manager = new RoleUserManager();
            manager.setUsers(initUsers);

            assert.equal(manager.getUsers(), initUsers);
        });
    }),

    describe('getRoleId()', () => {
        it('should return valid role ID', () => {
            const manager = new RoleUserManager();
            manager.setUsers(initUsers);

            assert.equal(manager.getRoleId(5), 5);
        });
    }),

    describe('getRole()', () => {
        it('should return valid role detail', () => {
            const manager = new RoleUserManager();
            manager.setRoles(initRoles);

            assert.equal(manager.getRole(5).id, 5);
            assert.equal(manager.getRole(5).name, "Trainer");
            assert.equal(manager.getRole(5).parent, 3);
        });
    })

    describe('getSubRoles()', () => {
        it('should return 0 subrole of role ID 5', () => {
            const manager = new RoleUserManager();
            manager.setRoles(initRoles);

            assert.deepEqual(manager.getSubRoles(5), []);
        }),

        it('should return 0 subrole of role ID 4', () => {
            const manager = new RoleUserManager();
            manager.setRoles(initRoles);

            assert.deepEqual(manager.getSubRoles(4), []);
        }),

        it('should return all subroles of role ID 3 - supervisor', () => {
            const manager = new RoleUserManager();
            manager.setRoles(initRoles);
            manager.setUsers(initUsers);
            const expected = [ 
                { 
                    Id: 4, 
                    Name: 'Employee', 
                    Parent: 3 
                },
                { 
                    Id: 5, 
                    Name: 'Trainer', 
                    Parent: 3 
                }];
            const actual = manager.getSubRoles(3);

            assert.equal(actual[0].id, expected[0].Id);
            assert.equal(actual[0].name, expected[0].Name);
            assert.equal(actual[0].parent, expected[0].Parent);
            assert.equal(actual[1].id, expected[1].Id);
            assert.equal(actual[1].name, expected[1].Name);
            assert.equal(actual[1].parent, expected[1].Parent);
        }),

        it('should return all subrole of role ID 2 - manager', () => {
            const manager = new RoleUserManager();
            manager.setRoles(initRoles);
            manager.setUsers(initUsers);
            const expected = [   
                { 
                    Id: 3, 
                    Name: 'Supervisor', 
                    Parent: 2
                },
                { 
                    Id: 4, 
                    Name: 'Employee', 
                    Parent: 3 
                },
                { 
                    Id: 5, 
                    Name: 'Trainer', 
                    Parent: 3 
                }];
            const actual = manager.getSubRoles(2);

            assert.equal(actual[0].id, expected[0].Id);
            assert.equal(actual[0].name, expected[0].Name);
            assert.equal(actual[0].parent, expected[0].Parent);
            assert.equal(actual[1].id, expected[1].Id);
            assert.equal(actual[1].name, expected[1].Name);
            assert.equal(actual[1].parent, expected[1].Parent);
            assert.equal(actual[2].id, expected[2].Id);
            assert.equal(actual[2].name, expected[2].Name);
            assert.equal(actual[2].parent, expected[2].Parent);
        }),

        it('should return all subrole of role ID 1 - admin', () => {
            const manager = new RoleUserManager();
            manager.setRoles(initRoles);
            manager.setUsers(initUsers);
            const expected = [   
                {
                    Id: 2,
                    Name: 'Location Manager',
                    Parent: 1
                },                
                { 
                    Id: 3, 
                    Name: 'Supervisor', 
                    Parent: 2
                },
                { 
                    Id: 4, 
                    Name: 'Employee', 
                    Parent: 3 
                },
                { 
                    Id: 5, 
                    Name: 'Trainer', 
                    Parent: 3 
                }];
            const actual = manager.getSubRoles(1);

            assert.equal(actual[0].id, expected[0].Id);
            assert.equal(actual[0].name, expected[0].Name);
            assert.equal(actual[0].parent, expected[0].Parent);
            assert.equal(actual[1].id, expected[1].Id);
            assert.equal(actual[1].name, expected[1].Name);
            assert.equal(actual[1].parent, expected[1].Parent);
            assert.equal(actual[2].id, expected[2].Id);
            assert.equal(actual[2].name, expected[2].Name);
            assert.equal(actual[2].parent, expected[2].Parent);
            assert.equal(actual[3].id, expected[3].Id);
            assert.equal(actual[3].name, expected[3].Name);
            assert.equal(actual[3].parent, expected[3].Parent);
        })          
    })
});