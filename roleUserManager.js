const Role = require('./role');
const PARENT_ROOT_NODE_ID = 0;

class RoleUserManager {
    constructor() {
        this._rolesTree = [];
        this._children = [];
    }

    getRoles() {
        return this._rolesTree;
    }

    setUsers(users) {
        this._users = users;
    }

    getUsers() {
        return this._users;
    }

    getRoleId(userId) {
        return this._users.find(user => user.Id === userId).Role;
    }

    getRole(roleId) {
        return this._rolesTree.find(role => role.id === roleId);
    }

    setRoles(roles) {
        roles.forEach(role => {
            this._rolesTree.push(new Role(role.Id, role.Name, role.Parent));

            // if not root node, we build the entire tree
            if(role.Parent !== PARENT_ROOT_NODE_ID) {
                const parentRoles = this._rolesTree.filter(
                    r => r.id === role.Parent);
                parentRoles.forEach(p => 
                    p.addChild(new Role(role.Id, role.Name, role.Parent)));
            }
        });
    }
    
    getSubRoles(roleId) {
        const role = this._rolesTree.find(r => r.id === roleId);

        // if the role has child or children, do the recursive way of getting the child role
        if (role.hasChildren()) {
            role.children.forEach(child => {
                this._children.push(child);
                this.getSubRoles(child.id);
            });
        }

        return this._children;
    }

    getSubOrdinates(userId) {
        const roleId = this.getRoleId(userId);
        const subRoles = this.getSubRoles(roleId);
        let subs = [];
        
        // get all subordinates by checking all users and roles
        this._users.forEach(u => {
            subRoles.forEach(r => {
                if (r.id === u.Role) {
                    subs.push(u);
                }
            })
        });

        return subs;
    }
}

module.exports = RoleUserManager;