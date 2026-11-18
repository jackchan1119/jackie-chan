# jackie-chan-portfolio
Personal portfolio for Jackie Chan — Information Security professional with IT Help Desk experience.

## Updating the résumé
Add your PDF résumé at `public/resume.pdf`. The “Download résumé” button links to that file.

## Adding certificates
This is a static GitHub Pages site, so certificates are published by adding files to the repository (there is no upload form on the live site).

1. Add each certificate PDF to `public/certificates/`.
2. In `src/main.jsx`, add an entry to the `certifications` array with its title, issuer, date, and file path. For example:
   ```js
   { title: 'Certification Name', issuer: 'Issuing organization', date: '2026', file: 'certificates/certificate-name.pdf' }
   ```
3. Commit the changes. The workflow will publish the résumé and certificates with the site.

Files in `public/` are publicly accessible. Only upload certificates you are comfortable sharing publicly, and redact personal identifiers if needed.
