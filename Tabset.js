
class Tabset {
    constructor(el, config) {
        this.config = config || {hideAll: true};
        this.el = el;
        this.init();
   }

    static TABSET_CLASS = 'template-tabset';
    static TABSET_ITEM_CLASS = 'tabset-item';
    static TABSET_ITEM_TITLE_CLASS = 'tabset-item-title';
    static TABSET_ITEM_CONTENT_CLASS = 'tabset-item-content';
    static ACTIVE_ITEM_CLASS = 'active';

    init() {
        this.bindClasses();
        this.bindCallbacks();
    }
    
    bindClasses() {
        this.el.classList.add(Tabset.TABSET_CLASS);
        Array.prototype.forEach.call(this.el.children, (itemEl, i)=> {
            itemEl.classList.add(Tabset.TABSET_ITEM_CLASS);
            itemEl.id = i;
            // itemEl.firstChild.classList.add(Tabset.ACTIVE_ITEM_CLASS);
            itemEl.children[0].classList.add(Tabset.TABSET_ITEM_TITLE_CLASS);
            itemEl.children[0].children[1].classList.add(Tabset.TABSET_ITEM_CONTENT_CLASS);
            i++;
        });
    }

    bindCallbacks() {
        this.el.addEventListener('click', this.onTabsetClick.bind(this));
    }
    onTabsetClick(e) {
        console.log(e, this);
        switch(true) {
            case e.target.classList.contains(
                Tabset.TABSET_ITEM_TITLE_CLASS
            ):
            this.onTitleClick(e.target);
            break;
        }
    }
    onTitleClick(titleElem) {
        // const itemElem = titleElem.parentNode;
        const isCurrentVisible = this.isVisible(titleElem.parentNode);
        
        if(this.config.hideAll) {
            this.hideAll();
        }

        if(!isCurrentVisible)
        {
            this.show(titleElem.parentNode);
        } else {
            this.hide(titleElem.parentNode);
        }
    }
    show(itemElem) {
        itemElem.classList.add(Tabset.ACTIVE_ITEM_CLASS);
        // itemElem.id = 2;
       
    }
    hide(itemElem) {
        itemElem.classList.remove(Tabset.ACTIVE_ITEM_CLASS);
    }
    isVisible(itemElem) {
        return itemElem.classList.contains(Tabset.ACTIVE_ITEM_CLASS);
    }
    hideAll() {
       const visibleElements = this.el.querySelectorAll('.' + Tabset.ACTIVE_ITEM_CLASS);
        console.log(visibleElements);
       Array.prototype.forEach.call(visibleElements, this.hide.bind(this));
    }
    showPrevTab(index) {
        this.hideAll(this.el.children);
        this.show(this.el.children[index]);
        // this.show(this.el.children[index].previousElementSibling);

   
    }
    showNextTab(index) {
        this.hideAll(this.el.children);
        this.show(this.el.children[index]);
        // this.show(this.el.children[index].nextElementSibling);

    }
}
