<?php

/**
 * Contao Open Source CMS
 * 
 * Copyright (C) 2005-2014 Leo Feyer
 * 
 * @package Sort_wizard
 * @link    http://contao.org
 * @license http://www.gnu.org/licenses/lgpl-3.0.html LGPL
 */


/**
 * Register the namespaces
 */
ClassLoader::addNamespaces(array
(
	'SortWizard',
));


/**
 * Register the classes
 */
ClassLoader::addClasses(array
(
	// Widgets
	'SortWizard\SortWizard' => 'system/modules/sort_wizard/widgets/SortWizard.php',
));
