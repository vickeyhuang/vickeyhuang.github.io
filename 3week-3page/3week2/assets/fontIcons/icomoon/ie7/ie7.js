/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'fa-mail': '&#xf03b;',
		'fa-plus': '&#xf05d;',
		'fa-quill': '&#xe600;',
		'fa-redo': '&#xe601;',
		'fa-twitter': '&#xe608;',
		'fa-search': '&#xf002;',
		'fa-star': '&#xf005;',
		'fa-refresh': '&#xf021;',
		'fa-chain': '&#xf0c1;',
		'fa-resize': '&#xe603;',
		'fa-resize': '&#xe603;',
		'fa-notifications': '&#xe607;',
		'fa-notifications': '&#xe607;',
		'fa-more-horiz': '&#xe606;',
		'fa-notifications': '&#xe607;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/fa-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
