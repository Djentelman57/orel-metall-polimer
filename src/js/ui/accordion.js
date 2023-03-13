const Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    var links = this.el.find('.app-category-link');

    links.each(function(){
        let submenu = $(this).next();
        if(submenu[0] == undefined) {
            $(this).find('.arrow').addClass('d-none');
        }
    })
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
}

Accordion.prototype.dropdown = function(e) {
    e.preventDefault();
    var $el = e.data.el;
    const $this = $(this),
        $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
        $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
    }
}

export default Accordion;