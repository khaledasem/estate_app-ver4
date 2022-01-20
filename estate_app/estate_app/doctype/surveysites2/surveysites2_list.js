frappe.listview_settings['SurveySites2'] = {
    colwidths: {"subject": 12},
    add_fields: ["Status", "name", "constr_site_status"
        ],

    //  filters: [
    //     ['is_replaced', '!=', 'Yes']
    // ],
    hide_name_column: true, // hide the last column which shows the `name`
    get_indicator(doc) {
        // customize indicator color --------------

        // frappe.msgprint(doc.constr_site_status)
        if (doc.constr_site_status == 'جاري اعداد الوثيقة') {
            return [__("جاري اعداد الوثيقة"), "yellow", "constr_site_status,=,جاري اعداد الوثيقة"];
          }
    
    },



};