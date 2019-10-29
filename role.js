class Role {
    constructor(id, name, parent) {
        this._id = id;
        this._name  = name;
        this._parent = parent;
        this._children = [];
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get parent() {
        return this._parent;
    }

    get children() {
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