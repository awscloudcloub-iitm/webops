# AWS Cloud Club IIT Madras Website

A modern, responsive website for AWS Cloud Club IIT Madras built with Next.js 15, TypeScript, and Shadcn UI.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, React, TypeScript, and Tailwind CSS
- **Beautiful UI**: Styled with Shadcn UI components
- **Fully Responsive**: Optimized for all device sizes
- **Multiple Pages**:
  - Home - Landing page with club overview
  - About Us - Mission, vision, and focus areas
  - Team - Leadership and core team members
  - Events - Upcoming and past events
  - Blogs - Articles and tutorials
  - Resources - Learning materials and certification paths
  - Contact - Contact form and information

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## 🏃‍♂️ Running the Development Server

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## 📦 Build for Production

Build the optimized production version:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## 🎨 Customization

### Update Content

- **Home Page**: Edit `app/page.tsx`
- **About Page**: Edit `app/about/page.tsx`
- **Team Page**: Edit `app/team/page.tsx` - Update team members in the arrays
- **Events Page**: Edit `app/events/page.tsx` - Update events data
- **Blogs Page**: Edit `app/blogs/page.tsx` - Update blog posts
- **Resources Page**: Edit `app/resources/page.tsx` - Update learning resources
- **Contact Page**: Edit `app/contact/page.tsx` - Update contact information

### Update Navigation & Footer

- **Navbar**: Edit `components/navbar.tsx`
- **Footer**: Edit `components/footer.tsx`

## 📁 Project Structure

```
webops/
├── app/                  # Next.js app directory
│   ├── about/           # About page
│   ├── team/            # Team page
│   ├── events/          # Events page
│   ├── blogs/           # Blogs page
│   ├── resources/       # Resources page
│   ├── contact/         # Contact page
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/          # Reusable components
│   ├── ui/             # Shadcn UI components
│   ├── navbar.tsx      # Navigation component
│   └── footer.tsx      # Footer component
└── public/             # Static assets
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Next Steps

1. **Add Images**: Place club photos, logos, and team member photos in the `public/` directory
2. **Update Team Data**: Replace placeholder team member names with actual members
3. **Add Real Events**: Update events with actual dates and registration links
4. **Connect Contact Form**: Implement backend for the contact form
5. **Add Blog Content**: Create actual blog posts with real content
6. **Deploy**: Deploy to Vercel, Netlify, or your preferred hosting platform

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click

## 📞 Support

For questions or issues, contact the AWS Cloud Club IIT Madras team:
- Email: awscloudclub@iitm.ac.in

---

Built with ❤️ by AWS Cloud Club IIT Madras
