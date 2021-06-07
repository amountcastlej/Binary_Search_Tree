class BSTNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
        this.count =1;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    add(value){
        if(this.root == null){
            this.root = new BSTNode(value);
        } else {
            var runner = this.root;

            while (runner) {
                if (value === runner.val) {
                    runner.count++;
                    break;
                } else if (value < runner.val) {
                    if (!runner.left) {
                        runner.left = new BSTNode(value);
                        break;
                    } else {
                        runner = runner.left;
                    }
                } else {
                    if (!runner.right) {
                        runner.right = new BSTNode(value);
                        break;
                    } else {
                        runner = runner.right;
                    }
                }
            }
        }
    }

    contains(value) {
        if (this.root === null) {
            return false;
        }
        var runner = this.root;
        while (runner) {
            if (value == runner.val) {
                return true;
            }
            if (value < runner.val) {
                if (!runner.left) {
                    return false;
                }
                runner = runner.left;
            }else {
                if (!runner.right) {
                    return false;
                }
                runner = runner.right;
            }
        }
        return false;
    }
    
    min(value) {
        if (this.root === null) {
            return null;
        }
        var runner = this.root;
        while (runner.left) {
            runner = runner.left;
        }
        return runner.val;
    }

    max(value) {
        if (this.root === null) {
            return null;
        }
        var runner = this.root;
        while (runner.right) {
            runner = runner.right;
        }
        return runner.val;
    }

    size(value) {
        if (this.root === null) {
            return 0;
        }
        function flood(leaf) {
            if (leaf === null) {
            return 0;
        }
        return 1 + flood(leaf.left) + flood(leaf.right);
    }
    return flood(this.root)
    }
}

var tree = new BST();
tree.add(37);
// console.log(tree);
tree.add(21);
console.log("Size: ", tree.size());
// console.log(tree);
// console.log(tree.contains(21))
tree.add(78);
console.log("Minimu: ", tree.min());

console.log("Maximum: ", tree.max());
console.log("Size: ", tree.size());