# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-01-23 07:19
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0006_auto_20160123_0304'),
    ]

    operations = [
        migrations.AddField(
            model_name='resume',
            name='rank',
            field=models.IntegerField(default=0),
        ),
    ]
