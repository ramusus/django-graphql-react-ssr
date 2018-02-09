from django.contrib import admin

# Register your models here.

from .models import Company, Job

@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    pass


@admin.register(Job)
class JobAdmin(admin.ModelAdmin):
    pass
