from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    technologies = models.CharField(max_length=200)
    github_link = models.URLField(blank=True)
    demo_link = models.URLField(blank=True)
    image = models.CharField(max_length=100, blank=True)  # For image filename
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-created_at']

class Internship(models.Model):
    company = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    duration = models.CharField(max_length=100)
    description = models.TextField()
    technologies = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.role} at {self.company}"

    class Meta:
        ordering = ['-created_at']

class Certification(models.Model):
    title = models.CharField(max_length=100)
    organization = models.CharField(max_length=100)
    date_earned = models.DateField()
    description = models.TextField(blank=True)
    credential_id = models.CharField(max_length=100, blank=True)
    credential_url = models.URLField(blank=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-date_earned']

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name}"

    class Meta:
        ordering = ['-created_at']
