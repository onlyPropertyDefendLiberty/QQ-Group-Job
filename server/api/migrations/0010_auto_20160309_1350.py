# -*- coding: utf-8 -*-
# Generated by Django 1.9.3 on 2016-03-09 13:50
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_auto_20160306_1456'),
    ]

    operations = [
        migrations.AlterField(
            model_name='resume',
            name='education',
            field=models.IntegerField(choices=[(0, '大专以下'), (1, '大专'), (2, '本科'), (3, '硕士'), (4, '硕士以上')], default=2),
        ),
        migrations.AlterField(
            model_name='user',
            name='school',
            field=models.CharField(default='', max_length=40),
        ),
    ]
