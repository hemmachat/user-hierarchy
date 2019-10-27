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

    getChildren() {
        return this.children;
    }
}

module.exports = Role;