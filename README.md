# Campaign Website for সিয়াম ফেরদৌস ইমন

This is a modern, dynamic, and responsive campaign website for সিয়াম ফেরদৌস ইমন, a candidate for the post of Research and Publication Secretary in the Dhaka University Central Students' Union (DUCSU) election. The website is designed to connect with students, share the candidate's vision, and provide transparency.

Built with Next.js and Firebase, this project was developed in **Firebase Studio**, an AI-powered development environment.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (with App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
- **Database & Auth:** [Firebase (Firestore & Authentication)](https://firebase.google.com/)
- **Generative AI:** [Genkit](https://firebase.google.com/docs/genkit)
- **Deployment:** Firebase Hosting

## Key Features

### Public-Facing Website

- **Home Page (`/`):** A comprehensive landing page featuring a hero carousel, candidate introduction, dynamic commitments, a scrolling notice bar, and sections for research, publications, social work, and more.
- **About Page (`/about`):** Detailed biography of the candidate, his educational background, and experience. Also features a dynamic "Team Members" section.
- **Manifesto Page (`/manifesto`):** Outlines the key pledges and detailed plans of the candidate.
- **Gallery Page (`/gallery`):** A visual showcase of the candidate's activities and campaign moments.
- **Transparency Page (`/transparency`):** A dedicated page for financial transparency and tracking the progress of manifesto pledges. Includes an AI-powered tool to summarize financial disclosures of any candidate.
- **Get Involved Page (`/get-involved`):** Provides information on how to volunteer, get in touch, and follow the campaign on social media. Includes a form for feedback.

### Admin Panel

- **Secure Login (`/admin/login`):** An authentication-protected route for the campaign administrator.
- **Dashboard (`/admin`):** A central hub to manage all dynamic content on the website. The admin can perform CRUD (Create, Read, Update, Delete) operations on:
  - **Live Notice Bar:** Update the text for the scrolling notice on the homepage.
  - **Commitments:** Manage the candidate's key promises.
  - **Academic Achievements:** Add or edit academic milestones.
  - **Social Work Gallery:** Update images of social activities.
  - **Feedback Management:** View and delete feedback submitted by users.
  - **Team Members:** Manage the profiles of the campaign team.

## Getting Started

To get started with the development environment, take a look at the main page component at `src/app/page.tsx` and the admin panel at `src/app/admin/(protected)/page.tsx`.

The project is configured to work with Firebase. The configuration can be found in `src/lib/firebase.ts`. Ensure you have the correct Firebase project credentials set up in your local environment.
# manisha.ck
# manisha.ck
