const Role = require('./role');
const User = require('./user');

class RoleUserManager {
    constructor () {
        this.rolesTree = [];
        this.children = [];
    }

    setRoles(roles) {
        roles.forEach(role => {
            this.rolesTree.push(new Role(role.Id, role.Name, role.Parent));

            // if not root node
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

    getSubRoles(roleId) {
        const role = this.rolesTree.find(r => r.id === roleId);

        if (role.hasChildren()) {
            role.children.forEach(child => {
                this.children.push(child);
                this.getSubRoles(child.id);
            });
        }

        return this.children;
    }

    getRoleId(userId) {
        return this.users.find(user => user.Id === userId).Role;
    }

    getRole(roleId) {
        return this.rolesTree.find(role => role.id === roleId);
    }
}

module.exports = RoleUserManager;