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

    getSubordinates(userId) {
        const roleId = this.getRoleId(userId);
        const role = this.getRole(roleId);
        return this.roles.filter(r => r.Parent === role.Id);
    }

    getRoleId(userId) {
        return this.users.find(user => user.Id === userId).Role;
    }

    getRole(roleId) {
        return this.roles.find(role => role.Id === roleId);
    }
}

module.exports = RoleUserManager;