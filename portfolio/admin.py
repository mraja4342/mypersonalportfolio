from django.contrib import admin
from .models import Project, Internship, Certification, Contact

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'technologies', 'created_at')
    search_fields = ('title', 'description', 'technologies')
    list_filter = ('created_at',)

@admin.register(Internship)
class InternshipAdmin(admin.ModelAdmin):
    list_display = ('role', 'company', 'duration', 'created_at')
    search_fields = ('role', 'company', 'description', 'technologies')
    list_filter = ('created_at',)

@admin.register(Certification)
class CertificationAdmin(admin.ModelAdmin):
    list_display = ('title', 'organization', 'date_earned')
    search_fields = ('title', 'organization', 'description')
    list_filter = ('date_earned',)

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject', 'created_at')
    search_fields = ('name', 'email', 'subject', 'message')
    list_filter = ('created_at',)
    readonly_fields = ('name', 'email', 'subject', 'message', 'created_at')
