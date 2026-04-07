# John Alexis Estuaras - Portfolio Website

A modern, responsive portfolio website designed to showcase technical skills, certifications, and projects to potential employers and freelance clients.

## 🎨 Features

✨ **Modern Design**
- Apple-inspired clean and minimal aesthetic
- Dark theme (black, grey, white) with yellow accents
- Smooth animations and transitions
- Professional typography and visual hierarchy

📱 **Fully Responsive**
- Mobile-first approach
- Optimized for all screen sizes (desktop, tablet, mobile)
- Hamburger menu for mobile navigation

🎯 **Key Sections**
1. **Hero Section** - Bold headline and call-to-action buttons
2. **About Me** - Personal introduction and highlights
3. **Skills** - Technical skills (HTML, CSS, JavaScript, Java, PHP) and core competencies
4. **Projects** - Showcase project cards (ready for future projects)
5. **Certifications** - Highlight National Certificate in Web Development
6. **Resume** - Download resume button
7. **Contact** - Contact form and social links

✨ **Interactive Features**
- Sticky navigation bar with smooth scrolling
- Scroll reveal animations
- Hover glow effects on interactive elements
- Form validation
- Scroll-to-top button
- Mobile menu toggle
- Active navigation highlighting

## 📁 File Structure

```
portfolio-website/
├── index.html      # Main HTML file with all content
├── styles.css      # All styling and animations
├── script.js       # JavaScript for interactivity
└── README.md       # This file
```

## 🚀 How to Use

### 1. Open the Website
Simply open `index.html` in any modern web browser.

### 2. Customize Content
Edit `index.html` to update:
- **Name & Titles**: Update "John Alexis Estuaras" with your name
- **About Section**: Modify the "About Me" section with your story
- **Skills**: Add or remove skills in the Technical and Core Skills sections
- **Projects**: Replace project titles and descriptions; update project links when ready
- **Certifications**: Add additional certifications as needed
- **Contact Links**: Update social media links (Facebook, Instagram, LinkedIn, Indeed)

### 3. Update Social Links
In the Contact section, replace `#` with actual URLs:
```html
<a href="https://facebook.com/yourprofile" class="social-link">
    <i class="fab fa-facebook-f"></i>
</a>
```

### 4. Add Resume
To enable the resume download:
- Place your resume file (PDF) in the same directory as `index.html`
- Update the button HTML in the Resume section:
```html
<a href="your-resume.pdf" class="btn btn-primary" download>
    <i class="fas fa-download"></i> Download Resume
</a>
```

### 5. Deploy the Website
Upload all three files (index.html, styles.css, script.js) to your web hosting:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting
- Any standard web hosting service

## 🎨 Customization Guide

### Change Color Scheme
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #FFD60A;        /* Yellow accent color */
    --background-dark: #0a0a0a;      /* Main background */
    --background-secondary: #1a1a1a; /* Secondary background */
    --text-light: #ffffff;           /* Main text */
    --text-gray: #b0b0b0;           /* Secondary text */
}
```

### Modify Animations
Adjust animation timing in `styles.css`:
- Change `0.3s` to faster/slower transitions
- Modify `fadeInUp`, `slideInLeft`, etc. keyframes for different effects

### Update Typography
Change font sizes and weights:
- `.hero-title` - Hero section headline
- `.section-title` - Section headings (About, Skills, etc.)
- `body` - Base font for all text

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (full layout)
- **Tablet**: 769px - 1199px (optimized grid)
- **Mobile**: 480px - 768px (stacked layouts)
- **Small Mobile**: below 480px (single column)

## 🛠️ Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, animations, and responsive design
- **JavaScript (Vanilla)**: No frameworks, pure ES6 JavaScript
- **Font Awesome**: Icon library (CDN)
- **Google Fonts**: Modern system fonts

## ✨ Features Breakdown

### Smooth Scrolling
- Click any navigation link for smooth scroll to section
- Scroll-to-top button appears after scrolling down

### Scroll Reveal Animations
Elements fade in and slide up as they enter the viewport - no library needed!

### Form Validation
- Contact form validates name, email, and message
- Email format validation
- Success feedback on submit

### Mobile Navigation
- Hamburger menu on tablets/mobile
- Auto-closes when a link is clicked
- Smooth transitions

### Hover Effects
- Yellow glow on buttons and links
- Card lift effect on project cards
- Scale and shadow effects on interactive elements

## 📞 Contact Section

The contact form is ready to collect messages. To make it functional:

### Option 1: Use Formspree (Free, No Backend)
1. Update the form action in `index.html`:
```html
<form id="contactForm" action="https://formspree.io/f/YOUR_ID" method="POST">
```
2. Get your Formspree ID from formspree.io

### Option 2: Use Backend Service
- EmailJS
- SendGrid
- Firebase
- Custom backend API

## 🔍 SEO Optimization

To improve search engine visibility:
1. Update `<title>` and meta description
2. Add proper heading hierarchy
3. Use semantic HTML
4. Optimize images
5. Add Open Graph tags

## 🎯 Next Steps

1. **Customize all text** with your information
2. **Add project links** when projects are ready
3. **Update social media URLs** to your profiles
4. **Add your resume** for download
5. **Test on multiple devices** for responsiveness
6. **Deploy** to your chosen hosting platform

## 💡 Tips

- Keep the design minimal and professional
- Test the form before deploying
- Regularly update projects section
- Use high-quality images for project thumbnails
- Keep social links active and up-to-date
- Monitor contact form submissions

## 📄 License

This portfolio template is free to use and customize for personal use.

## 🤝 Support

For issues or questions:
- Check browser console for errors (F12)
- Ensure all files are in the same directory
- Test in different browsers for compatibility
- Verify file paths in link/script tags

---

**Built with ❤️ for aspiring developers and technicians**

Good luck with your portfolio and future opportunities! 🚀
