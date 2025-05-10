from django.shortcuts import render, redirect
from django.contrib import messages
from django.http import FileResponse
import os
from django.conf import settings
from .models import Project, Internship, Certification
from .forms import ContactForm

def home(request):
    return render(request, 'portfolio/home.html')

def about(request):
    return render(request, 'portfolio/about.html')

def projects(request):
    projects = Project.objects.all()
    return render(request, 'portfolio/projects.html', {'projects': projects})

def internships(request):
    internships = Internship.objects.all()
    return render(request, 'portfolio/internships.html', {'internships': internships})

def certifications(request):
    certifications = Certification.objects.all()
    return render(request, 'portfolio/certifications.html', {'certifications': certifications})

def about_portfolio(request):
    return render(request, 'portfolio/about_portfolio.html')

def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Your message has been sent successfully!')
            return redirect('contact')
    else:
        form = ContactForm()

    return render(request, 'portfolio/contact.html', {'form': form})

def download_cv(request):
    """View to handle CV download"""
    cv_path = os.path.join(settings.MEDIA_ROOT, 'documents', 'rev.pdf')
    response = FileResponse(open(cv_path, 'rb'), content_type='application/pdf')
    response['Content-Disposition'] = 'inline; filename="Mutukuri_Raja_CV.pdf"'
    return response
