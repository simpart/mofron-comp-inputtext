/**
 * @file mofron-comp-inputtext/index.js
 * @brief input-text component for mofron
 *        add text such as units(exp.length,weight) to the input component 
 * @license MIT
 */
const Input = require("mofron-comp-input");
const Text  = require("mofron-comp-text");

module.exports = class extends Input {
    /**
     * initialize component
     * 
     * @param (mixed) text parameter
     *                dict: component config
     * @param (mixed) suffix parameter
     * @type private
     */
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
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
            let chd_buf = this.childDom();
	    this.childDom(this.rootDom()[0]);
	    this.child(this.suffix());
	    this.childDom(chd_buf);

            this.horizon(true);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * before render process
     * 
     * @type private
     */
    beforeRender () {
        try {
	    super.beforeRender();
            if (true === this.horizon()) {
                this.suffix().size(this.height());
            }
        } catch (e) {

        }
    }
    
    /**
     * suffix text
     *
     * @param (mixed) string: suffix text contents
     *                mofron-comp-text: suffix text component
     * @type parameter
     */
    suffix (prm,cnf) {
        try {
	    if ("string" === typeof prm) {
                this.suffix().text(prm);
		this.suffix().style({ "margin-left": "0.05rem" });
		return;
	    }
	    this.suffix(cnf);
            return this.innerComp("suffix",prm,Text);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
}
