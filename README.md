# GuidedPath Home - Professional React Website

A fully responsive, production-ready website for GuidedPath Home, a real estate investment company in DFW, Texas. Built with React and modern web technologies.

## Features

- ✅ Full-screen image slider with smooth transitions
- ✅ Responsive navigation with mobile menu
- ✅ Interactive "How It Works" section
- ✅ Benefits and features showcase
- ✅ Customer testimonials
- ✅ FAQ accordion
- ✅ Contact form with validation
- ✅ Professional footer
- ✅ **100% Mobile Responsive** - Works perfectly on all devices
- ✅ Smooth scroll navigation
- ✅ Modern gradient designs
- ✅ Accessibility features
- ✅ Production-ready code

## Technologies Used

- React 18
- CSS3 with modern features
- Google Fonts (Poppins)
- Unsplash images for slider
- React Icons

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The website will open at [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
src/
├── components/
│   ├── Navbar.js & Navbar.css
│   ├── ImageSlider.js & ImageSlider.css
│   ├── HowItWorks.js & HowItWorks.css
│   ├── Benefits.js & Benefits.css
│   ├── Testimonials.js & Testimonials.css
│   ├── FAQ.js & FAQ.css
│   ├── ContactForm.js & ContactForm.css
│   └── Footer.js & Footer.css
├── App.js
├── App.css
├── index.js
└── index.css
```

## Customization

### Colors
Edit the CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  --accent-color: #3b82f6;
  /* ... more colors */
}
```

### Slider Images
Update the images in `src/components/ImageSlider.js`:
```javascript
const slides = [
  {
    image: "your-image-url-here",
    // ... other properties
  }
];
```

### Contact Information
Update contact details in `src/components/Footer.js` and `src/components/ContactForm.js`

## Responsive Breakpoints

- Desktop: 1024px and above
- Tablet: 768px - 1023px
- Mobile: Below 768px
- Small Mobile: Below 480px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized images
- Efficient CSS animations
- Lazy loading support ready
- Production build is minified and optimized

## License

This project is created for business use.

## Support

For questions or support:
- Email: support@GuidedPathHome.com
- Phone: (469) 406 4509
- Location: DFW, Texas

---

Made with ❤️ using React
