/*
    You are given a Tree object with the following setup
    T : {
        x : Integer value
        l : Left-child (Tree)
        r : Right-child (Tree)
    }

    A node is defined as VISIBLE if it accepts the following rule:
        "The path from the root to the given node must not contain
         any node whose value is greater than that of the given node"

    Return the number of visible nodes
*/

function recurse(node, val) {
    if (!node) 
        return 0;
    if (node.x < val) {
        return 0 + recurse(node.l, val) + recurse(node.r, val);
    } else {
        return 1 + recurse(node.l, node.x) + recurse(node.r, node.x);   
    }
}

function solution(T) {
    if (!T) 
        return 0;
    return 1 + recurse(T.l, T.x) + recurse(T.r, T.x);
}

var T = {
    x: 10,
    l : {
        x : 6,
        l : {
            x : 23,
            l : null,
            r : null
        },
        r : {
            x : 4,
            l : {
                x : 1,
                l : null,
                r : null
            },
            r : {
                x : 13,
                l : null,
                r : null
            }
        }
    },
    r : {
        x : 12,
        l : {
            x : 47,
            l : null,
            r : {
                x : 50,
                l : null,
                r : {
                    x : 48,
                    l : null,
                    r : null
                }
            }
        },
        r : {
            x : 0,
            l : null,
            r : null            
        }
    }
}

console.log(solution(T))