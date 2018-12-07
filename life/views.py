from django.shortcuts import render
from django.core import serializers

def index(request):
    return render(request, 'life/index.html')