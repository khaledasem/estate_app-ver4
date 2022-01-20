// frappe.ui.form.on('new_site', {
// 	refresh: function(frm) {
// 		frm.add_custom_button('hhh', () =>{
			
// 		})
// 	},
// });

frappe.ready(function() {
	// bind events here
	//document.querySelector('.page-head').innerHTML = `<h1> hh </h1>`;

	
	//title
//	document.querySelector('.page-header').innerHTML = '';
	//link
	//document.querySelector('.page-breadcrumbs').innerHTML = '';
	// field
	//document.querySelector('input[data-fieldname="site_name"]').value = ' s';


	//to validate form
	//frappe.web_form.on([fieldname], [handler]);
	//frappe.web_form.on(site_name, (field, value)=>{

	//});

//Get value of a particular field
//value = frappe.web_form.get_value([fieldname]);

//Set value of a particular field
//frappe.web_form.set_value([fieldname], [value])

// ----- set default value -----



//after load
frappe.web_form.after_load = (e) => {

//[{"button": "Save", "hidden":1 }]	
	
	// set value to ''
//	frappe.web_form.set_value('site_name', '')

	 // frappe.msgprint('Loaded')
   // console.log('event', e)


   //validate feild ------------------------------------------------
 //   frappe.web_form.on('site_name', (field, value)=>{
 //   		console.log(field, value);
 //   		if (!value.includes('@')){
 //   			frappe.throw(__('invalid email'));
 //   		}
	// });
   //-----end----


   //validate the form when saved-----------------------------------------
   frappe.web_form.validate = () => {
     let data = frappe.web_form.get_values();
 //    console.log(data);
 //    if(!data.site_name.includes('@')){
 //    	frappe.msgprint('Please enter valid email');
 //    	return false;
 //    	}

 		return true;
	};
	//-----end-------


	//Hide a field based on value -----------------------------------------
	// frappe.web_form.on('amount', (field, value) => {
 //    	if (value < 1000) {
 //        	frappe.web_form.set_df_property('rate', 'hidden', 1);
 //    	}
	// });
	//---------------end-------------

	//You can customize the breadcrumbs in a Web Form by adding JSON object.--------------------
	//[{"label": "Home", "route":"/" }]

	//-----------end-----------------


	//-----------------reset value----------------------
	// frappe.web_form.on('amount', (field, value) => {
 //    if (value < 1000) {
 //        frappe.msgprint('Value must be more than 1000');
 //        field.set_value(0);
 //    }
	// });
	//-----------------end--------------

	//------------------Set Field Property-----------------------
	//frappe.web_form.set_df_property([fieldname], [property], [value]);








}

})
// '' ``