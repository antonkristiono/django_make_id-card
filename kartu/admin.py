from django.contrib import admin
from django.template.loader import get_template
from django.utils.translation import gettext as _
from import_export import resources
from import_export.admin import ImportExportModelAdmin


# Register your models here.
from .models import *
from .forms import ShowAdminForm


class ShowPhotoInline(admin.TabularInline):
    model = ShowPhoto
    fields = ("showphoto_thumbnail",)
    readonly_fields = ("showphoto_thumbnail",)
    max_num = 0


    def showphoto_thumbnail(self, instance):
        """A (pseudo)field that returns an image thumbnail for a show photo."""
        tpl = get_template("shows/admin/show_thumbnail.html")
        return tpl.render({"photo": instance.photo})

    showphoto_thumbnail.short_description = _("Thumbnail")


@admin.register(Show)
class ShowAdmin(admin.ModelAdmin):
    form = ShowAdminForm
    inlines = [ShowPhotoInline]

    def save_related(self, request, form, formsets, change):
        super().save_related(request, form, formsets, change)
        form.save_photos(form.instance)

class DataMuridResource (resources.ModelResource):

    class Meta:
        model = DataMurid

@admin.register(DataMurid)
class DataMuridAdmin(ImportExportModelAdmin):
    resource_datamurid= DataMuridResource
    list_display= ("sekolah","nama","IdCard","alamat","TempatLahir","TanggalLahir","IdImage","TTL","other","fotoExtension","cetak")
    search_fields= ("nama",)


@admin.register(NamaSekolah)
class NamaSekolahAdmin(admin.ModelAdmin):
    list_display= ("nama","id")
# admin.site.register(NamaSekolah)

admin.site.register(DesainKartu)

