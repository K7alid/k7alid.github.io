# 📧 EmailJS Setup Guide

## ✅ You Already Have:
- ✅ Public Key: `0m4ZytTaVyxyGl17_`

## 🎯 What You Need Now:

### Step 1: Create Email Service
1. Go to: https://dashboard.emailjs.com/admin
2. Click **"Email Services"** in left menu
3. Click **"Add New Service"**
4. Choose your email provider (Gmail recommended)
5. Connect your Gmail: **khaledahmedebrzhim@gmail.com**
6. Copy the **Service ID** (looks like: `service_abc123`)

### Step 2: Create Email Template
1. Click **"Email Templates"** in left menu
2. Click **"Create New Template"**
3. Give it a name: `contact_form`
4. Set template content:

**Subject:**
```
New Contact from {{from_name}}
```

**Content:**
```
You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from k7alid.github.io
```

5. Save template
6. Copy the **Template ID** (looks like: `template_abc123`)

### Step 3: Update the Code

Open `js/contact-form.js` and replace:

**Line 40:**
```javascript
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

**Replace with:**
```javascript
emailjs.send('service_abc123', 'template_abc123', templateParams)
```
(Use your actual Service ID and Template ID)

---

## 🧪 Test It:

1. Go to: http://127.0.0.1:4000/
2. Fill the contact form
3. Click "Send Message"
4. Check your email: khaledahmedebrzhim@gmail.com
5. You should receive the message! 📬

---

## 🔥 Quick Setup (5 minutes):

1. **Dashboard:** https://dashboard.emailjs.com/admin
2. **Add Service** → Gmail → Copy Service ID
3. **Add Template** → Use template above → Copy Template ID
4. **Update Code** → Replace IDs in contact-form.js
5. **Test** → Send a test message
6. **Push to GitHub** → `git add . && git commit -m "Setup EmailJS" && git push`

---

## 📝 Current Status:

✅ **Public Key:** Already added to `default.html`
✅ **EmailJS SDK:** Already loaded
✅ **JavaScript Code:** Updated to use EmailJS
⏳ **Service ID:** Need to add (from EmailJS dashboard)
⏳ **Template ID:** Need to add (from EmailJS dashboard)

---

## 🎯 Once Done:

The contact form will:
- ✅ Send emails directly to your Gmail
- ✅ No email client needed
- ✅ Professional and smooth
- ✅ Works on mobile and desktop
- ✅ Free tier: 200 emails/month

---

## ❓ Need Help?

1. **Login:** https://dashboard.emailjs.com/sign-in
2. **Email:** Use same Google account (khaledahmedebrzhim@gmail.com)
3. **Docs:** https://www.emailjs.com/docs/

Let me know when you get the Service ID and Template ID! 🚀
