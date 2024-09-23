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

from django.contrib.auth.models import User
from django.views import View
from django.utils.decorators import method_decorator

import json

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

# import models
from .models import Drink, Food, Merchandise, CoffeeAtHome, ReadyToEat, CoffeeCart

from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required


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


@csrf_exempt  # Disable CSRF for API requests, you can set up CSRF tokens instead for security.
def add_to_cart(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            user = User.objects.get(id=data["user_id"])

            cart = CoffeeCart.objects.create(
                user=user,
                cart_details=data["cart_details"],
            )
            print(cart)

            return JsonResponse(
                {"message": "Item added to cart successfully!"}, status=201
            )
        except User.DoesNotExist:
            return JsonResponse({"error": "User not found"}, status=404)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    return JsonResponse({"error": "Invalid request method"}, status=405)


@csrf_exempt
def remove_item_from_cart(request):
    if request.method == "POST":
        try:
            # Assuming the user is authenticated and you have access to the user instance
            # user = request.user  # or however you get the current user
            user = 1  # for now
            cart_item = CoffeeCart.objects.all()
            dataa = json.loads(request.body)
            if dataa["res"]:
                for i in cart_item:
                    data = i.cart_details
                    if data["title"] == dataa["Itemtitle"]:
                        i.delete()
            else:
                for i in cart_item:
                    data = i.cart_details
                    if data["title"] == dataa["Itemtitle"]:
                        i.delete()
                        break
            return JsonResponse(
                {"message": "Item removed from cart successfully."}, status=200
            )

        except CoffeeCart.DoesNotExist:
            return JsonResponse({"error": "Item not found in cart."}, status=404)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)
    return JsonResponse({"error": "Invalid request method"}, status=405)


@csrf_exempt
def login_view(request):
    if request.method == "POST":
        body = json.loads(request.body)
        username = body.get("username")
        password = body.get("password")

        print(username, password)

        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({"message": "Login successful"}, status=200)
        else:
            return JsonResponse({"error": "Invalid credentials"}, status=400)

    return JsonResponse({"error": "Invalid request method"}, status=405)


@csrf_exempt
def user_authentication(request):
    if request.user.is_authenticated:
        try:
            print(request.user)
            user = User.objects.get(username=request.user)
            print(user)

            cart = CoffeeCart.objects.filter(user=user)
            cart_data = (
                [
                    {
                        "id": item.id,
                        "cart_details": item.cart_details,
                        "time": item.added_time,
                    }
                    for item in cart
                ]
                if cart.exists()
                else None
            )
            # Return user data along with cart data in the response
            user_data = {
                "id": user.id,
                "username": user.username,
                "first_name": user.first_name,
                "last_name": user.last_name,
                "email": user.email,
                "cart": cart_data,  # Include the cart details
            }

            return JsonResponse(
                {"message": "Authentication successful", "user": user_data},
                status=200,
            )

        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Invalid request method"}, status=405)


# @login_required
# def user_authentication(request):
#     if request.user.is_authenticated:
#         user = request.user
#         return JsonResponse(
#             {
#                 "username": user.username,
#                 "email": user.email,
#                 "first_name": user.first_name,
#                 "last_name": user.last_name,
#                 # Add other fields as needed
#             },
#             status=200,
#         )
#     return JsonResponse({"error": "User not authenticated"}, status=401)
