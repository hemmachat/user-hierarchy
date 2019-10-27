const Role = require('./role');
const User = require('./user');

class RoleUserManager {
    
    setRoles(roles) {
        this.roles = roles;
    }

    getRoles() {
        return this.roles;
    }

    setUsers(users) {
        this.users = users;
    }

    getUsers() {
        return this.users;
    }

    getSubordinates(id) {
        return id;
    }
}

module.exports = RoleUserManager;