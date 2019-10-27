const Role = require('../role');
const User = require('../user');
const index = require('../index');
const assert = require('assert');

const roles = [
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

const users = [
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
    })
});