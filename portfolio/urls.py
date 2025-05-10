from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('projects/', views.projects, name='projects'),
    path('internships/', views.internships, name='internships'),
    path('certifications/', views.certifications, name='certifications'),
    path('about-portfolio/', views.about_portfolio, name='about_portfolio'),
    path('contact/', views.contact, name='contact'),
    path('download-cv/', views.download_cv, name='download_cv'),
]
