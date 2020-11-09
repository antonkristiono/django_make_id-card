from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from kartu.models import DataMurid
from kartu.serializers import DataMuridSerializer



# Create your views here.
from .models import *

# def css_renderer(request, filename):
#     return render(request, filename + '.css', {}, content_type="text/css")

def depan(request):
    data_murid = DataMurid.objects.all().filter(sekolah=13)
    context = {
        'data_murid': data_murid,
        'app_css': 'kartu/depan/style12.css',
    }
    return render (request,'kartu/depan13.html',context)

def back(request):
    data_murid = DataMurid.objects.all().filter(sekolah=13)
    context = {
        'data_murid': data_murid,
        'app_css': 'kartu/depan/style12.css',
    }
    return render (request,'kartu/back13.html',context)

#=================================
#               DRF
#=================================

@api_view(['GET'])
def DataMuridAPI(request):
    if request.method == 'GET':
        data = DataMurid.objects.all()

        serializer = DataMuridSerializer(data,context={'request':request}, many=True)

        return Response(serializer.data)

@api_view(['GET'])
def DataMurid_ID(request,pk):
    if request.method == 'GET':
        data = DataMurid.objects.all().filter(sekolah=pk)

        serializer = DataMuridSerializer(data,context={'request':request}, many=True)

        return Response(serializer.data)
