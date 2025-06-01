# Resume Setup Instructions

To enable the resume download functionality on your portfolio site, follow these steps:

## Option 1: Add Your Resume File Directly

1. Create your resume as a PDF file
2. Name it `resume.pdf`
3. Place it in this `public` directory
4. The download button will now work automatically

## Option 2: Convert the HTML Template to PDF

1. We've created an HTML template for you at `resume-template.html`
2. Open this file in a browser
3. Edit it to include your information
4. Use your browser's print functionality to save as PDF:
   - Chrome: Right-click > Print > Save as PDF
   - Firefox: Right-click > Print > Save as PDF
   - Edge: Right-click > Print > Save as PDF
5. Name the file `resume.pdf` and place it in this directory

## Customizing the Download Button

If you want to change the filename that appears when users download your resume:

1. Open `components/navbar.tsx`
2. Find the line: `link.setAttribute("download", "your-name-resume.pdf");`
3. Change `your-name-resume.pdf` to your preferred filename

## Notes

- The resume file must be named `resume.pdf` unless you change the path in the `navbar.tsx` file
- For best results, keep your resume file under 5MB
- Test the download functionality after adding your resume
