from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import ItemSerializer


from django.views import View
from django.utils.decorators import method_decorator

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

# import models
from .models import Item


# Create your views here.
# sample api
class SampleAPIView(APIView):
    x = "http://127.0.0.1:8000/"

    def get(self, request):
        data = {
            "food-item-api": f"{self.x}api/items/",
        }
        return Response(data)


class ItemListCreateAPIView(APIView):
    def get(self, request):
        items = Item.objects.all()
        serializer = ItemSerializer(items, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = ItemSerializer(data=request.data, many=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
