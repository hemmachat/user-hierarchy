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

            assert.equal(5, roles.length);
        });
    }),

    describe('User init multiple items', () => {
        it('should return a valid number of user items', () => {
            let users = [];
            initUsers.forEach(user => {
                users.push(user);
            });

            assert.equal(5, users.length);
        });
    })
});

describe('RoleUserManager class', () => {
    describe('setRoles()', () => {
        it('should return valid role values', () => {
            const manager = new RoleUserManager();
            manager.setRoles(initRoles);

            assert.equal(initRoles, manager.getRoles());
        });
    }),

    describe('setUsers()', () => {
        it('should return valid user values', () => {
            const manager = new RoleUserManager();
            manager.setUsers(initUsers);

            assert.equal(initUsers, manager.getUsers());
        });
    }),

    describe('getRoleId()', () => {
        it('should return valid role ID', () => {
            const manager = new RoleUserManager();
            manager.setUsers(initUsers);

            assert.equal(5, manager.getRoleId(5));
        });
    }),

    describe('getRole()', () => {
        it('should return valid role detail', () => {
            const manager = new RoleUserManager();
            manager.setRoles(initRoles);

            assert.equal(5, manager.getRole(5).Id);
            assert.equal("Trainer", manager.getRole(5).Name);
            assert.equal(3, manager.getRole(5).Parent);
        });
    }),

    describe('getSubordinates()', () => {
        it('should return 0 subordinates of user ID 5', () => {
            const manager = new RoleUserManager();
            manager.setRoles(initRoles);
            manager.setUsers(initUsers);

            assert.equal(0, manager.getSubordinates(5));
        }),

        it('should return 0 subordinates of user ID 2', () => {
            const manager = new RoleUserManager();
            manager.setRoles(initRoles);
            manager.setUsers(initUsers);

            assert.equal(0, manager.getSubordinates(2));
        })
    })
});