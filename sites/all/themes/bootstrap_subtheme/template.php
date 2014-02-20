<?php
/**
 * Variables preprocess function for the "page" theming hook.
 */
function bootstrap_subtheme_preprocess_page(&$vars, $hook) {
	if (isset($vars['node'])) {
		// If the node type is "blog" the template suggestion will be "page--blog.tpl.php".
		$vars['theme_hook_suggestion'] = 'page__'.$vars['node']->type;
	}
}

function bootstrap_subtheme_preprocess_views_view(&$vars) {
  if ($vars['view']->name == 'member_list') {
    if (empty($vars['view']->exposed_input)) {
      $vars['rows'] = array();
      $vars['empty'] = '';
    }
  }
}
?>