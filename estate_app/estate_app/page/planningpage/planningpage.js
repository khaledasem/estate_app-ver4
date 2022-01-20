frappe.pages['planningpage'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'planning page',
		single_column: true
	});
}