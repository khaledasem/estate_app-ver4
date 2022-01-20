# Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
# MIT License. See license.txt

from __future__ import unicode_literals
import frappe
from frappe import _
import frappe.www.list

no_cache = 1


def get_context(context):


	role = get_roles(frappe.session.user)
	print("/n/n/n/n/n/n/n//n/n")
	print(role)
	#frappe.throw(_(f"role is {role}"), frappe.PermissionError)
	if 'Planning User' in role or frappe.session.user=='Administrator':
		#frappe.throw(_(f" you are planning User"), frappe.PermissionError)
		pass
	else:
		frappe.throw(_(f"You need are not authorized access this page. role is {role}"), frappe.PermissionError)

	# if frappe.session.user=='Guest':
	# 	frappe.throw(_("You need are not authorized access this page"), frappe.PermissionError)
	# else:
	# 	uuser=frappe.session.user
	# 	frappe.msgprint(f"user is ")
	# 	frappe.throw(("You are in this page. user is {uuser}"), frappe.PermissionError)
	# 	context.show_sidebar=False

def get_roles(user=None, with_standard=True):
    # """get roles of current user"""
    if not user:
        user = frappe.session.user
 
    if user=='Guest':
        return 'Guest'
    elif user=='Administrator':
    	return 'Administrator'
    else:
    	return [r[0] for r in frappe.db.sql(f"""select role_profile_name from tabUser where name ="{user}";""")]
    # def get():
    #     return [r[0] for r in frappe.db.sql("""select role_profile_name from tabUser where name = user;""")
    #         # where parent=%s and role not in ('All', 'Guest')""", (user,))] + ['All', 'Guest']
 
    # roles = frappe.cache().hget("roles", user, get)
 
    # # filter standard if required
    # if not with_standard:
    #     roles = filter(lambda x: x not in ['All', 'Guest', 'Administrator'], roles)
 
    # return roles