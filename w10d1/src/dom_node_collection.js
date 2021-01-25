class DOMNodeCollection {
    constructor(HTMLElements) {
        this.HTMLElements = HTMLElements;
        return this;
    }

    html(txt) {
        if (txt) {
            this.HTMLElements.forEach(element => {
            element.innerHTML = txt;
        })} else {
            return this.HTMLElements[0].innerHTML;
        }
    };

    empty() {
        this.html(' ');
    };

    append(inp) {
        // debugger
        if (typeof inp === 'string'){
            this.HTMLElements.forEach(element => {
                element.innerHTML += inp;
            })
        } else if (inp instanceof Array && inp.every(el => el instanceof HTMLElement)){
            this.HTMLElements.forEach(element => {
                inp.forEach(el => {
                    element.innerHTML += el.outerHTML;
                })
            })
        } else if (inp instanceof HTMLElement) {
            this.HTMLElements.forEach(element => {
                element.innerHTML += inp.outerHTML;
            })
        } else if (inp instanceof DOMNodeCollection) {
            this.HTMLElements.forEach(element => {
                inp.HTMLElements.forEach(el2 =>{
                    element.innerHTML += el2.outerHTML;
                })
            })
        }
    };

}

module.exports = DOMNodeCollection;