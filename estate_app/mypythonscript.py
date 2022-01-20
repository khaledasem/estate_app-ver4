import frappe
from lxml import etree
from estate_app.custom.pykml.src.pykml.parser import Schema

from estate_app.custom.pykml.src.pykml.factory import KML_ElementMaker as KML
from estate_app.custom.pykml.src.pykml.factory import GX_ElementMaker as GX
from estate_app.custom.pykml.src.pykml.factory import ATOM_ElementMaker as ATOM

from frappe.utils.file_manager import upload
# from __future__ import unicode_literals
# import os.path

# import frappe
# from frappe import _, msgprint
# from datetime import datetime, timedelta
# from frappe.utils import flt, getdate, datetime,comma_and
# from collections import defaultdict
# import frappe
# import json
# import time
# import math
# import ast
# import os.path
# import sys




@frappe.whitelist()

# def download_file():
# 	frappe.local.response.filename = "testKML333.kml"
# 	fileobj = open("/testKML333.kml", "r+p")
# 	filedata = fileobj.read()
# 	frappe.logger().debug("Inside")
# 	frappe.local.response.filecontent = filedata
# 	frappe.local.response.type = "download"


# 	return 'r'

def ping():
	name_object = KML.name("Hello World!")
	pm1 = KML.Placemark(
		KML.name("Hello World!"),
		KML.Point(
	 		KML.coordinates("-64.5253,18.4607")
	  	)
	)

	pm2 = KML.Placemark(
		KML.name("Hello World!"),
		KML.Point(
	 		KML.coordinates("-64.52888,18.499997")
	  	)
	)

	pm3 = KML.Placemark(
		KML.name("Hello World!"),
		KML.Point(
	 		KML.coordinates("-64.51118,18.4111197")
	  	)
	)

	fld = KML.Folder(pm1,pm2)
#	print etree.tostring(fld, pretty_print=True)

	# append the placemark to the series already in the folder
	fld.append(pm3)


	# remove a particular placemark
	fld.remove(pm2)
	#print etree.tostring(fld, pretty_print=True)


	# Once you have a KML document, you can access elements using object attributes:
	#print fld.Placemark.name.text
	



	rt = etree.tostring(pm1)
	rt2 = etree.tostring(pm1)
	fld_fin = etree.tostring(fld, pretty_print=True).decode("utf-8")
	frappe.msgprint((f"{fld_fin}"))

	# output a KML file (named based on the Python script)
	# outfile = open('/home/frappe/myfrappe-bench/sites/kh.local/private/files/testKML333.kml', 'w')
	outfile = open('testKML77.kml', 'w')
	outfile.write(etree.tostring(fld, pretty_print=True).decode("utf-8"))

	frappe.utils.file_manager.add_attachments(frm, name, attachments)
	# filedata = outfile.read()
	#f.write(et.tostring(doc).decode("utf-8"))



	return "r"