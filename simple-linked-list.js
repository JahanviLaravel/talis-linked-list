//
// This is only a SKELETON file for the 'Simple Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Element {
    constructor(data) {
        this.Val = data;
        this.Next = null;
    }

    get value() {
       return this.Val;
    }

    get next() {
        return this.Next;
    }
}

export class List {

    constructor(listVal = []) {
        this.listVal = listVal;
        this.Head = null;
        this.Length = 0;
        this.linkedListFromArray();
    }


    linkedListFromArray()
    {
        let i=0;
        this.Length = 0;
        while (i < this.listVal.length) {
            const el = new Element(this.listVal[i]);
            this.add(el);
            i++;
        }
    }

    add(nextValue) {
        if(!this.Head)
        {
            this.Head = nextValue;
        }
        else
        {
            let tmp= this.Head;
            this.Head = nextValue;
            this.Head.Next = tmp;

        }
        this.Length++;
    }

    get length() {
        return this.Length;

    }

    get head() {
        return this.Head;
    }

    reverse()
    {
        let curRev = this.Head;
        let pre = null;
        let nex = null
        let arrRev = [];

       while (curRev!=null)
       {
           nex = curRev.Next;
           curRev.Next = pre;
           pre = curRev;
           curRev = nex;
       }
       this.Head = pre;
       return pre;
    }

    toArray()
    {
        let arr = new Array();
        var curr = null;
        let index = 0;
        var curr = this.Head;
        // Traverse the Linked List and add the
        // elements to the array one by one
        while (curr != null)
        {
            console.log(curr.Val);
            arr[index] = curr.Val;
            curr = curr.Next;
            index++;
        }
        return(arr);
    }

}