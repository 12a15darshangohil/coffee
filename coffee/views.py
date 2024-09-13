from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import (
    DrinkSerializer,
    FoodSerializer,
    MerchandiseSerializer,
    CoffeeAtHomeSerializer,
    ReadyToEatSerializer,
)

from django.views import View
from django.utils.decorators import method_decorator

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

# import models
from .models import Drink, Food, Merchandise, CoffeeAtHome, ReadyToEat


# Create your views here.
# sample api
class SampleAPIView(APIView):
    x = "http://127.0.0.1:8000/"

    def get(self, request):
        data = {
            "drink-item-api": f"{self.x}api/drink/",
            "food-item-api": f"{self.x}api/food/",
            "merchandise-item-api": f"{self.x}api/merchandise/",
            "coffee-at-home-item-api": f"{self.x}api/coffee-at-home/",
            "ready-t-eat-item-api": f"{self.x}api/ready-to-eat/",
        }
        return Response(data)


# all items ------------------------------------------------


# drinks
class DrinkListCreateAPIView(APIView):
    def get(self, request):
        items = Drink.objects.all()
        serializer = DrinkSerializer(items, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = DrinkSerializer(data=request.data, many=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# food
class FoodListCreateAPIView(APIView):
    def get(self, request):
        items = Food.objects.all()
        serializer = FoodSerializer(items, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = FoodSerializer(data=request.data, many=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Merchandise
class MerchandiseListCreateAPIView(APIView):
    def get(self, request):
        items = Merchandise.objects.all()
        serializer = MerchandiseSerializer(items, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = MerchandiseSerializer(data=request.data, many=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Coffee At Home
class CoffeeAtHomeListCreateAPIView(APIView):
    def get(self, request):
        items = CoffeeAtHome.objects.all()
        serializer = CoffeeAtHomeSerializer(items, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = CoffeeAtHomeSerializer(data=request.data, many=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Ready to Eat
class ReadytoEatListCreateAPIView(APIView):
    def get(self, request):
        items = ReadyToEat.objects.all()
        serializer = ReadyToEatSerializer(items, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = ReadyToEatSerializer(data=request.data, many=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# api view end ------------------------------------------------
