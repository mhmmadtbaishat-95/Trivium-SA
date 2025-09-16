# Netlify CMS Setup Guide

This guide will help you set up Netlify CMS for your Trivium website so your client can easily manage content.

## What's Been Set Up

✅ **CMS Configuration**: Complete Netlify CMS configuration with all content collections
✅ **Admin Interface**: Admin panel accessible at `/admin/`
✅ **Content Files**: All content is now stored in JSON files in `src/data/`
✅ **Context Integration**: ContentContext now reads from CMS data files
✅ **Netlify Configuration**: Deployment settings configured

## Content Collections Available

Your client can now edit:

1. **Site Settings** - Meta information, SEO, social media
2. **Navigation** - Menu items and logo
3. **Hero Section** - Main banner, video, service slides
4. **About Section** - Company information and content
5. **Services** - Service offerings and descriptions
6. **Testimonials** - Client testimonials
7. **Statistics** - Company stats and numbers
8. **Contact** - Contact form and map information
9. **Footer** - Footer links and company information

## Deployment Steps

### 1. Deploy to Netlify

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Add Netlify CMS integration"
   git push origin main
   ```

2. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Use these build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
     - Node version: 18

### 2. Enable Netlify Identity

1. **In your Netlify dashboard**:
   - Go to Site settings → Identity
   - Click "Enable Identity"
   - Under "Registration preferences", select "Invite only"

2. **Enable Git Gateway**:
   - In Identity settings, go to "Services"
   - Click "Enable Git Gateway"

### 3. Set Up Authentication

1. **Invite users**:
   - Go to Identity → Invite users
   - Add your client's email address
   - They'll receive an invitation to create an account

2. **Test the admin panel**:
   - Visit `https://your-site.netlify.app/admin/`
   - Log in with the invited user account

## How Your Client Can Use It

### Accessing the CMS

1. **Go to**: `https://your-site.netlify.app/admin/`
2. **Log in** with their Netlify Identity account
3. **Start editing** any content collection

### Content Management

- **Real-time editing**: Changes are saved automatically
- **Media management**: Upload images directly in the CMS
- **Preview changes**: See how content looks before publishing
- **Version control**: All changes are tracked in Git

### Available Content Types

#### Site Settings
- Site title, description, keywords
- Social media meta tags
- SEO information

#### Hero Section
- Main headline and description
- Background video
- Service slides with images
- Call-to-action buttons

#### Services
- Service titles and descriptions
- Service numbers and links
- Add/remove services

#### Testimonials
- Client quotes
- Author information
- Add/remove testimonials

#### Contact
- Contact form fields
- Map embed code
- Contact information

## File Structure

```
src/
├── data/                 # CMS content files
│   ├── meta.json        # Site settings
│   ├── navigation.json  # Navigation menu
│   ├── hero.json        # Hero section
│   ├── about.json       # About section
│   ├── services.json    # Services
│   ├── testimonials.json # Testimonials
│   ├── stats.json       # Statistics
│   ├── contact.json     # Contact info
│   └── footer.json      # Footer
├── context/
│   └── ContentContext.jsx # Updated to use CMS data
public/
├── admin/
│   ├── index.html       # CMS admin interface
│   └── config.yml       # CMS configuration
└── images/              # Media uploads folder
```

## Customization

### Adding New Content Types

1. **Add to config.yml**:
   ```yaml
   - name: "new_section"
     label: "New Section"
     files:
       - name: "new_section"
         label: "New Section Content"
         file: "src/data/new_section.json"
         fields:
           - {label: "Title", name: "title", widget: "string"}
   ```

2. **Create data file**: `src/data/new_section.json`

3. **Update ContentContext**: Import and add to CONTENT_DATA

4. **Use in components**: Access via `useContent()` hook

### Styling the Admin Interface

The CMS admin interface can be customized by adding CSS to the admin page or using Netlify CMS themes.

## Troubleshooting

### Common Issues

1. **"Git Gateway not enabled"**:
   - Enable Git Gateway in Netlify Identity settings

2. **"Authentication failed"**:
   - Check that Identity is enabled
   - Verify user has been invited

3. **"Content not updating"**:
   - Check that files are in the correct location
   - Verify JSON syntax is valid

4. **"Images not uploading"**:
   - Check that `public/images/` folder exists
   - Verify media folder configuration in config.yml

### Support

- [Netlify CMS Documentation](https://www.netlifycms.org/docs/)
- [Netlify Identity Documentation](https://docs.netlify.com/visitor-access/identity/)
- [Git Gateway Documentation](https://docs.netlify.com/visitor-access/git-gateway/)

## Next Steps

1. **Deploy to Netlify** following the steps above
2. **Set up Identity and Git Gateway**
3. **Invite your client** to the admin panel
4. **Train your client** on how to use the CMS
5. **Test all functionality** to ensure everything works

Your client will now be able to manage all website content without touching any code!
