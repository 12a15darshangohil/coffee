# Generated by Django 5.1.1 on 2024-09-13 17:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('coffee', '0007_rename_veg_food_nonveg'),
    ]

    operations = [
        migrations.AddField(
            model_name='readytoeat',
            name='nonVeg',
            field=models.BooleanField(default=False),
        ),
    ]
