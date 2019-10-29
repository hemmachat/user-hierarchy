class Role {
    constructor(id, name, parent) {
        this._id = id;
        this._name  = name;
        this._parent = parent;
        this._children = [];
    }

    get Id() {
        return this._id;
    }

    get Name() {
        return this._name;
    }

    get Parent() {
        return this._parent;
    }

    get Children() {
        return this._children;
    }
    
    addChild(childId) {
        this._children.push(childId);
    }

    hasChildren() {
        return this._children.length !== 0;
    }
}

module.exports = Role;