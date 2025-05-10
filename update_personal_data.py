import os
import django
import datetime

# Set up Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio_project.settings')
django.setup()

from portfolio.models import Project, Internship, Certification, Contact

def update_projects():
    # Clear existing projects
    Project.objects.all().delete()
    
    # Add personal project
    project = Project.objects.create(
        title='Contactless Doorbell System Using IoT',
        description='This project involves the development of a contactless doorbell system using IoT sensors and Python. The system detects a visitor\'s presence through proximity or motion sensors and automatically triggers the doorbell without physical contact. Python is used for processing sensor data and managing system operations. The solution enhances hygiene and safety, offering a modern alternative to traditional doorbells.',
        technologies='IoT Python Sensors Raspberry Pi',
        github_link='https://github.com/',
        demo_link='',
    )
    
    print(f"Added project: {project.title}")

def update_internships():
    # Clear existing internships
    Internship.objects.all().delete()
    
    # Add personal internship
    internship = Internship.objects.create(
        company='EDUskills',
        role='AI ML Intern',
        duration='2023',
        description='Worked on AI and Machine Learning projects, gaining practical experience in implementing machine learning algorithms and developing AI solutions.',
        technologies='Python TensorFlow Scikit-learn Data Analysis',
    )
    
    print(f"Added internship: {internship.role} at {internship.company}")

def update_certifications():
    # Clear existing certifications
    Certification.objects.all().delete()
    
    # Add personal certifications
    certifications = [
        {
            'title': 'AI ML Certification',
            'organization': 'EDUskills',
            'date_earned': datetime.date(2023, 1, 15),
            'description': 'Comprehensive certification in Artificial Intelligence and Machine Learning fundamentals and applications.',
        },
        {
            'title': 'Data Analytics Certification',
            'organization': 'EDUskills',
            'date_earned': datetime.date(2022, 10, 10),
            'description': 'In-depth training on data analysis techniques, tools, and methodologies.',
        },
        {
            'title': 'AI Certification',
            'organization': 'Teachnook - IIT Bhubaneswar',
            'date_earned': datetime.date(2022, 7, 5),
            'description': 'Advanced AI certification program conducted in collaboration with IIT Bhubaneswar.',
        },
        {
            'title': 'Python Full Stack Development',
            'organization': 'JSPiders',
            'date_earned': datetime.date(2022, 3, 20),
            'description': 'Comprehensive training in Python full stack development including frontend and backend technologies.',
        },
    ]
    
    for cert_data in certifications:
        cert = Certification.objects.create(**cert_data)
        print(f"Added certification: {cert.title} from {cert.organization}")

if __name__ == '__main__':
    print("Updating personal data in the database...")
    update_projects()
    update_internships()
    update_certifications()
    print("Personal data updated successfully!")
