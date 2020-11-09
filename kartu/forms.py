from django import forms
from django.core.validators import validate_image_file_extension
from django.utils.translation import gettext as _


from .models import *


class ShowAdminForm(forms.ModelForm):
    class Meta:
        model = Show
        fields = (
            "sekolahnama",
        )

    photos = forms.FileField(
        widget=forms.ClearableFileInput(attrs={"multiple": True}),
        label=_("Add photos"),
        required=False,
    )

    def clean_photos(self):
        """Make sure only images can be uploaded."""
        for upload in self.files.getlist("photos"):
            validate_image_file_extension(upload)

    def save_photos(self, show):
        """Process each uploaded image."""
        for upload in self.files.getlist("photos"):
            photo = ShowPhoto(show=show, photo=upload)
            photo.save()

