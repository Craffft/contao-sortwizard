<?php

/**
 * Contao Open Source CMS
 * 
 * Copyright (C) 2005-2014 Leo Feyer
 * 
 * @package sortwizard
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
	'SortWizard\SortWizard' => 'system/modules/sortwizard/widgets/SortWizard.php',
));
