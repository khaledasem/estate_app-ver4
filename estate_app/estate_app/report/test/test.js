// Copyright (c) 2016, khaled and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["test"] = {
	"filters": [
	{
			"fieldname": "site_name",
			"label": __("Site Name"),
			"fieldtype": "Data",
			"width": 100,
			"reqd": 0,
		},
		{
			"fieldname": "from",
			"label": __("From Date"),
			"fieldtype": "Date",
			"width": 80,
			"reqd": 1,
			"default": dateutil.year_start()
		},
		{
			"fieldname": "to",
			"label": __("To Date"),
			"fieldtype": "Date",
			"width": 80,
			"reqd": 1,
			"default": dateutil.year_end()
		},
		{
			"fieldname": "government2",
			"label": __("المحافظة"),
			"fieldtype": "Link",
			"options": "govern1",
			"width": 80,
			"reqd": 0,
			
		},
		{
			"fieldname": "site_importance",
			"label": __("أهمية الموقع"),
			"fieldtype": "Select",
			"options": [ '', 'A', 'B', 'C' ],
			"width": 80,
			"reqd": 0,
			
		},
		{
			"fieldname": "contract_status",
			"label": __("حالة العقد"),
			"fieldtype": "Select",
			"options": [ '', 'Successful', 'In Progress', 'Failed' ],
			"width": 80,
			"reqd": 0,
			
		},
		{
			"fieldname": "survey_type",
			"label": __("نوع المسح"),
			"fieldtype": "Select",
			"options": [ '', 'New', 'بديل موقع في الخدمات', 'بديل موقع في المشاريع' ],
			"width": 80,
			"reqd": 0,
			
		},
		{
		 	"fieldname": "engineer_name",
			"label": __("اسم المهندس"),
			"fieldtype": "Link",
			"options": "engineer",
		 	"width": 80,
		 	"reqd": 0,
			
		 },
		 {
		 	"fieldname": "contract_by",
			"label": __("اسم المتعاقد"),
			"fieldtype": "Link",
			"options": "contractor",
		 	"width": 80,
		 	"reqd": 0,
			
		 }
		// {
		// 	"fieldname": "survey_type",
		// 	"label": __(" "),
		// 	"fieldtype": "Select",
		// 	"options": [ '', 'New', 'بديل موقع في الخدمات', 'بديل موقع في المشاريع' ],
		// 	"width": 80,
		// 	"reqd": 0,
			
		// }
	],
	 "formatter": function(value, row, column, data, default_formatter) {
	 	value = default_formatter(value, row, column, data);
	 	// Insert your formatting code
	 	 // msgprint(column.id)
	 	// msgprint(data.contract_status)
	 	if (column.id == "حالة_العقد") {
							 		// msgprint(data.contract_status)
							 		// console.log('++++++++++++++++++++++++')
							 		// console.log(data.contract_status)
                                   if(data.حالة_العقد=="Successful"){
                                    	value = "<span style='color: green;font-weight:bold'>" + value + "</span>";
                                    	// console.log('++++++++++++++++++++++++')
                                    	// console.log(data.contract_status)
                                    } else if(data.contract_status=="In Progress"){
                                    value = "<span style='color: yelow;font-weight:bold'>" + value + "</span>";
                                    } else if(data.حالة_العقد=="Failed"){
                                    value = "<span style='color: red;font-weight:bold'>" + value + "</span>";
                                    } else if(data.contract_status=="--------------"){
                                    value = "<span style='color: blue;font-weight:bold'>" + value + "</span>";
                                    }
                        // msgprint(data.site_importance)

            }

        	if (column.id == "longitude1" || column.id == "latitude1"  || column.id == "اهمية_الخيار1"  || column.id == "نوع_البرج1" || column.id == "tower/pole_height(m)1" || column.id == "building_height(m)1") {
			 value = "<p style='margin:0px;padding-left:5px;background-color:#FFF2CC!important;'>"+ value+ "</p>"
            }

            if (column.id == "longitude2" || column.id == "latitude2"  || column.id == "اهمية_الخيار2" || column.id == "نوع_البرج2" || column.id == "tower/pole_height(m)2" || column.id == "building_height(m)2") {
			 value = "<p style='margin:0px;padding-left:5px;background-color:#D7ECB2!important;'>"+ value+ "</p>"
            }

            if (column.id == "longitude3" || column.id == "latitude3"  || column.id == "اهمية_الخيار3" || column.id == "نوع_البرج3" || column.id == "tower/pole_height(m)3" || column.id == "building_height(m)3") {
			 value = "<p style='margin:0px;padding-left:5px;background-color:#DED5C0!important;'>"+ value+ "</p>"
            }

            if (column.id == "longitude4" || column.id == "latitude4"  || column.id == "اهمية_الخيار4" || column.id == "نوع_البرج4" || column.id == "tower/pole_height(m)4" || column.id == "building_height(m)4") {
			 value = "<p style='margin:0px;padding-left:5px;background-color:#0ED3C0!important;'>"+ value+ "</p>"
            }
	 	return value
	 }

};
