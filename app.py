#!/usr/bin/env python3
"""
create_resume.py - Creates a placeholder PDF resume for Shahbaz Alam
This script requires reportlab library: pip install reportlab
"""

from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor
import os
from datetime import datetime

def create_resume_pdf(filename="resume.pdf"):
    """Create a placeholder resume PDF file"""
    
    # Create canvas
    c = canvas.Canvas(filename, pagesize=letter)
    width, height = letter
    
    # Colors
    primary_color = HexColor("#4361ee")
    secondary_color = HexColor("#3a0ca3")
    accent_color = HexColor("#4cc9f0")
    dark_color = HexColor("#1a1a2e")
    gray_color = HexColor("#6c757d")
    
    # Header
    c.setFillColor(primary_color)
    c.rect(0, height - 100, width, 100, fill=True, stroke=False)
    
    c.setFillColorRGB(1, 1, 1)
    c.setFont("Helvetica-Bold", 24)
    c.drawString(72, height - 50, "SHAHBAZ ALAM")
    
    c.setFont("Helvetica", 16)
    c.drawString(72, height - 75, "Data Analyst")
    
    # Contact Info
    c.setFillColor(gray_color)
    c.setFont("Helvetica", 10)
    contact_y = height - 120
    c.drawString(72, contact_y, "Email: shahbaz.alam@example.com")
    c.drawString(72, contact_y - 15, "Phone: +91 98765 43210")
    c.drawString(72, contact_y - 30, "Location: New Delhi, India")
    c.drawString(72, contact_y - 45, "LinkedIn: linkedin.com/in/shahbaz-alam")
    c.drawString(72, contact_y - 60, "GitHub: github.com/shahbaz-alam")
    
    # Summary
    c.setFillColor(dark_color)
    c.setFont("Helvetica-Bold", 14)
    c.drawString(72, contact_y - 90, "PROFESSIONAL SUMMARY")
    
    c.setFillColor(gray_color)
    c.setFont("Helvetica", 11)
    summary_text = [
        "Data Analyst with 2+ years of experience in transforming complex data into actionable insights.",
        "Proficient in Python, SQL, Power BI, and machine learning. Currently working at 100Miles.ai,",
        "specializing in data visualization, predictive modeling, and creating interactive dashboards",
        "that help organizations make data-driven decisions."
    ]
    
    y_pos = contact_y - 110
    for line in summary_text:
        c.drawString(72, y_pos, line)
        y_pos -= 18
    
    # Experience
    y_pos -= 20
    c.setFillColor(dark_color)
    c.setFont("Helvetica-Bold", 14)
    c.drawString(72, y_pos, "WORK EXPERIENCE")
    y_pos -= 25
    
    # Experience 1
    c.setFillColor(secondary_color)
    c.setFont("Helvetica-Bold", 12)
    c.drawString(72, y_pos, "Data Analyst")
    c.setFillColor(gray_color)
    c.setFont("Helvetica", 11)
    c.drawString(200, y_pos, "100Miles.ai")
    c.drawString(width - 100, y_pos, "2023 - Present")
    y_pos -= 20
    
    experience1_points = [
        "• Developed and maintained dashboards using Power BI for tracking key business metrics",
        "• Implemented data pipelines using Python and SQL to automate reporting processes",
        "• Created predictive models for customer behavior analysis with 85% accuracy",
        "• Collaborated with cross-functional teams to identify data-driven opportunities"
    ]
    
    c.setFont("Helvetica", 10)
    for point in experience1_points:
        c.drawString(85, y_pos, point)
        y_pos -= 15
        if y_pos < 100:  # Check if we need a new page
            c.showPage()
            y_pos = height - 72
    
    # Experience 2
    y_pos -= 15
    c.setFillColor(secondary_color)
    c.setFont("Helvetica-Bold", 12)
    c.drawString(72, y_pos, "Junior Data Analyst")
    c.setFillColor(gray_color)
    c.setFont("Helvetica", 11)
    c.drawString(200, y_pos, "TechSolutions Inc.")
    c.drawString(width - 100, y_pos, "2022 - 2023")
    y_pos -= 20
    
    experience2_points = [
        "• Assisted in data cleaning and preprocessing for various projects",
        "• Created Excel dashboards and reports for client presentations",
        "• Participated in data visualization projects using Tableau",
        "• Supported senior analysts in statistical analysis and modeling"
    ]
    
    c.setFont("Helvetica", 10)
    for point in experience2_points:
        c.drawString(85, y_pos, point)
        y_pos -= 15
        if y_pos < 100:  # Check if we need a new page
            c.showPage()
            y_pos = height - 72
    
    # Skills
    y_pos -= 20
    c.setFillColor(dark_color)
    c.setFont("Helvetica-Bold", 14)
    c.drawString(72, y_pos, "TECHNICAL SKILLS")
    y_pos -= 25
    
    skills = [
        ("Programming:", "Python, SQL, R, JavaScript"),
        ("Data Visualization:", "Power BI, Tableau, Matplotlib, Seaborn, Plotly"),
        ("Machine Learning:", "Scikit-learn, Pandas, NumPy, TensorFlow"),
        ("Databases:", "MySQL, PostgreSQL, MongoDB"),
        ("Tools:", "Git, GitHub, Excel, Jupyter Notebook, Docker"),
        ("Other:", "Statistics, Data Mining, A/B Testing, Predictive Analytics")
    ]
    
    c.setFont("Helvetica", 11)
    for skill, details in skills:
        c.setFillColor(secondary_color)
        c.drawString(72, y_pos, skill)
        c.setFillColor(gray_color)
        c.drawString(150, y_pos, details)
        y_pos -= 20
        if y_pos < 100:  # Check if we need a new page
            c.showPage()
            y_pos = height - 72
    
    # Education
    y_pos -= 20
    c.setFillColor(dark_color)
    c.setFont("Helvetica-Bold", 14)
    c.drawString(72, y_pos, "EDUCATION")
    y_pos -= 25
    
    c.setFillColor(secondary_color)
    c.setFont("Helvetica-Bold", 12)
    c.drawString(72, y_pos, "Bachelor of Technology in Computer Science")
    c.setFillColor(gray_color)
    c.setFont("Helvetica", 11)
    c.drawString(72, y_pos - 18, "Delhi Technological University, Delhi")
    c.drawString(width - 100, y_pos - 18, "2018 - 2022")
    
    # Projects
    y_pos -= 40
    c.setFillColor(dark_color)
    c.setFont("Helvetica-Bold", 14)
    c.drawString(72, y_pos, "PROJECTS")
    y_pos -= 25
    
    projects = [
        ("Customer Churn Prediction", "ML model with 92% accuracy, reduced attrition by 15%"),
        ("Sales Performance Dashboard", "Power BI dashboard improved decision-making by 20%"),
        ("COVID-19 Data Analysis Portal", "Interactive web app with predictive modeling"),
        ("E-commerce Business Intelligence", "Automated reporting system reduced manual work by 80%")
    ]
    
    c.setFont("Helvetica", 11)
    for project, description in projects:
        c.setFillColor(secondary_color)
        c.drawString(72, y_pos, f"• {project}:")
        c.setFillColor(gray_color)
        text_width = c.stringWidth(f"• {project}:", "Helvetica", 11)
        c.drawString(72 + text_width + 5, y_pos, description)
        y_pos -= 20
        if y_pos < 100:  # Check if we need a new page
            c.showPage()
            y_pos = height - 72
    
    # Footer
    y_pos = 50
    c.setFillColor(gray_color)
    c.setFont("Helvetica-Oblique", 9)
    c.drawCentredString(width / 2, y_pos, "Generated by create_resume.py")
    c.drawCentredString(width / 2, y_pos - 12, f"Last updated: {datetime.now().strftime('%B %d, %Y')}")
    
    # Save the PDF
    c.save()
    print(f"Resume PDF created successfully: {filename}")
    print(f"File size: {os.path.getsize(filename)} bytes")

def main():
    """Main function to create the resume"""
    try:
        create_resume_pdf()
        print("\nNote: This is a placeholder resume. Please replace with your actual resume.")
        print("To use your own resume, save it as 'resume.pdf' in the same directory.")
    except Exception as e:
        print(f"Error creating PDF: {e}")
        print("\nInstalling required library...")
        try:
            import subprocess
            import sys
            subprocess.check_call([sys.executable, "-m", "pip", "install", "reportlab"])
            print("Library installed successfully. Trying again...")
            create_resume_pdf()
        except:
            print("Could not install required library. Please install manually:")
            print("pip install reportlab")
            # Create a simple text file instead
            with open("resume.txt", "w") as f:
                f.write("SHAHBAZ ALAM - DATA ANALYST\n")
                f.write("This is a placeholder resume.\n")
                f.write("Please replace with your actual resume PDF file.\n")
                f.write("Save your resume as 'resume.pdf' in this directory.\n")
            print("Created resume.txt placeholder instead.")

if __name__ == "__main__":
    main()