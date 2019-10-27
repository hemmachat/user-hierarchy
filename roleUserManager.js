const Role = require('./role');
const User = require('./user');

class RoleUserManager {
    constructor () {
        this.currentRoleId = 0;
        this.rolesTree = [];
    }

    setRoles(roles) {
        roles.forEach(role => {
            this.rolesTree.push(new Role(role.Id, role.Name, role.Parent));

            if(role.Parent !== 0) {
                const parentRoles = this.rolesTree.filter(r => r.id === role.Parent);
                parentRoles.forEach(p => {
                    p.addChild(new Role(role.Id, role.Name, role.Parent));
                });
            }
        });
    }

    getRoles() {
        return this.rolesTree;
    }

    setUsers(users) {
        this.users = users;
    }

    getUsers() {
        return this.users;
    }

    getSubordinates(userId) {
        const roleId = this.getRoleId(userId);
        const role = this.rolesTree.find(r => r.id === roleId);
        console.log('role.getChildren()', role.getChildren());
        console.log('rolesTree', this.rolesTree);
        return role.getChildren();
    }

    getRoleId(userId) {
        return this.users.find(user => user.Id === userId).Role;
    }

    getRole(roleId) {
        return this.rolesTree.find(role => role.id === roleId);
    }
}

module.exports = RoleUserManager;