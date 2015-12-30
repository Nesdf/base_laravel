$(function() {
	var Acordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		//Variables privada
		var links = this.el.find('.link');
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
		//Eventos
	}

	Acordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if(!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		}
	}

	var acordion = new Acordion($('#acordion'), false);
});