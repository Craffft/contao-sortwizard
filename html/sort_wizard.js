/**
 * Sort wizard
 * @param object
 * @param string
 * @param string
 */
Backend.SortWizard = function(el, command, id){var list = $(id);var parent = $(el).getParent();var items = list.getChildren();Backend.getScrollOffset();switch(command){case 'up':parent.getPrevious() ? parent.injectBefore(parent.getPrevious()) : parent.injectInside(list);break;case 'down':parent.getNext() ? parent.injectAfter(parent.getNext()) : parent.injectBefore(list.getFirst());break;}}