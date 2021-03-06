__author__ = 'jobin'

import hashlib

from django.http import JsonResponse
from django.views.generic import View
from django.forms import Form, PasswordInput, CharField

from .check_request import CheckRequest
from api.token import db_password

class PwdForm(Form):
    password = CharField(label=u'密码：', widget=PasswordInput())

class ChangePwd(View):
    def put(self, request):
        check = CheckRequest(request)
        if not check.user:
            return JsonResponse({
                "status": "error",
                "msg": "User not logined"
            })
        uf = PwdForm(check.jsonForm)
        if uf.is_valid():
            check.user.password = db_password(uf.cleaned_data['password'])
            check.user.save()
            return JsonResponse({"status" :  'success',
                    'msg' :  ''
                    })
