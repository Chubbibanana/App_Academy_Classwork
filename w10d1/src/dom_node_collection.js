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
    }

    empty() {
        this.html('');
    }

    append(outer) {
        this.HTMLElements.forEach(element => {
            this.html(outer);
        })
    }

}

module.exports = DOMNodeCollection;