# Copyright (c) 2013, khaled and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe import _

def execute(filters=None):
	columns, data = [], []
	# return columns, data
	return get_columns(), get_data(filters)


def get_data(filters):
	print(f"\n\n\n\n\n\n{filters}\n\n\n\n\n\n")

	_from, to = filters.get('from'), filters.get('to')

	conditions = f" ( creation BETWEEN '{_from}' AND '{to}') AND 1=1 "
	if(filters.get('site_name')):conditions += f" AND site_name LIKE  '%{filters.get('site_name')}' "
	if(filters.get('site_importance')):conditions += f" AND site_importance = '{filters.get('site_importance')}' "
	if(filters.get('government2')):conditions += f" AND government2 = '{filters.get('government2')}' "
	if(filters.get('contract_status')):conditions += f" AND contract_status = '{filters.get('contract_status')}' "
	if(filters.get('survey_type')):conditions += f" AND survey_type = '{filters.get('survey_type')}' "
	if(filters.get('engineer_name')):conditions += f" AND engineer_name = '{filters.get('engineer_name')}' "
	if(filters.get('contract_by')):conditions += f" AND contract_by = '{filters.get('contract_by')}' "
	print(f"\n\n\n\n\n\n{conditions}\n\n\n\n\n\n")
	data = frappe.db.sql(f"""SELECT  site_name, site_name_arabic,contract_status,survey_type, survey_code,zone, government2,modairiah,area_name, site_importance, number_of_choices,choice_contracted,contract_failed_reason,
	area_type, sun_plate, 
	engineer_name,engineer_phone,engineer_notes, survey_date,
	contract_by,contracted_by_phone,contract_note,contract_date,
	owner_name,owner_phone,owner_address,


	longitude1,latitude1,choice_priority1,tower_type_concat1,tower_pole_height1,building_height1,
	longitude2,latitude2,choice_priority2,tower_type_concat2,tower_pole_height2,building_height2,
	longitude3,latitude3,choice_priority3,tower_type_concat3,tower_pole_height3,building_height3,
	longitude4,latitude4,choice_priority4,tower_type_concat4,tower_pole_height4,building_height4

	 FROM tabNewSites 
		WHERE  {conditions};""")
	# WHERE ( survey_date BETWEEN {_from} AND {to}
	return data


def get_columns():
	return [
			
			"Site Name:Data:100",
			"اسم الموقع:Data:100",
			
			"حالة العقد:Select/['--------------', 'Successful', 'In Progress', 'Failed' ]",
			"نوع المسح:Data:130",
			"Survey Code:Data:110",
			"zone:Data:60",
			"المحافظة::Link/govern1:100",
			"المديرية::Link/govern1:100",
			"المنطقة::Link/govern1:100",
			"اهمية الموقع:Select/[ '--------', 'A', 'B', 'C' ]",
			"عدد الخيارات:Data:100",
			"رقم الخيار المتعاقد علية :Data:140",
			"سبب فشل التفاوض:Data:140",
			"Area Type:Data:100",
			"منظومة شمسية:Data:130",
			"اسم المهندس:Data:100",
			"رقم المهندس:Data:100",
			"ملاحظات المهندس:Data:140",
			"تاريخ المسح:Data:100",
			"اسم المتعاقد:Data:100",
			"تلفون المتعاقد:Data:110",
			"ملاحظات المتعاقد:Data:150",
			
			"تاريخ التعاقد:Data:100",
			"اسم المالك:Data:100",
			"رقم المالك:Data:100",
			"عنوان المالك:Data:100",		
			
			"longitude1:Data:100",
			"latitude1:Data:100",
			"اهمية الخيار1:Data:130",

			"نوع البرج1:Data:100",
			"Tower/Pole Height(m)1:Data:150",
			"Building Height(m)1:Data:150",
			

			"longitude2:Data:100",
			"latitude2:Data:100",
			"اهمية الخيار2:Data:130",

			"نوع البرج2:Data:100",
			"Tower/Pole Height(m)2:Data:150",
			"Building Height(m)2:Data:150",

			"longitude3:Data:100",
			"latitude3:Data:100",
			"اهمية الخيار3:Data:130",
			
			"نوع البرج3:Data:100",
			"Tower/Pole Height(m)3:Data:150",
			"Building Height(m)3:Data:150",

			"longitude4:Data:100",
			"latitude4:Data:100",
			"اهمية الخيار4:Data:130",
			
			"نوع البرج4:Data:100",
			"Tower/Pole Height(m)4:Data:150",
			"Building Height(m)4:Data:150",

	]
		# 	{
		# 	"fieldname": "site_name",
		# 	"label": _("Site Name"),
		# 	"fieldtype": "Data",
		# 	# "width": 100,
		# 	# "reqd": 0,
		# },
		# {
		# 	"fieldname": "government2",
		# 	"label": _("المحافظة"),
		# 	"fieldtype": "Link",
		# 	"options": "govern1",
		# 	# "width": 80,
		# 	# "reqd": 0,
			
		# },
		# {
		# 	"fieldname": "site_importance",
		# 	"label": _("أهمية الموقع"),
		# 	"fieldtype": "Select",
		# 	"options": [ '--------', 'A', 'B', 'C' ],
		# 	# "width": 80,
		# 	# "reqd": 0,
			
		# },
		
	# ]

