# Generated by Django 5.1.1 on 2024-09-20 04:44

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('coffee', '0010_remove_coffeecart_email'),
    ]

    operations = [
        migrations.AddField(
            model_name='coffeecart',
            name='added_time',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
