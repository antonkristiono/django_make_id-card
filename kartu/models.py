from django.db import models
import os

def get_upload_path(instance, filename):
    return os.path.join(
        "kartu/static/cardtemplate/" + "sekolah_%d" % instance.sekolah.id, filename)

def get_upload_path_foto(instance, filename):
    return os.path.join(
        "kartu/static/foto/" + "sekolah_%s" % instance.show.sekolahnama, filename)

class NamaSekolah (models.Model):
    nama= models.CharField(max_length=50)
    id = models.AutoField(primary_key=True)

    def __str__(self):
        return self.nama


# def content_file_name(instance, filename):
#     ext = filename.split('.')[-1]
#     filename = "%s_%s.%s" % (instance.sekolah.id, ext)
#     return os.path.join('foto', filename)

class Show(models.Model):
    sekolahnama = models.CharField(max_length=1024)



class ShowPhoto(models.Model):
    show = models.ForeignKey(
        Show, on_delete=models.CASCADE, related_name="photos"
    )
    photo = models.ImageField(upload_to=get_upload_path_foto)



class DataMurid (models.Model):
    sekolah = models.ForeignKey(NamaSekolah, blank=True, null=True, on_delete=models.CASCADE)
    nama = models.CharField(max_length=30,blank=True,null=True)
    IdCard = models.CharField("ID Pada Kartu", max_length=50,blank=True, null=True)
    alamat = models.CharField(max_length=200,blank=True,null=True)
    kategori = models.CharField("sd/smp/sma",max_length=10,blank=True,null=True)
    TempatLahir = models.CharField(max_length=30,blank=True,null=True)
    TanggalLahir = models.CharField(max_length=30,blank=True, null=True)
    IdImage = models.CharField("ID untuk get image", max_length=50,blank=True, null=True)
    TTL = models.CharField(max_length=50, blank=True, null=True)
    other= models.CharField(max_length=50, blank=True, null=True)
    fotoExtension= models.CharField(max_length=5, blank=True, null=True)
    cetak= models.BooleanField(default=False)
    def __str__(self):
        return self.nama


class DesainKartu (models.Model):
    sekolah = models.ForeignKey(NamaSekolah, blank=True, null=True, on_delete=models.CASCADE)
    kategori = models.CharField("sd/smp/sma",max_length=10,blank=True,null=True)
    kartudepan= models.ImageField(upload_to=get_upload_path,blank=True, null=True)
    kartubelakang=models.ImageField(upload_to=get_upload_path,blank=True, null=True)
    
