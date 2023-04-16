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
		el.innerHTML = '<span style="font-family: \'icotamb\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icotamb-basket1902': '&#xe946;',
		'icotamb-user1902': '&#xe945;',
		'icotamb-bubble': '&#xe927;',
		'icotamb-bubble2': '&#xe928;',
		'icotamb-calendar': '&#xe929;',
		'icotamb-calendar3': '&#xe92a;',
		'icotamb-calendar4': '&#xe92b;',
		'icotamb-camera': '&#xe92c;',
		'icotamb-cart2': '&#xe92d;',
		'icotamb-creditcard': '&#xe92e;',
		'icotamb-email': '&#xe92f;',
		'icotamb-error': '&#xe930;',
		'icotamb-files': '&#xe931;',
		'icotamb-files2': '&#xe932;',
		'icotamb-hand': '&#xe933;',
		'icotamb-hand2': '&#xe934;',
		'icotamb-home': '&#xe935;',
		'icotamb-hour': '&#xe936;',
		'icotamb-hour2': '&#xe937;',
		'icotamb-lock2': '&#xe938;',
		'icotamb-logout': '&#xe939;',
		'icotamb-menu': '&#xe93a;',
		'icotamb-mobile': '&#xe93b;',
		'icotamb-photo': '&#xe93c;',
		'icotamb-play': '&#xe93d;',
		'icotamb-print': '&#xe93e;',
		'icotamb-profile': '&#xe93f;',
		'icotamb-search': '&#xe940;',
		'icotamb-share': '&#xe941;',
		'icotamb-shop-bag': '&#xe942;',
		'icotamb-shoppingbasket': '&#xe943;',
		'icotamb-time': '&#xe944;',
		'icotamb-basket3': '&#xe926;',
		'icotamb-pause': '&#xe91d;',
		'icotamb-login': '&#xe91c;',
		'icotamb-sad2': '&#xe919;',
		'icotamb-smiley3': '&#xe91a;',
		'icotamb-sad': '&#xe91b;',
		'icotamb-store': '&#xe917;',
		'icotamb-store2': '&#xe918;',
		'icotamb-cart': '&#xe915;',
		'icotamb-return2': '&#xe910;',
		'icotamb-return': '&#xe911;',
		'icotamb-diaper': '&#xe912;',
		'icotamb-card-orch': '&#xe913;',
		'icotamb-technique': '&#xe914;',
		'icotamb-truck5': '&#xe90f;',
		'icotamb-truck4': '&#xe90c;',
		'icotamb-card2': '&#xe916;',
		'icotamb-idea': '&#xe907;',
		'icotamb-unlock': '&#xe908;',
		'icotamb-baby_boy2': '&#xe90d;',
		'icotamb-baby_girl': '&#xe90e;',
		'icotamb-smiley2': '&#xe909;',
		'icotamb-retour': '&#xe90a;',
		'icotamb-truck2': '&#xe90b;',
		'icotamb-headphone': '&#xe903;',
		'icotamb-lock': '&#xe904;',
		'icotamb-smiley': '&#xe905;',
		'icotamb-truck': '&#xe906;',
		'icotamb-basket': '&#xe902;',
		'icotamb-bill': '&#xe900;',
		'icotamb-box': '&#xe901;',
		'icotamb-box2': '&#xe91e;',
		'icotamb-check': '&#xe91f;',
		'icotamb-heart': '&#xe920;',
		'icotamb-home1': '&#xe921;',
		'icotamb-shopping-cart': '&#xe922;',
		'icotamb-trash': '&#xe923;',
		'icotamb-trash-2': '&#xe924;',
		'icotamb-user2': '&#xe925;',
		'icotamb-location': '&#xe947;',
		'icotamb-user': '&#xe971;',
		'icotamb-smile': '&#xe9e1;',
		'icotamb-smile2': '&#xe9e2;',
		'icotamb-facebook': '&#xea90;',
		'icotamb-instagram': '&#xea92;',
		'icotamb-twitter': '&#xea96;',
		'icotamb-youtube': '&#xea9d;',
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
		c = c.match(/icotamb-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
