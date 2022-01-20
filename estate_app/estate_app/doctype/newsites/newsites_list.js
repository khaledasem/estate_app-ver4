frappe.listview_settings['NewSites'] = {
    colwidths: {"subject": 10},
    add_fields: ["status", "name", "contract_by"
        ],

     filters: [
        ['is_replaced', '!=', 'Yes'],
        ['evaluate', '!=', 'Resurvey']
    ],
    hide_name_column: true, // hide the last column which shows the `name`
    get_indicator(doc) {
        // customize indicator color --------------
        if (doc.evaluate == 'Resurvey') {
            return [__("Resurvey"), "yellow", "evaluate,=,Resurvey"];
          

            // return [__("لم يتم الافادة"), "blue", "contract_status,=,--------------"];
        
        }else if (doc.is_replaced == 'Yes') {
            return [__("Replaced"), "blur", "is_replaced,=,Yes"];
        
        
        }else if (doc.contract_status == '--------------') {
            return [__("لم يتم الافادة"), "blue", "contract_status,=,--------------"];
        
        } else if (doc.contract_status == 'Successful') {
            return [__("تم توقيع العقد"), "green", "contract_status,=,Successful"];
        
        
        } else if (doc.contract_status == 'In Progress') {
            return [__("جاري التفاوض"), "green", "contract_status,=,In Progress"];
        
        } 
        else if (doc.contract_status == 'Failed') {
            return [__("فشل التعاقد"), "red", "contract_status,=,Failed "];
        
         }
        
       
    },



};