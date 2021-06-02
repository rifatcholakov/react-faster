jQuery(document).ready(function ($) {
	("use strict");

	/*
	|--------------------------------------------------------------------------
	| Developer mode
	|--------------------------------------------------------------------------
	|
	| Set to true - it will allow printing in the console. Alsways check for this
	| variables when running tests so you dont forget about certain console.logs.
	| Id needed for development testing this variable should be used.
	|
	*/
	const devMode = function () {
		return true;
	};

	// Disable console.log for production site.
	if (!devMode()) {
		console.log = function () {};
	}

	// ==================================================================
	// Mobile menu
	// ==================================================================
	const navigation = document.querySelector(".site-nav");
	const buttonMobile = document.querySelector(".nav-mobile");
	const buttonMobileIcon = document.querySelector(".nav-mobile > i");

	buttonMobile.addEventListener("click", () => {
		navigation.classList.toggle("open");
		buttonMobileIcon.classList.toggle("fa-bars");
		buttonMobileIcon.classList.toggle("fa-times");
		document.querySelector("body").classList.toggle("overflow");
	});
	// ==================================================================

	// ==================================================================
	// Tab menu
	// ==================================================================
	let tabMenus = [...document.querySelectorAll("[data-tab-menu-name]")].map(
		(tabMenu) => tabMenu.dataset.tabMenuName
	);

	tabMenus.map((tabMenu) => manageTabMenu(tabMenu));

	function manageTabMenu(menuName) {
		const tabLinks = [
			...document.querySelectorAll(
				`[data-tab-menu-controls="${menuName}"] .tab-link`
			),
		];

		const tabPanels = [
			...document.querySelectorAll(
				`[data-tab-menu-name="${menuName}"] .tab-panel`
			),
		];

		tabLinks.map((tabLink) =>
			tabLink.addEventListener("click", (event) =>
				setActiveTabAndPanel(event, tabLinks, tabPanels)
			)
		);
	}

	function setActiveTabAndPanel(event, tabs, panels) {
		const clickedTab = event.target;

		for (let i = 0; i < tabs.length; i++) {
			tabs[i].classList.remove("is-tab-link-active");
			panels[i].classList.remove("is-tab-panel-active");

			if (clickedTab === tabs[i]) {
				tabs[i].classList.add("is-tab-link-active");
				panels[i].classList.add("is-tab-panel-active");
			}
		}
	}
	// ==================================================================
});
