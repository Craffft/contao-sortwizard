
/**
 * Contao Open Source CMS
 *
 * Copyright (C) 2005-2014 Leo Feyer
 *
 * @package    SortWizard
 * @author     Daniel Kiesel <daniel@craffft.de>
 * @license    LGPL
 * @copyright  Daniel Kiesel 2012-2014
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
	$$('.tl_sortwizard').each(function(el) {
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
