# Contact Form Setup Guide 📧

## 🎯 Overview
Your portfolio now has a contact form in the footer that allows visitors to send you messages directly!

## ⚡ Quick Setup (5 minutes)

### Step 1: Create Formspree Account
1. Go to [https://formspree.io](https://formspree.io)
2. Click "Get Started" (Free plan is enough!)
3. Sign up with your email or GitHub account

### Step 2: Create New Form
1. After login, click "+ New Form"
2. Give it a name (e.g., "Portfolio Contact Form")
3. Copy the **Form Endpoint URL** (looks like: `https://formspree.io/f/xxxxxxxx`)

### Step 3: Update Your Website
1. Open `_layouts/default.html`
2. Find this line:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="contact-form">
   ```
3. Replace `YOUR_FORM_ID` with your actual Form ID from Formspree

**Example:**
```html
<form id="contact-form" action="https://formspree.io/f/xvgopjqr" method="POST" class="contact-form">
```

### Step 4: Configure Email Settings (Optional)
In Formspree dashboard:
- Set custom email subject
- Add auto-reply message
- Configure spam protection
- Set up email notifications

### Step 5: Test It!
1. Save your changes
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Added contact form"
   git push origin main
   ```
3. Wait 1-2 minutes for GitHub Pages to rebuild
4. Visit your website and test the form!

## 📋 What It Does

### For Visitors:
1. Fill in Name, Email, and Message
2. Click "Send Message"
3. Get instant confirmation
4. Simple and clean interface

### For You:
1. Receive emails directly to your inbox (khaledahmedebrzhim@gmail.com)
2. See all submissions in Formspree dashboard
3. No server or backend needed!
4. Spam protection included

## 🎨 Customization

### Change Form Colors
Edit `style.scss`:
```scss
.submit-btn {
  background: $blue; // Change this to any color
}
```

### Change Form Fields
Edit `_layouts/default.html` to add/remove fields:

**Add Phone Field:**
```html
<div class="form-group">
  <input type="tel" name="phone" placeholder="Phone Number (Optional)">
</div>
```

**Add Subject Field:**
```html
<div class="form-group">
  <input type="text" name="subject" placeholder="Subject" required>
</div>
```

### Change Success Message
Edit `js/contact-form.js`:
```javascript
formStatus.textContent = '✓ Your custom success message here!';
```

## 🔒 Security Features

✅ **Spam Protection**: Formspree includes honeypot and reCAPTCHA
✅ **Email Validation**: Only valid emails accepted
✅ **Rate Limiting**: Prevents spam attacks
✅ **HTTPS**: All data encrypted in transit

## 💡 Alternative Services

If you don't want to use Formspree, here are alternatives:

### 1. Netlify Forms (if hosting on Netlify)
```html
<form name="contact" method="POST" data-netlify="true">
  <!-- form fields -->
</form>
```

### 2. Google Forms
- Create a Google Form
- Embed it in your footer
- Free and unlimited

### 3. EmailJS
```html
<!-- Add EmailJS and configure -->
<script src="https://cdn.emailjs.com/sdk/3.2.0/email.min.js"></script>
```

### 4. Direct mailto (Simple but not recommended)
```html
<a href="mailto:khaledahmedebrzhim@gmail.com?subject=Contact%20from%20Portfolio">Contact Me</a>
```

## 🐛 Troubleshooting

### Form Not Sending
- ✓ Check Form ID is correct
- ✓ Check internet connection
- ✓ Open browser console for errors
- ✓ Verify Formspree account is active

### Not Receiving Emails
- ✓ Check spam folder
- ✓ Verify email in Formspree settings
- ✓ Check Formspree dashboard for submissions

### JavaScript Not Working
- ✓ Clear browser cache
- ✓ Check console for errors
- ✓ Verify `contact-form.js` file exists

### Form Looks Broken
- ✓ Rebuild Jekyll: `bundle exec jekyll build`
- ✓ Check CSS is loading
- ✓ Test on different browsers

## 📊 Formspree Free Plan Limits

- ✅ 50 submissions per month
- ✅ Unlimited forms
- ✅ Email notifications
- ✅ Spam filtering
- ✅ File uploads (up to 10MB)

*If you need more, upgrade to paid plan ($10/month)*

## 🚀 Advanced Features

### Add File Upload
```html
<div class="form-group">
  <label>Attach File (Optional)</label>
  <input type="file" name="attachment" accept=".pdf,.doc,.docx">
</div>
```

### Add reCAPTCHA
In Formspree dashboard:
1. Go to Form Settings
2. Enable reCAPTCHA
3. It will automatically appear on your form

### Custom Redirect After Submit
```html
<input type="hidden" name="_next" value="https://k7alid.github.io/thank-you">
```

### Send Copy to Sender
```html
<input type="hidden" name="_cc" value="khaledahmedebrzhim@gmail.com">
```

## 📝 Sample Test Message

Use this to test your form:

```
Name: Test User
Email: test@example.com
Message: This is a test message to verify the contact form is working correctly. If you receive this, everything is set up properly!
```

## 🎯 Next Steps

1. ✅ Set up Formspree account
2. ✅ Update Form ID in `default.html`
3. ✅ Test the form
4. ✅ Customize colors/text if needed
5. ✅ Push to GitHub
6. ✅ Announce it to your contacts!

---

**Need help?** Check [Formspree Documentation](https://help.formspree.io/) or let me know! 🚀
