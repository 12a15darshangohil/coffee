from django.urls import path
from .views import SampleAPIView
from .views import (
    DrinkListCreateAPIView,
    FoodListCreateAPIView,
    MerchandiseListCreateAPIView,
    CoffeeAtHomeListCreateAPIView,
    ReadytoEatListCreateAPIView,
)


urlpatterns = [
    path("drink/", DrinkListCreateAPIView.as_view(), name="drinks"),
    path("food/", FoodListCreateAPIView.as_view(), name="food"),
    path("merchandise/", MerchandiseListCreateAPIView.as_view(), name="merchandise"),
    path(
        "coffee-at-home/",
        CoffeeAtHomeListCreateAPIView.as_view(),
        name="coffee-at-home",
    ),
    path("ready-to-eat/", ReadytoEatListCreateAPIView.as_view(), name="ready-to-eat"),
]
