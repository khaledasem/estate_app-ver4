// Copyright (c) 2016, khaled and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["NewSitesReport"] = {
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
			
		 },
		  {
		 	"fieldname": "evaluate",
			"label": __("Evaluation"),
			"fieldtype": "Select",
			"options": ['','OK', 'Resurvey'],
		 	"width": 80,
		 	"reqd": 0,
			
		 },
		  {
		 	"fieldname": "is_replaced",
			"label": __("Is Replaced"),
			"fieldtype": "Select",
			"options": ['','Yes', 'No'],
		 	"width": 80,
		 	"reqd": 0,
			
		 }

	],
	 "formatter": function(value, row, column, data, default_formatter) {
	 	value = default_formatter(value, row, column, data);
	 	// Insert your formatting code
	 	 // msgprint(column.id)
	 	// msgprint(data.contract_status)
	 	if (column.id == "حالة_العقد") {
	 		console.log('++++++++++++++++++++++++')
            console.log(data.حالة_العقد)
			let contract_status_h = data.حالة_العقد
            if(contract_status_h=="Successful"){
                 value = "<span style='color: green;font-weight:bold'>" + value + "</span>";
            }else if(contract_status_h == "In Progress"){
                 value = "<span style='color:#AAAA00 ;font-weight:bold'>" + value + "</span>";
            } else if(contract_status_h=="Failed"){
                 value = "<span style='color: red;font-weight:bold'>" + value + "</span>";
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

             if (column.id == "evaluation_" ) {
             	 if(data.evaluation_=="OK"){
                                    	value = '<b style="color: green;">'+value+'</b>';
                                    }
             	 else if(data.evaluation_=="Resurvey"){
             	 
                                    	value = '<b style="color: red;">'+value+'</b>';
                                    
                 }
			  }

			   if (column.id == "is_replaced_" ) {
             	 if(data.is_replaced_=="Yes"){
                                    	value = '<b style="color: yelow;">'+value+'</b>';
                                    }
             	 else if(data.is_replaced_=="No"){
             	 
                                    	value = '<b style="color:blue;">'+value+'</b>';
                                    
                 }
			  }
	 	return value
	 }

};
