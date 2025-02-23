using formsubmit for mails:
```html
<form action="https://formsubmit.co/your-email@example.com" method="POST">
    <label>Name:</label>
    <input type="text" name="name" required>

    <label>Email:</label>
    <input type="email" name="email" required>

    <label>Message:</label>
    <textarea name="message" required></textarea>

    <button type="submit">Send Message</button>
</form>
```

testen site:
```bash
python -m http.server 8000 
```

forms fix:
```html
<form action="https://formsubmit.co/robbe.vanherpe@outlook.com" method="POST" style="max-width: 400px; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
    <label style="display: block; margin-bottom: 5px; font-weight: bold;">Name:</label>
    <input type="text" name="name" required style="width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 5px;">

    <label style="display: block; margin-bottom: 5px; font-weight: bold;">Email:</label>
    <input type="email" name="email" required style="width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 5px;">

    <label style="display: block; margin-bottom: 5px; font-weight: bold;">Message:</label>
    <textarea name="message" required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 5px;"></textarea>

    <button type="submit" style="width: 100%; padding: 10px; background: #0056b3; color: white; border: none; border-radius: 5px; font-size: 16px; cursor: pointer;">Send Message</button>

    <!-- Disable CAPTCHA -->
    <input type="hidden" name="_captcha" value="false">
</form>
```