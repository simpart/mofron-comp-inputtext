/**
 * @file   inputtext.js
 * @brief  InputText Component Class
 * @license MIT
 */
const Input = require("mofron-comp-input");
const Text  = require("mofron-comp-text");

module.exports = class extends Input {
    
    constructor (p1,p2) {
        try {
            super();
            this.name("InputText");
            this.shortForm("text", "suffix");
            /* init config */
            if (0 < arguments.length) {
                this.config(p1,p2);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts () {
        try {
            super.initDomConts();
            let chd_buf = this.childDom();
	    this.childDom(this.rootDom()[0]);
	    this.child(this.suffix());
	    this.childDom(chd_buf);

	    //console.log("horiz");
            this.horizon(true);

        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    beforeRender () {
        try {
	    super.beforeRender();
            if (true === this.horizon()) {
                this.suffix().size(this.height());
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    suffix (prm) {
        try {
	    if ("string" === typeof prm) {
                this.suffix().text(prm);
		this.suffix().style({ "margin-left": "0.05rem" });
		return;
	    }
            return this.innerComp("suffix",prm,Text);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
}
