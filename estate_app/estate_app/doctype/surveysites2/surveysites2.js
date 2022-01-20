// Copyright (c) 2021, khaled and contributors
// For license information, please see license.txt

frappe.ui.form.on('SurveySites2', {

	//=============================================== Setupfunc =============================================================
	setup: function(frm){

		
		//************************ Filter contracted sites *************************************************
		frm.set_query("contracted_sitename", function(){
			return {
				"filters": [
					["NewSites", "contract_status", "=", "Successful"],
					["NewSites", "is_delivered", "=", "No"]
				]
			}
		}),
		//************************ Filter contracted sites *************************************************




		//************************ Filter contracted sites *************************************************
		frm.chech_number_of_sectors = function(frm){
			if (frm.doc.number_of_sectors == '1') {
				frm.set_df_property('sec_brk_sector1', 'hidden', 0)
				frm.set_df_property('sec_brk_sector2', 'hidden', 1)
				frm.set_df_property('sec_brk_sector3', 'hidden', 1)
				frm.set_df_property('sec_brk_sector4', 'hidden', 1)

			} else if (frm.doc.number_of_sectors == 2) {
				frm.set_df_property('sec_brk_sector1', 'hidden', 0)
				frm.set_df_property('sec_brk_sector2', 'hidden', 0)
				frm.set_df_property('sec_brk_sector3', 'hidden', 1)
				frm.set_df_property('sec_brk_sector4', 'hidden', 1)

			} else if (frm.doc.number_of_sectors == 3) {
				frm.set_df_property('sec_brk_sector1', 'hidden', 0)
				frm.set_df_property('sec_brk_sector2', 'hidden', 0)
				frm.set_df_property('sec_brk_sector3', 'hidden', 0)
				frm.set_df_property('sec_brk_sector4', 'hidden', 1)

			} else if (frm.doc.number_of_sectors == 4) {
				frm.set_df_property('sec_brk_sector1', 'hidden', 0)
				frm.set_df_property('sec_brk_sector2', 'hidden', 0)
				frm.set_df_property('sec_brk_sector3', 'hidden', 0)
				frm.set_df_property('sec_brk_sector4', 'hidden', 0)

			} else {

			}
			frm.refresh_field('sec_brk_sector1');
			frm.refresh_field('sec_brk_sector2');
			frm.refresh_field('sec_brk_sector3');
			frm.refresh_field('sec_brk_sector4');
			// console.log("check number of choice function");

			
		},

		//************************ Filter contracted sites *************************************************



		//************************ tower type*************************************************
		frm.check_tower_type = function(frm){
			// frm.doc.tower_pole_height1 = ''

			if (frm.doc.tower_type == 'Tower') {
				frm.set_df_property('tower_pole_height', 'hidden', 0)
				frm.set_df_property('building_height', 'hidden', 1)
				frm.set_df_property('number_of_poles', 'hidden', 1)
				frm.set_df_property('number_of_rooms', 'hidden', 1)
				frm.set_df_property('sharing_tower_with', 'hidden', 1)
				// console.log("tower");

			} else if (frm.doc.tower_type == 'Pole') {
				frm.set_df_property('tower_pole_height', 'hidden', 0)
				frm.set_df_property('building_height', 'hidden', 0)
				frm.set_df_property('number_of_poles', 'hidden', 0)
				frm.set_df_property('number_of_rooms', 'hidden', 1)
				frm.set_df_property('sharing_tower_with', 'hidden', 1)
				// console.log("pole");

			} else if (frm.doc.tower_type == 'Rooms+Pole') {
				frm.set_df_property('tower_pole_height', 'hidden', 0)
				frm.set_df_property('building_height', 'hidden', 1)
				frm.set_df_property('number_of_poles', 'hidden', 1)
				frm.set_df_property('number_of_rooms', 'hidden', 0)
				frm.set_df_property('sharing_tower_with', 'hidden', 1)
				// console.log("rooms");

			} else if (frm.doc.tower_type == 'Sharing') {
				frm.set_df_property('tower_pole_height', 'hidden', 0)
				frm.set_df_property('building_height', 'hidden', 1)
				frm.set_df_property('number_of_poles', 'hidden', 1)
				frm.set_df_property('number_of_rooms', 'hidden', 1)
				frm.set_df_property('sharing_tower_with', 'hidden', 0)
				// console.log("sharing");
			} else if (frm.doc.tower_type == 'Others') {
				frm.set_df_property('tower_pole_height', 'hidden', 0)
				frm.set_df_property('building_height', 'hidden', 1)
				frm.set_df_property('number_of_poles', 'hidden', 1)
				frm.set_df_property('number_of_rooms', 'hidden', 1)
				frm.set_df_property('sharing_tower_with', 'hidden', 1)
				// console.log("sharing");
			} else {
				frm.set_df_property('tower_pole_height', 'hidden', 1)
				frm.set_df_property('building_height', 'hidden', 1)
				frm.set_df_property('number_of_poles', 'hidden', 1)
				frm.set_df_property('number_of_rooms', 'hidden', 1)
				frm.set_df_property('sharing_tower_with', 'hidden', 1)

			}

		},
		//************************ end tower type*************************************************





		//************************ constr_site_status_onChange *************************************************
		frm.constr_site_status_onChange = function(frm){
			if(frm.doc.constr_site_status == 'جاري اعداد الوثيقة'){
				frm.set_df_property('civil_problem_detailes', 'hidden', 1)
				frm.set_df_property('miqawil_name', 'hidden', 1)
			} else if(frm.doc.constr_site_status == 'تم التسليم للمقاول'){
				frm.set_df_property('civil_problem_detailes', 'hidden', 1)
				frm.set_df_property('miqawil_name', 'hidden', 0)
			} else if(frm.doc.constr_site_status == 'جاهز مدنيا'){
				frm.set_df_property('civil_problem_detailes', 'hidden', 1)
				frm.set_df_property('miqawil_name', 'hidden', 0)
			} else if(frm.doc.constr_site_status == 'جاهز فنيا'){
				frm.set_df_property('civil_problem_detailes', 'hidden', 1)
				frm.set_df_property('miqawil_name', 'hidden', 0)
			} else if(frm.doc.constr_site_status == 'تعرقل بسبب مشاكل'){
				frm.set_df_property('civil_problem_detailes', 'hidden', 0)
				frm.set_df_property('miqawil_name', 'hidden', 1)
			}
		},
		//************************ end constr_site_status_onChange *************************************************




		//************************ contract_status_onChange *************************************************
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
		//************************ end contract_status_onChange *************************************************


	},
	//===============================================END  Setupfunc =============================================================






	//===============================================  Refresh =============================================================
	refresh: function(frm) {
		frm.chech_number_of_sectors(frm)
		frm.check_tower_type(frm)
		frm.contract_status_onChange(frm)
		frm.constr_site_status_onChange(frm)
	},
	//=============================================== End Refresh =============================================================


	// #################### after save #################################################
	after_save: function(frm){
		// mark site in new sites as delivered
		frappe.db.set_value('NewSites', frm.doc.contracted_sitename, 'is_delivered', 'Yes')
	    	.then(r => {
	        	let doc = r.message;
	        	// console.log(doc);
	    	})
	  
	 },
	// #################### END after save #################################################



	//=============================================== on change field =============================================================

	//*********************************************************************************************
	contracted_sitename: function(frm){
		frappe.call({
	  		method: "estate_app.estate_app.doctype.surveysites2.survey_api.get_contracted_site",
	  		args: {'name': frm.doc.contracted_sitename},
	  		callback: function(r) {
	  			console.log(r)
	  			if(r.message.length>0){
	  				// let site_name = r.message[0].site_name;
	  				// console.log(site_name)
	  				frm.doc.site_name =  r.message[0].site_name;
	  				frm.doc.site_name_arabic =  r.message[0].site_name_arabic;
	  				frm.doc.site_importance =  r.message[0].site_importance;
	  				frm.doc.government2 =  r.message[0].government2;
	  				frm.doc.modairiah =  r.message[0].modairiah;
	  				frm.doc.area_name =  r.message[0].area_name;
	  				frm.doc.area_type =  r.message[0].area_type;
	  				frm.doc.sun_plate =  r.message[0].sun_plate;
	  				frm.doc.survey_code =  r.message[0].survey_code;
	  				frm.doc.zone =  r.message[0].zone;

	  				frm.doc.engineer_name =  r.message[0].engineer_name;
	  				frm.doc.engineer_phone =  r.message[0].engineer_phone;
	  				frm.doc.engineer_note =  r.message[0].engineer_note;
	  				frm.doc.survey_date =  r.message[0].survey_date;
	  				

	  				frm.doc.contract_status =  r.message[0].contract_status;
	  				frm.doc.choice_contracted =  r.message[0].choice_contracted;
	  				frm.doc.area_contracted =  r.message[0].area_contracted;
	  				frm.doc.road_to_site_ready =  r.message[0].road_to_site_ready;
	  				frm.doc.elect_generator_place =  r.message[0].elect_generator_place;
	  				frm.doc.elect_generator_area =  r.message[0].elect_generator_area;
	  				frm.doc.contract_failed_reason =  r.message[0].contract_failed_reason;
	  				frm.doc.owner_name =  r.message[0].owner_name;
	  				frm.doc.owner_phone =  r.message[0].owner_phone;
	  				frm.doc.owner_address =  r.message[0].owner_address;
	  				frm.doc.general_elect_available =  r.message[0].general_elect_available;
	  				frm.doc.elect_off_time =  r.message[0].elect_off_time;
	  				frm.doc.contract_by =  r.message[0].contract_by;
	  				frm.doc.contracted_by_phone =  r.message[0].contracted_by_phone;
	  				frm.doc.contract_date =  r.message[0].contract_date;
	  				frm.doc.contract_note =  r.message[0].contract_note;
	  				
	  				frm.refresh_field('contract_status');
	  				frm.refresh_field('choice_contracted');
	  				frm.refresh_field('area_contracted');
	  				frm.refresh_field('road_to_site_ready');
	  				frm.refresh_field('elect_generator_place');
	  				frm.refresh_field('elect_generator_area');
	  				frm.refresh_field('contract_failed_reason');
	  				frm.refresh_field('owner_name');
	  				frm.refresh_field('owner_phone');
	  				frm.refresh_field('owner_address');
	  				frm.refresh_field('general_elect_available');
	  				frm.refresh_field('elect_off_time');
	  				frm.refresh_field('contract_by');
	  				frm.refresh_field('contracted_by_phone');
	  				frm.refresh_field('contract_date');
	  				frm.refresh_field('contract_note');

	  				frm.refresh_field('site_name');
	  				frm.refresh_field('site_name_arabic');
	  				frm.refresh_field('site_importance');
	  				frm.refresh_field('government2');
	  				frm.refresh_field('modairiah');
	  				frm.refresh_field('area_name');
	  				frm.refresh_field('area_type');
	  				frm.refresh_field('sun_plate');
	  				frm.refresh_field('survey_code');
	  				frm.refresh_field('zone');

	  				frm.refresh_field('engineer_name');
	  				frm.refresh_field('engineer_phone');
	  				frm.refresh_field('engineer_note');
	  				frm.refresh_field('survey_date');
	  			}
	  		}
	  	})

	  	

	
	},
	//*******************************************************end*****************************************************




	//************************************************************************************************************
	number_of_sectors: function(frm){
		frm.chech_number_of_sectors(frm)
	},
	//********************************************************end**********************************************



	//************************************************************************************************************
	tower_type: function(frm){
		frm.doc.tower_pole_height = ''
		frm.doc.building_height = ''
		frm.doc.number_of_poles = ''
		frm.doc.number_of_rooms = ''
		frm.doc.sharing_tower_with = ''
		frm.check_tower_type(frm);
	},
	//********************************************************end**********************************************





	//************************************************************************************************************
	contract_status: function(frm){
		frm.contract_status_onChange(frm);
	},
	//********************************************************end**********************************************



	//************************************************************************************************************
	constr_site_status: function(frm){
		frm.constr_site_status_onChange(frm);
	},
	//********************************************************end**********************************************
	

	//===============================================e nd on change field =============================================================
});
