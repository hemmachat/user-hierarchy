class Role {
    constructor(id, name, parent) {
        this.id = id;
        this.name  = name;
        this.parent = parent;
        this.children = [];
    }

    addChild(childId) {
        this.children.push(childId);
    }

    hasChildren() {
        return this.children.length !== 0;
    }
}

module.exports = Role;