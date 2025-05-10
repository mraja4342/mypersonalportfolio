import os
import django
import datetime

# Set up Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio_project.settings')
django.setup()

from portfolio.models import Project, Internship, Certification

def add_projects():
    # Clear existing projects
    Project.objects.all().delete()
    
    # Add sample projects
    projects = [
        {
            'title': 'Intelligent Conversational AI Chatbot',
            'description': 'A sophisticated chatbot built with Python and TensorFlow that uses natural language processing to understand and respond to user queries in a human-like manner.',
            'technologies': 'Python TensorFlow NLP Flask',
            'github_link': 'https://github.com/',
            'demo_link': 'https://example.com/demo1',
        },
        {
            'title': 'Interactive Data Visualization Dashboard',
            'description': 'A comprehensive dashboard that transforms complex datasets into intuitive visualizations, enabling users to gain insights through interactive charts and graphs.',
            'technologies': 'D3.js JavaScript Python Pandas',
            'github_link': 'https://github.com/',
            'demo_link': 'https://example.com/demo2',
        },
        {
            'title': 'Advanced Image Recognition System',
            'description': 'A computer vision application that can identify and classify objects in images with high accuracy using convolutional neural networks and transfer learning.',
            'technologies': 'Python PyTorch OpenCV CNN',
            'github_link': 'https://github.com/',
            'demo_link': 'https://example.com/demo3',
        },
        {
            'title': 'Responsive E-Learning Platform',
            'description': 'A full-stack web application that provides an interactive learning experience with features like course management, progress tracking, and integrated assessment tools.',
            'technologies': 'Django JavaScript HTML/CSS PostgreSQL',
            'github_link': 'https://github.com/',
            'demo_link': 'https://example.com/demo4',
        },
    ]
    
    for project_data in projects:
        Project.objects.create(**project_data)
    
    print(f"Added {len(projects)} projects")

def add_internships():
    # Clear existing internships
    Internship.objects.all().delete()
    
    # Add sample internships
    internships = [
        {
            'company': 'TechInnovate Solutions',
            'role': 'Machine Learning Engineer Intern',
            'duration': 'May 2022 - August 2022',
            'description': 'Worked with the AI research team to develop and implement machine learning models for predictive analytics applications. Contributed to the development of a recommendation system that improved user engagement by 25%.',
            'technologies': 'Python TensorFlow Scikit-learn SQL Git',
        },
        {
            'company': 'WebSphere Technologies',
            'role': 'Full Stack Developer Intern',
            'duration': 'June 2021 - August 2021',
            'description': 'Joined the web development team to create responsive and user-friendly web applications. Participated in the complete development lifecycle from requirement gathering to deployment.',
            'technologies': 'HTML/CSS JavaScript Django PostgreSQL Git',
        },
    ]
    
    for internship_data in internships:
        Internship.objects.create(**internship_data)
    
    print(f"Added {len(internships)} internships")

def add_certifications():
    # Clear existing certifications
    Certification.objects.all().delete()
    
    # Add sample certifications
    certifications = [
        {
            'title': 'Python for Data Science and Machine Learning',
            'organization': 'Coursera',
            'date_earned': datetime.date(2023, 3, 15),
            'description': 'Comprehensive course covering Python libraries for data analysis, visualization, and machine learning including NumPy, Pandas, Matplotlib, Seaborn, and Scikit-learn.',
            'credential_id': 'PDSML-123456',
            'credential_url': 'https://coursera.org/verify/PDSML-123456',
        },
        {
            'title': 'Deep Learning Specialization',
            'organization': 'DeepLearning.AI',
            'date_earned': datetime.date(2023, 1, 10),
            'description': 'Five-course specialization covering neural networks, improving deep neural networks, structuring machine learning projects, convolutional neural networks, and sequence models.',
            'credential_id': 'DLS-789012',
            'credential_url': 'https://deeplearning.ai/verify/DLS-789012',
        },
        {
            'title': 'SQL for Data Science',
            'organization': 'Udacity',
            'date_earned': datetime.date(2022, 11, 5),
            'description': 'Course focused on using SQL for data manipulation, filtering, aggregation, and joining data from multiple tables for analysis purposes.',
            'credential_id': 'SQL-345678',
            'credential_url': 'https://udacity.com/verify/SQL-345678',
        },
        {
            'title': 'Full Stack Web Development',
            'organization': 'freeCodeCamp',
            'date_earned': datetime.date(2022, 8, 20),
            'description': 'Comprehensive certification covering responsive web design, JavaScript algorithms and data structures, front-end libraries, and API development.',
            'credential_id': 'FSWD-901234',
            'credential_url': 'https://freecodecamp.org/certification/FSWD-901234',
        },
        {
            'title': 'AWS Machine Learning Foundations',
            'organization': 'Amazon Web Services',
            'date_earned': datetime.date(2022, 6, 15),
            'description': 'Introduction to machine learning concepts and AWS services for building, training, and deploying machine learning models at scale.',
            'credential_id': 'AWS-567890',
            'credential_url': 'https://aws.amazon.com/verification/AWS-567890',
        },
        {
            'title': 'TensorFlow Developer Certificate',
            'organization': 'Google',
            'date_earned': datetime.date(2022, 4, 10),
            'description': 'Professional certification demonstrating proficiency in using TensorFlow to solve deep learning and machine learning problems.',
            'credential_id': 'TF-123789',
            'credential_url': 'https://tensorflow.org/certificate/verify/TF-123789',
        },
    ]
    
    for cert_data in certifications:
        Certification.objects.create(**cert_data)
    
    print(f"Added {len(certifications)} certifications")

if __name__ == '__main__':
    print("Adding sample data to the database...")
    add_projects()
    add_internships()
    add_certifications()
    print("Sample data added successfully!")
