// Copyright (c) 2021, khaled and contributors
// For license information, please see license.txt

frappe.ui.form.on('NewSites', {



// #####################  setup ################################################
	setup: function(frm){
		//-------------------Define funchtion -------------------------------------------

		// console.log("setup func");

		// frm.set_query("site_name_services", function(){
		// 			return {
		// 				"filters": {
		// 				"evaluate": "OK"
		// 				}
		// 			};
		// 		}),

		frm.how_many_time_site_surveyed = function(frm){
			
			if (frm.doc.survey_type == 'New') {
				frm.set_df_property('how_many_time_site_surveyed', 'default', '1')
			

			} else if (frm.doc.survey_type == 'بديل موقع في الخدمات') {
			
			
				

			} else if (frm.doc.survey_type == "بديل موقع في المشاريع") {
					frm.set_df_property('old_sitename', 'options', 'SurveySites')

			} else {
					
			}
			frm.refresh_field('how_many_time_site_surveyed');
		},


		frm.check_tower_type1 = function(frm){
			// frm.doc.tower_pole_height1 = ''

			if (frm.doc.tower_type1 == 'Tower') {
				// frm.doc.building_height1 = ''
				// frm.doc.number_of_poles1 = ''
				// frm.doc.number_of_rooms1 = ''
				// frm.doc.sharing_tower_with1 = ''
				frm.set_df_property('tower_pole_height1', 'hidden', 0)
				frm.set_df_property('building_height1', 'hidden', 1)
				frm.set_df_property('number_of_poles1', 'hidden', 1)
				frm.set_df_property('number_of_rooms1', 'hidden', 1)
				frm.set_df_property('sharing_tower_with1', 'hidden', 1)
				console.log("tower");

			} else if (frm.doc.tower_type1 == 'Pole') {
				// frm.doc.sharing_tower_with1 = ''
				// frm.doc.number_of_rooms1 = ''
				frm.set_df_property('tower_pole_height1', 'hidden', 0)
				frm.set_df_property('building_height1', 'hidden', 0)
				frm.set_df_property('number_of_poles1', 'hidden', 0)
				frm.set_df_property('number_of_rooms1', 'hidden', 1)
				frm.set_df_property('sharing_tower_with1', 'hidden', 1)
				console.log("pole");

			} else if (frm.doc.tower_type1 == 'Rooms+Pole') {
				// frm.doc.sharing_tower_with1 = ''
				// frm.doc.number_of_poles1 = ''
				frm.set_df_property('tower_pole_height1', 'hidden', 0)
				frm.set_df_property('building_height1', 'hidden', 1)
				frm.set_df_property('number_of_poles1', 'hidden', 1)
				frm.set_df_property('number_of_rooms1', 'hidden', 0)
				frm.set_df_property('sharing_tower_with1', 'hidden', 1)
				console.log("rooms");

			} else if (frm.doc.tower_type1 == 'Sharing') {
				// frm.doc.building_height1 = ''
				// frm.doc.number_of_poles1 = ''
				// frm.doc.number_of_rooms1 = ''
				frm.set_df_property('tower_pole_height1', 'hidden', 0)
				frm.set_df_property('building_height1', 'hidden', 1)
				frm.set_df_property('number_of_poles1', 'hidden', 1)
				frm.set_df_property('number_of_rooms1', 'hidden', 1)
				frm.set_df_property('sharing_tower_with1', 'hidden', 0)
				console.log("sharing");
			} else if (frm.doc.tower_type1 == 'Others') {
				// frm.doc.building_height1 = ''
				// frm.doc.number_of_poles1 = ''
				// frm.doc.number_of_rooms1 = ''
				// frm.doc.sharing_tower_with1 = ''
				frm.set_df_property('tower_pole_height1', 'hidden', 0)
				frm.set_df_property('building_height1', 'hidden', 1)
				frm.set_df_property('number_of_poles1', 'hidden', 1)
				frm.set_df_property('number_of_rooms1', 'hidden', 1)
				frm.set_df_property('sharing_tower_with1', 'hidden', 1)
				console.log("sharing");
			} else {
				frm.set_df_property('tower_pole_height1', 'hidden', 1)
				frm.set_df_property('building_height1', 'hidden', 1)
				frm.set_df_property('number_of_poles1', 'hidden', 1)
				frm.set_df_property('number_of_rooms1', 'hidden', 1)
				frm.set_df_property('sharing_tower_with1', 'hidden', 1)

			}

		},
		frm.check_tower_type2 = function(frm){
			// frm.doc.tower_pole_height1 = ''

			if (frm.doc.tower_type2 == 'Tower') {
				// frm.doc.building_height1 = ''
				// frm.doc.number_of_poles1 = ''
				// frm.doc.number_of_rooms1 = ''
				// frm.doc.sharing_tower_with1 = ''
				frm.set_df_property('tower_pole_height2', 'hidden', 0)
				frm.set_df_property('building_height2', 'hidden', 1)
				frm.set_df_property('number_of_poles2', 'hidden', 1)
				frm.set_df_property('number_of_rooms2', 'hidden', 1)
				frm.set_df_property('sharing_tower_with2', 'hidden', 1)
				console.log("tower");

			} else if (frm.doc.tower_type2 == 'Pole') {
				// frm.doc.sharing_tower_with1 = ''
				// frm.doc.number_of_rooms1 = ''
				frm.set_df_property('tower_pole_height2', 'hidden', 0)
				frm.set_df_property('building_height2', 'hidden', 0)
				frm.set_df_property('number_of_poles2', 'hidden', 0)
				frm.set_df_property('number_of_rooms2', 'hidden', 1)
				frm.set_df_property('sharing_tower_with2', 'hidden', 1)
				console.log("pole");

			} else if (frm.doc.tower_type2 == 'Rooms+Pole') {
				// frm.doc.sharing_tower_with1 = ''
				// frm.doc.number_of_poles1 = ''
				frm.set_df_property('tower_pole_height2', 'hidden', 0)
				frm.set_df_property('building_height2', 'hidden', 1)
				frm.set_df_property('number_of_poles2', 'hidden', 1)
				frm.set_df_property('number_of_rooms2', 'hidden', 0)
				frm.set_df_property('sharing_tower_with2', 'hidden', 1)
				console.log("rooms");

			} else if (frm.doc.tower_type2 == 'Sharing') {
				// frm.doc.building_height1 = ''
				// frm.doc.number_of_poles1 = ''
				// frm.doc.number_of_rooms1 = ''
				frm.set_df_property('tower_pole_height2', 'hidden', 0)
				frm.set_df_property('building_height2', 'hidden', 1)
				frm.set_df_property('number_of_poles2', 'hidden', 1)
				frm.set_df_property('number_of_rooms2', 'hidden', 1)
				frm.set_df_property('sharing_tower_with2', 'hidden', 0)
				console.log("sharing");
			} else if (frm.doc.tower_type2 == 'Others') {
				// frm.doc.building_height2 = ''
				// frm.doc.number_of_poles2 = ''
				// frm.doc.number_of_rooms2 = ''
				// frm.doc.sharing_tower_with2 = ''
				frm.set_df_property('tower_pole_height2', 'hidden', 0)
				frm.set_df_property('building_height2', 'hidden', 1)
				frm.set_df_property('number_of_poles2', 'hidden', 1)
				frm.set_df_property('number_of_rooms2', 'hidden', 1)
				frm.set_df_property('sharing_tower_with2', 'hidden', 1)
				console.log("sharing");
			} else {
				frm.set_df_property('tower_pole_height2', 'hidden', 1)
				frm.set_df_property('building_height2', 'hidden', 1)
				frm.set_df_property('number_of_poles2', 'hidden', 1)
				frm.set_df_property('number_of_rooms2', 'hidden', 1)
				frm.set_df_property('sharing_tower_with2', 'hidden', 1)

			}

		},


		frm.check_tower_type3 = function(frm){
			// frm.doc.tower_pole_height1 = ''

			if (frm.doc.tower_type3 == 'Tower') {
				// frm.doc.building_height1 = ''
				// frm.doc.number_of_poles1 = ''
				// frm.doc.number_of_rooms1 = ''
				// frm.doc.sharing_tower_with1 = ''
				frm.set_df_property('tower_pole_height3', 'hidden', 0)
				frm.set_df_property('building_height3', 'hidden', 1)
				frm.set_df_property('number_of_poles3', 'hidden', 1)
				frm.set_df_property('number_of_rooms3', 'hidden', 1)
				frm.set_df_property('sharing_tower_with3', 'hidden', 1)
				console.log("tower");

			} else if (frm.doc.tower_type3 == 'Pole') {
				// frm.doc.sharing_tower_with1 = ''
				// frm.doc.number_of_rooms1 = ''
				frm.set_df_property('tower_pole_height3', 'hidden', 0)
				frm.set_df_property('building_height3', 'hidden', 0)
				frm.set_df_property('number_of_poles3', 'hidden', 0)
				frm.set_df_property('number_of_rooms3', 'hidden', 1)
				frm.set_df_property('sharing_tower_with3', 'hidden', 1)
				console.log("pole");

			} else if (frm.doc.tower_type3 == 'Rooms+Pole') {
				// frm.doc.sharing_tower_with1 = ''
				// frm.doc.number_of_poles1 = ''
				frm.set_df_property('tower_pole_height3', 'hidden', 0)
				frm.set_df_property('building_height3', 'hidden', 1)
				frm.set_df_property('number_of_poles3', 'hidden', 1)
				frm.set_df_property('number_of_rooms3', 'hidden', 0)
				frm.set_df_property('sharing_tower_with3', 'hidden', 1)
				console.log("rooms");

			} else if (frm.doc.tower_type3 == 'Sharing') {
				// frm.doc.building_height1 = ''
				// frm.doc.number_of_poles1 = ''
				// frm.doc.number_of_rooms1 = ''
				frm.set_df_property('tower_pole_height3', 'hidden', 0)
				frm.set_df_property('building_height3', 'hidden', 1)
				frm.set_df_property('number_of_poles3', 'hidden', 1)
				frm.set_df_property('number_of_rooms3', 'hidden', 1)
				frm.set_df_property('sharing_tower_with3', 'hidden', 0)
				console.log("sharing");
			} else if (frm.doc.tower_type3 == 'Others') {
				// frm.doc.building_height2 = ''
				// frm.doc.number_of_poles2 = ''
				// frm.doc.number_of_rooms2 = ''
				// frm.doc.sharing_tower_with2 = ''
				frm.set_df_property('tower_pole_height3', 'hidden', 0)
				frm.set_df_property('building_height3', 'hidden', 1)
				frm.set_df_property('number_of_poles3', 'hidden', 1)
				frm.set_df_property('number_of_rooms3', 'hidden', 1)
				frm.set_df_property('sharing_tower_with3', 'hidden', 1)
				console.log("sharing");
			} else {
				frm.set_df_property('tower_pole_height3', 'hidden', 1)
				frm.set_df_property('building_height3', 'hidden', 1)
				frm.set_df_property('number_of_poles3', 'hidden', 1)
				frm.set_df_property('number_of_rooms3', 'hidden', 1)
				frm.set_df_property('sharing_tower_with3', 'hidden', 1)

			}

		},

		frm.check_tower_type4 = function(frm){
			// frm.doc.tower_pole_height1 = ''

			if (frm.doc.tower_type4 == 'Tower') {
				// frm.doc.building_height1 = ''
				// frm.doc.number_of_poles1 = ''
				// frm.doc.number_of_rooms1 = ''
				// frm.doc.sharing_tower_with1 = ''
				frm.set_df_property('tower_pole_height4', 'hidden', 0)
				frm.set_df_property('building_height4', 'hidden', 1)
				frm.set_df_property('number_of_poles4', 'hidden', 1)
				frm.set_df_property('number_of_rooms4', 'hidden', 1)
				frm.set_df_property('sharing_tower_with4', 'hidden', 1)
				console.log("tower");

			} else if (frm.doc.tower_type4 == 'Pole') {
				// frm.doc.sharing_tower_with1 = ''
				// frm.doc.number_of_rooms1 = ''
				frm.set_df_property('tower_pole_height4', 'hidden', 0)
				frm.set_df_property('building_height4', 'hidden', 0)
				frm.set_df_property('number_of_poles4', 'hidden', 0)
				frm.set_df_property('number_of_rooms4', 'hidden', 1)
				frm.set_df_property('sharing_tower_with4', 'hidden', 1)
				console.log("pole");

			} else if (frm.doc.tower_type4 == 'Rooms+Pole') {
				// frm.doc.sharing_tower_with1 = ''
				// frm.doc.number_of_poles1 = ''
				frm.set_df_property('tower_pole_height4', 'hidden', 0)
				frm.set_df_property('building_height4', 'hidden', 1)
				frm.set_df_property('number_of_poles4', 'hidden', 1)
				frm.set_df_property('number_of_rooms4', 'hidden', 0)
				frm.set_df_property('sharing_tower_with4', 'hidden', 1)
				console.log("rooms");

			} else if (frm.doc.tower_type4 == 'Sharing') {
				// frm.doc.building_height1 = ''
				// frm.doc.number_of_poles1 = ''
				// frm.doc.number_of_rooms1 = ''
				frm.set_df_property('tower_pole_height4', 'hidden', 0)
				frm.set_df_property('building_height4', 'hidden', 1)
				frm.set_df_property('number_of_poles4', 'hidden', 1)
				frm.set_df_property('number_of_rooms4', 'hidden', 1)
				frm.set_df_property('sharing_tower_with4', 'hidden', 0)
				console.log("sharing");
			} else if (frm.doc.tower_type4 == 'Others') {
				// frm.doc.building_height2 = ''
				// frm.doc.number_of_poles2 = ''
				// frm.doc.number_of_rooms2 = ''
				// frm.doc.sharing_tower_with2 = ''
				frm.set_df_property('tower_pole_height4', 'hidden', 0)
				frm.set_df_property('building_height4', 'hidden', 1)
				frm.set_df_property('number_of_poles4', 'hidden', 1)
				frm.set_df_property('number_of_rooms4', 'hidden', 1)
				frm.set_df_property('sharing_tower_with4', 'hidden', 1)
				console.log("sharing");
			} else {
				frm.set_df_property('tower_pole_height4', 'hidden', 1)
				frm.set_df_property('building_height4', 'hidden', 1)
				frm.set_df_property('number_of_poles4', 'hidden', 1)
				frm.set_df_property('number_of_rooms4', 'hidden', 1)
				frm.set_df_property('sharing_tower_with4', 'hidden', 1)

			}

		},
		//---------- to set select of cchoice_contracted contracted in service department --------------------------
		frm.set_choice_contracted = function(frm){

			if (frm.doc.number_of_choices == '1') {
				frm.set_df_property('choice_contracted', 'options',['', '1'])
				
			} else if (frm.doc.number_of_choices == '2') {
				frm.set_df_property('choice_contracted', 'options',['', '1', '2'])
				
				
			} else if (frm.doc.number_of_choices == '3') {
				frm.set_df_property('choice_contracted', 'options',['', '1', '2', '3'])
				
				
			} else if (frm.doc.number_of_choices == '4') {
				frm.set_df_property('choice_contracted', 'options',['', '1', '2', '3', '4'])
				
				
			} else {
				frm.set_df_property('choice_contracted', 'options', [''])
				
			}




			frm.refresh_field('choice_contracted');
		},
		//-----------------------------end-------------------------------------------------------------------------


		frm.chech_number_of_choice = function(frm){
			if (frm.doc.number_of_choices == '1') {
				frm.set_df_property('sec_brk_choice1', 'hidden', 0)
				frm.set_df_property('sec_brk_choice2', 'hidden', 1)
				frm.set_df_property('sec_brk_choice3', 'hidden', 1)
				frm.set_df_property('sec_brk_choice4', 'hidden', 1)

			} else if (frm.doc.number_of_choices == 2) {
				frm.set_df_property('sec_brk_choice1', 'hidden', 0)
				frm.set_df_property('sec_brk_choice2', 'hidden', 0)
				frm.set_df_property('sec_brk_choice3', 'hidden', 1)
				frm.set_df_property('sec_brk_choice4', 'hidden', 1)

			} else if (frm.doc.number_of_choices == 3) {
				frm.set_df_property('sec_brk_choice1', 'hidden', 0)
				frm.set_df_property('sec_brk_choice2', 'hidden', 0)
				frm.set_df_property('sec_brk_choice3', 'hidden', 0)
				frm.set_df_property('sec_brk_choice4', 'hidden', 1)

			} else if (frm.doc.number_of_choices == 4) {
				frm.set_df_property('sec_brk_choice1', 'hidden', 0)
				frm.set_df_property('sec_brk_choice2', 'hidden', 0)
				frm.set_df_property('sec_brk_choice3', 'hidden', 0)
				frm.set_df_property('sec_brk_choice4', 'hidden', 0)

			} else {

			}
			frm.refresh_field('sec_brk_choice1');
			frm.refresh_field('sec_brk_choice2');
			frm.refresh_field('sec_brk_choice3');
			frm.refresh_field('sec_brk_choice4');
			// console.log("check number of choice function");

			frm.set_choice_contracted(frm);
		},

		frm.show_hide_old_site_name = function(frm){
			if (frm.doc.survey_type == 'بديل موقع في الخدمات') {
				frm.set_df_property('old_sitename', 'hidden', 0)
				frm.set_df_property('old_sitename', 'options', 'NewSites')

				// frm.set_query("old_sitename", function(){
				// 	return {
				// 		"filters": [
				// 		["NewSites", "name", "=", "AMN1003"]
				// 		]
				// 	}
				// });		

			} else if (frm.doc.survey_type == "بديل موقع في المشاريع") {
				frm.set_df_property('old_sitename', 'hidden', 0)
					frm.set_df_property('old_sitename', 'options', 'SurveySites2')

			} else if (frm.doc.survey_type == "بديل موقع عامل") {
				frm.set_df_property('old_sitename', 'hidden', 0)
					frm.set_df_property('old_sitename', 'options', 'Working_Sites')

			}else {
				frm.set_df_property('old_sitename', 'hidden', 1)				
			}

		},
		//--------------------End -------------------------------------------------------


		frm.show_hide_site_name_section = function(frm){
			if (frm.doc.survey_type == 'New') {
				frm.set_df_property('sec_brk1', 'hidden', 0)	

			} else if (frm.doc.survey_type) {
				if (frm.doc.old_sitename) {
					frm.set_df_property('sec_brk1', 'hidden', 0)
				}
				else {

					frm.set_df_property('sec_brk1', 'hidden', 1)
				}

			}else {
				frm.set_df_property('sec_brk1', 'hidden', 1)
							
			}

			frm.refresh_field('sec_brk1');

		},
		//--------------------End -------------------------------------------------------


		frm.show_hide_engineer_info_section = function(frm){
			if (frm.doc.site_name && frm.doc.site_name_arabic && frm.doc.site_importance && 
			frm.doc.number_of_choices && frm.doc.government2 && frm.doc.modairiah && 
			frm.doc.area_name && frm.doc.area_type && frm.doc.sun_plate ) 
			{
				frm.set_df_property('section_break_engineer_info', 'hidden', 0)	

			}
			else {
				frm.set_df_property('section_break_engineer_info', 'hidden', 1)
							
			}

			frm.refresh_field('section_break_engineer_info');

		},
		//--------------------End -------------------------------------------------------

				


   //------------------------------------------------------------------------------------------------------

		frm.contract_status_onChange = function(frm) {
				if(frm.doc.contract_status == 'Successful'){
					frm.set_df_property('contract_failed_reason', 'hidden', 1)
					frm.set_df_property('choice_contracted', 'hidden', 0)

					frm.set_df_property('area_contracted', 'hidden', 0)
					frm.set_df_property('road_to_site_ready', 'hidden', 0)
					frm.set_df_property('elect_generator_place', 'hidden', 0)
					frm.set_df_property('elect_generator_area', 'hidden', 0)
					frm.set_df_property('general_elect_available', 'hidden', 0)
					frm.set_df_property('elect_off_time', 'hidden', 0)

				} else if(frm.doc.contract_status == 'In Progress'){
					frm.set_df_property('contract_failed_reason', 'hidden', 1)
					frm.set_df_property('choice_contracted', 'hidden', 1)
					frm.set_df_property('area_contracted', 'hidden', 1)
					frm.set_df_property('road_to_site_ready', 'hidden', 1)
					frm.set_df_property('elect_generator_place', 'hidden', 1)
					frm.set_df_property('elect_generator_area', 'hidden', 1)
					frm.set_df_property('general_elect_available', 'hidden', 1)
					frm.set_df_property('elect_off_time', 'hidden', 1)

				} else if(frm.doc.contract_status == 'Failed'){
					frm.set_df_property('contract_failed_reason', 'hidden', 0)
					frm.set_df_property('choice_contracted', 'hidden', 1)
					frm.set_df_property('area_contracted', 'hidden', 1)
					frm.set_df_property('road_to_site_ready', 'hidden', 1)
					frm.set_df_property('elect_generator_place', 'hidden', 1)
					frm.set_df_property('elect_generator_area', 'hidden', 1)
					frm.set_df_property('general_elect_available', 'hidden', 1)
					frm.set_df_property('elect_off_time', 'hidden', 1)

				}

		}
	
	},
	// ##############################################  end setup ################################################





	// ####################################################  Refresh ################################################
	 refresh: function(frm) {

		//-------------- disable some field if user role is diff-------------------------

		console.log("user_roles: kkkkk--------------");
		console.log(frappe.user_roles);
	 	if (frappe.user_roles.includes("PlanningRole")){
	 		// console.log("user_roles: Planning User");
	 	} else if (frappe.user_roles.includes("ServicesRole")) {

	 		// frm.set_df_property('service_section', 'collapse', 0)

	 	

	 		frm.set_df_property('evaluate_section', 'hidden', 1)

	 		frm.set_df_property('survey_type', 'read_only', 1)
	 		frm.set_df_property('old_sitename', 'read_only', 1)
	 		frm.set_df_property('site_name', 'read_only', 1)
	 		frm.set_df_property('site_name_arabic', 'read_only', 1)
	 		frm.set_df_property('site_importance', 'read_only', 1)
	 		frm.set_df_property('number_of_choices', 'read_only', 1)
	 		frm.set_df_property('government2', 'read_only', 1)
	 		frm.set_df_property('modairiah', 'read_only', 1)
	 		frm.set_df_property('area_name', 'read_only', 1)
	 		frm.set_df_property('area_type', 'read_only', 1)
	 		frm.set_df_property('sun_plate', 'read_only', 1)
	 		frm.set_df_property('engineer_name', 'read_only', 1)
	 		frm.set_df_property('engineer_note', 'read_only', 1)
	 		frm.set_df_property('survey_date', 'read_only', 1)
	 		frm.set_df_property('longitude1', 'read_only', 1)
	 		frm.set_df_property('latitude1', 'read_only', 1)
	 		frm.set_df_property('choice_priority1', 'read_only', 1)
	 		frm.set_df_property('longitude2', 'read_only', 1)
	 		frm.set_df_property('latitude2', 'read_only', 1)
	 		frm.set_df_property('choice_priority2', 'read_only', 1)
	 		frm.set_df_property('longitude3', 'read_only', 1)
	 		frm.set_df_property('latitude3', 'read_only', 1)
	 		frm.set_df_property('choice_priority3', 'read_only', 1)
	 		frm.set_df_property('longitude4', 'read_only', 1)
	 		frm.set_df_property('latitude4', 'read_only', 1)
	 		frm.set_df_property('choice_priority4', 'read_only', 1)
	 		
	 		frm.set_df_property('tower_type1', 'read_only', 1)
			frm.set_df_property('number_of_poles1', 'read_only', 1)
	 		frm.set_df_property('number_of_rooms1', 'read_only', 1)
	 		frm.set_df_property('sharing_tower_with1', 'read_only', 1)
			frm.set_df_property('tower_pole_height1', 'read_only', 1)
			frm.set_df_property('building_height1', 'read_only', 1)

			frm.set_df_property('tower_type2', 'read_only', 1)
			frm.set_df_property('number_of_poles2', 'read_only', 1)
	 		frm.set_df_property('number_of_rooms2', 'read_only', 1)
	 		frm.set_df_property('sharing_tower_with2', 'read_only', 1)
			frm.set_df_property('tower_pole_height2', 'read_only', 1)
			frm.set_df_property('building_height2', 'read_only', 1)

			frm.set_df_property('tower_type3', 'read_only', 1)
			frm.set_df_property('number_of_poles3', 'read_only', 1)
	 		frm.set_df_property('number_of_rooms3', 'read_only', 1)
	 		frm.set_df_property('sharing_tower_with3', 'read_only', 1)
			frm.set_df_property('tower_pole_height3', 'read_only', 1)
			frm.set_df_property('building_height3', 'read_only', 1)

			frm.set_df_property('tower_type4', 'read_only', 1)
			frm.set_df_property('number_of_poles4', 'read_only', 1)
	 		frm.set_df_property('number_of_rooms4', 'read_only', 1)
	 		frm.set_df_property('sharing_tower_with4', 'read_only', 1)
			frm.set_df_property('tower_pole_height4', 'read_only', 1)
			frm.set_df_property('building_height4', 'read_only', 1)

	 	} else if (frappe.user_roles.includes("System Manager")) {
	 		console.log("user_roles: System Manager");
	 		// 
	 		// 
	 		

	 	} else {
	 		console.log("user_roles: --------------");

	 	}

	 	frm.chech_number_of_choice(frm);
	 	frm.show_hide_old_site_name(frm);
	 	frm.show_hide_site_name_section(frm);
	 	frm.show_hide_engineer_info_section(frm);

		//---------------------------------------End----------------------------------------------

		

		// ----------- show hidden field if they have info --------------------------------------
		frm.check_tower_type1(frm)
		frm.check_tower_type2(frm)
		frm.check_tower_type3(frm)
		frm.check_tower_type4(frm)
		frm.contract_status_onChange(frm)
			
		//---------------------end-----------------------------------------------------





	
	 },
// #####################################  End Refresh ######################################


	//-------------- Show/Hide old_sitename based on ---------------------------------
	survey_type: function(frm){
		frm.doc.old_sitename = ''
		frm.show_hide_old_site_name(frm);
		frm.show_hide_site_name_section(frm)
	},
   //---------------------------------------End----------------------------------------------

//-------------- Show/Hide _sitename section based on ---------------------------------
	old_sitename: function(frm){
		
		frm.show_hide_site_name_section(frm)
	},
   //---------------------------------------End----------------------------------------------
 
			
	//-------------- ---------------------------------
	site_name: function(frm){
		frm.show_hide_engineer_info_section(frm);
	},
	//-------------- ---------------------------------

	//-------------- ---------------------------------
	site_name_arabic: function(frm){
		frm.show_hide_engineer_info_section(frm);
	},
	//-------------- ---------------------------------
	

	//-------------- ---------------------------------
	site_importance: function(frm){
		frm.show_hide_engineer_info_section(frm);
	},
	//-------------- ---------------------------------


	//-------------- ---------------------------------
	modairiah: function(frm){
		frm.show_hide_engineer_info_section(frm);
	},
	//-------------- ---------------------------------


	//-------------- ---------------------------------
	area_name: function(frm){
		frm.show_hide_engineer_info_section(frm);
	},
	//-------------- ---------------------------------


	//-------------- ---------------------------------
	area_type: function(frm){
		frm.show_hide_engineer_info_section(frm);
	},
	//-------------- ---------------------------------


	//-------------- ---------------------------------
	sun_plate: function(frm){
		frm.show_hide_engineer_info_section(frm);
	},
	//-------------- ---------------------------------


	//-------------- ---------------------------------
	government2: function(frm){
		frm.show_hide_engineer_info_section(frm)
		frm.set_query("modairiah", function(){
					return {
						"filters": {
						"government": frm.doc.government2
						}
					};
				}),
		frm.doc.modairiah=''
		frm.doc.area_name=''
		frm.refresh_field('modairiah');
		frm.refresh_field('area_name');

	},
   //---------------------------------------End----------------------------------------------






//-------------- Show/Hide choices based on choice number---------------------------------
		number_of_choices: function(frm){

			frm.chech_number_of_choice(frm);
			frm.show_hide_engineer_info_section(frm);

		},
//---------------------------------------End----------------------------------------------


//-------------- contract_status---------------------------------
		contract_status: function(frm){

			frm.contract_status_onChange(frm);
			

		},
//---------------------------------------End----------------------------------------------




//-------------- Show/Hide Tower Info ---------------------------------
		tower_type1: function(frm){
			frm.doc.tower_pole_height1 = ''
			frm.doc.building_height1 = ''
			frm.doc.number_of_poles1 = ''
			frm.doc.number_of_rooms1 = ''
			frm.doc.sharing_tower_with1 = ''
			frm.check_tower_type1(frm);
			
		},
		tower_type2: function(frm){
			frm.doc.tower_pole_height2 = ''
			frm.doc.building_height2 = ''
			frm.doc.number_of_poles2 = ''
			frm.doc.number_of_rooms1 = ''
			frm.doc.sharing_tower_with2 = ''
			frm.check_tower_type2(frm);
			
		},
		tower_type3: function(frm){
			frm.doc.tower_pole_height3 = ''
			frm.doc.building_height3 = ''
			frm.doc.number_of_poles3 = ''
			frm.doc.number_of_rooms3 = ''
			frm.doc.sharing_tower_with3 = ''
			frm.check_tower_type3(frm);
			
		},
		tower_type4: function(frm){
			frm.doc.tower_pole_height4 = ''
			frm.doc.building_height4 = ''
			frm.doc.number_of_poles4 = ''
			frm.doc.number_of_rooms4 = ''
			frm.doc.sharing_tower_with4 = ''
			frm.check_tower_type4(frm);
			
		},
//---------------------------------------End----------------------------------------------




//-------------- Sgeolocation_map --------------------------------------------------
		geolocation_map: function(frm){
			console.log(JSON.parse(frm.doc.geolocation_map));
			
			// frm.doc.geolocation_map.features[0] = "FeatureCollection";
			// frm.doc.geolocation_map.feature.type = "Feature";
			// frm.doc.geolocation_map.feature.geometry = "Feature";
			// frm.doc.geolocation_map.feature.type = "Feature";
			// frm.doc.geolocation_map.feature.type = "Feature";

		},
//---------------------------------------End----------------------------------------------

//-------------- see in Map----------------------------------
		see_in_map: function(frm){
			if (frm.doc.see_in_map == 'Yes'){
				 frm.set_df_property('geolocation_map', 'hidden', 0)
	 		
				if (frm.doc.number_of_choices == '1') {
					var site_name = frm.doc.site_name + "_1";
					console.log("see_in_map: "+ site_name);
						var lat_1 = frm.doc.latitude1;
						
						var long_1 = frm.doc.longitude1;
					 	var map = frm.get_field("geolocation_map").map;
						var latlng1 = L.latLng({'lat': lat_1, 'lng': long_1});
						var marker1 = L.marker(latlng1);
			
						map.flyTo(latlng1, map.getZoom());
						marker1.addTo(map);
						marker1.bindPopup(site_name).openPopup();

						frm.refresh_field('geolocation_map');
			
			} else if (frm.doc.number_of_choices == 2) {
			
			} else if (frm.doc.number_of_choices == 3) {
				
			} else if (frm.doc.number_of_choices == 4) {
				
			} else {

			}

			}
		},
//---------------------------------------End----------------------------------------------


// #################### onload_post_render #################################################

	// onload_post_render: function(frm) {
	// 	frm.add_custom_button('Create KML onload_post_render', ()=>{
	//   			frappe.msgprint(__('KML'));
	//   	})
	// },

// #################### END onload_post_render #################################################

// #################### onLoad #################################################
	 onload: function(frm) {
	  	

	  


	 	

	 	
	 },

	 // #################### END onload################################################



// #################### after save #################################################
	 after_save: function(frm){

	  
	 },
// #################### END after save #################################################


// #################### befor save #################################################
	  before_save: function(frm){


	  		//--------------- concatinate tower type--------------------------------
	  	if (frm.doc.tower_type1 == 'Tower') {
				frm.doc.tower_type_concat1 = 'Tower'

			} else if (frm.doc.tower_type1 == 'Pole') {
				if(frm.doc.number_of_poles1 == '1'){
					frm.doc.tower_type_concat1 = frm.doc.number_of_poles1 + ' Pole'	
				}
				else {
					frm.doc.tower_type_concat1 = frm.doc.number_of_poles1 + ' Poles'		
				}

			} else if (frm.doc.tower_type1 == 'Rooms+Pole') {
				if(frm.doc.number_of_rooms1 == '1'){
					frm.doc.tower_type_concat1 = frm.doc.number_of_rooms1 + ' Room+Pole'
				}
				else {
					frm.doc.tower_type_concat1 = frm.doc.number_of_rooms1 + ' Rooms+Pole'
				}

			} else if (frm.doc.tower_type1 == 'Sharing') {
				frm.doc.tower_type_concat1 = 'Sharing with '+ frm.doc.sharing_tower_with1 
				
			} else if (frm.doc.tower_type1 == 'Others') {
				frm.doc.tower_type_concat1 = 'Others'
				
			} else {
				

			}


			if (frm.doc.tower_type2 == 'Tower') {
				frm.doc.tower_type_concat2 = 'Tower'

			} else if (frm.doc.tower_type2 == 'Pole') {
				if(frm.doc.number_of_poles2 == '1'){
					frm.doc.tower_type_concat2 = frm.doc.number_of_poles2 + ' Pole'	
				}
				else {
					frm.doc.tower_type_concat2 = frm.doc.number_of_poles2 + ' Poles'		
				}

			} else if (frm.doc.tower_type2 == 'Rooms+Pole') {
				if(frm.doc.number_of_rooms2 == '1'){
					frm.doc.tower_type_concat2 = frm.doc.number_of_rooms2 + ' Room+Pole'
				}
				else {
					frm.doc.tower_type_concat2 = frm.doc.number_of_rooms2 + ' Rooms+Pole'
				}

			} else if (frm.doc.tower_type2 == 'Sharing') {
				frm.doc.tower_type_concat2 = 'Sharing with '+ frm.doc.sharing_tower_with2
				
			} else if (frm.doc.tower_type2 == 'Others') {
				frm.doc.tower_type_concat2 = 'Others'
				
			} else {
				

			}

			if (frm.doc.tower_type33 == 'Tower') {
				frm.doc.tower_type_concat3 = 'Tower'

			} else if (frm.doc.tower_type3 == 'Pole') {
				if(frm.doc.number_of_poles3 == '1'){
					frm.doc.tower_type_concat3 = frm.doc.number_of_poles3 + ' Pole'	
				}
				else {
					frm.doc.tower_type_concat3 = frm.doc.number_of_poles3 + ' Poles'		
				}

			} else if (frm.doc.tower_type3 == 'Rooms+Pole') {
				if(frm.doc.number_of_rooms3 == '1'){
					frm.doc.tower_type_concat3 = frm.doc.number_of_rooms3 + ' Room+Pole'
				}
				else {
					frm.doc.tower_type_concat3 = frm.doc.number_of_rooms3 + ' Rooms+Pole'
				}

			} else if (frm.doc.tower_type3 == 'Sharing') {
				frm.doc.tower_type_concat3 = 'Sharing with '+ frm.doc.sharing_tower_with3
				
			} else if (frm.doc.tower_type3 == 'Others') {
				frm.doc.tower_type_concat3 = 'Others'
				
			} else {
				

			}

			if (frm.doc.tower_type4 == 'Tower') {
				frm.doc.tower_type_concat4 = 'Tower'

			} else if (frm.doc.tower_type4 == 'Pole') {
				if(frm.doc.number_of_poles4 == '1'){
					frm.doc.tower_type_concat4 = frm.doc.number_of_poles4 + ' Pole'	
				}
				else {
					frm.doc.tower_type_concat4 = frm.doc.number_of_poles4 + ' Poles'		
				}

			} else if (frm.doc.tower_type4 == 'Rooms+Pole') {
				if(frm.doc.number_of_rooms4 == '1'){
					frm.doc.tower_type_concat4 = frm.doc.number_of_rooms4 + ' Room+Pole'
				}
				else {
					frm.doc.tower_type_concat4 = frm.doc.number_of_rooms4 + ' Rooms+Pole'
				}

			} else if (frm.doc.tower_type4 == 'Sharing') {
				frm.doc.tower_type_concat4 = 'Sharing with '+ frm.doc.sharing_tower_with4
				
			} else if (frm.doc.tower_type4 == 'Others') {
				frm.doc.tower_type_concat4 = 'Others'
				
			} else {
				

			}
			//-----------------------------end concatinate-----------------------------

	  	frm.doc.see_in_map = 'No'

	  	frappe.call({
	  		method: "estate_app.estate_app.doctype.newsites.myapi.get_government_info",
	  		args: {'city': frm.doc.government2},
	  		callback: function(r) {
	  			console.log(r)
	  			if(r.message.length>0){
	  				if(frm.doc.survey_type == 'New')
	  				{
	  					let city_code = r.message[0].code;
	  					let last_code = r.message[0].last_code;
	  					let used_code_num = Number(last_code) + 1;
	  					let used_code= city_code + used_code_num + '-1';
	  					frm.doc.survey_code = used_code;

	  					frm.call({
	  						method: "estate_app.estate_app.doctype.newsites.myapi.set_last_code",
	  						args: {'name': frm.doc.government2, 'last_code': used_code_num},
	  						callback: function(r) {
	  						}
	  					})
	  					console.log(last_code)

	  				}
	  				else if(frm.doc.survey_type == 'بديل موقع في الخدمات'){
	  					let str = frm.doc.old_sitename;
	  					let curr_code = str.substring(0, 8);
	  					let old_num = str.substring(str.length - 1);
	  					let curr_num = Number(old_num) + 1;
	  					let used_code= curr_code + curr_num ;
	  					frm.doc.survey_code = used_code;



	  					frappe.call({
	  						method: "estate_app.estate_app.doctype.newsites.myapi.set_is_replaced_of_old_site",
	  						args: {'old_sitename': frm.doc.old_sitename},
	  						callback: function(r) {
	  						}
	  					})

	  				}




	  			}

	  		}
	  	})


	  	//-----------------check the data type of long and lat---------------------------
	  	// if (frm.doc.number_of_choices == '1') {
	  	// 	console.log(typ(frm.doc.longitude1))
	  		
	  	// }
	 
	  	// else if (frm.doc.number_of_choices == '2') {
	  	// }
	  	// else if (frm.doc.number_of_choices == '3') {
	  	// }
	  	// else if (frm.doc.number_of_choices == '4') {
	  	// }
	  	//-------------------------------end--------------------------------------------
	  	






	  }
// #################### end  befor save #################################################



});
