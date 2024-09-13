from django.db import models

# Create your models here.


class Item(models.Model):
    img = models.URLField(max_length=500, blank=True)
    title = models.CharField(max_length=200, blank=True)
    text = models.TextField(blank=True)
    kcal = models.CharField(blank=True, null=True, max_length=150)
    price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)

    def __str__(self):
        return self.title if self.title else "Unnamed Item"
