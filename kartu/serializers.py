#!/usr/bin/env python3

from rest_framework import serializers
from .models import *


class DataMuridSerializer(serializers.ModelSerializer):

    class Meta:
        model = DataMurid
        fields = ('sekolah', 'nama', 'IdCard', 'alamat', 'kategori','TempatLahir','TanggalLahir','IdImage','TTL','other','fotoExtension','cetak')
