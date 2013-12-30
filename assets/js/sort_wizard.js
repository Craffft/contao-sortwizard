/**
 * Sort wizard
 * @param object
 * @param string
 * @param string
 */
Backend.SortWizard = function(el, command, id) {
	var container = $(id).getElement('.sortable'),
		parent = $(el).getParent('span'), span;
	Backend.getScrollOffset();
	switch (command) {
	case 'up':
		if ((span = parent.getPrevious('span'))) {
			parent.inject(span, 'before');
		} else {
			parent.inject(container, 'bottom');
		}
		break;
	case 'down':
		if (span = parent.getNext('span')) {
			parent.inject(span, 'after');
		} else {
			parent.inject(container, 'top');
		}
		break;
	}
}
window.addEvent('domready', function() {
	$$('.tl_sort_wizard').each(function(el) {
		var els = el.getElement('.sortable');
		if (els.hasClass('sortable-done')) return;
		new Sortables(els, {
			contstrain: true,
			opacity: 0.6,
			handle: '.drag-handle'
		});
		els.addClass('sortable-done');
	});
});