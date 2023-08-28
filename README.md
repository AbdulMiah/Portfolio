# Personal Portfolio

Welcome to my personal portfolio repository! This project showcases my journey, skills, and projects in an immersive and interactive way. The portfolio is built using React with TypeScript, powered by Vite for fast development. It incorporates Three.js for stunning 3D rendering and Tailwind CSS for sleek styling.

## Features

- 🚀 Interactive 3D rendering using Three.js
- 💅 Stylish UI crafted with Tailwind CSS
- 🧩 Built with React and TypeScript, accelerated by Vite

## CI/CD Workflow and Automated Deployment

I've implemented a robust CI/CD workflow to ensure seamless updates and deployment. Leveraging Docker 🐳, AWS S3 and CloudFront ☁️, and GitHub Actions 🚀, the process is automated. Here's how it works:

1. **Push to GitHub:** Any code pushed to the main branch triggers the CI/CD pipeline.
2. **GitHub Actions:** GitHub Actions initiates the workflow.
3. **Build Application:** The initial job executes the build command to confirm the successful compilation of the application.
4. **Docker Image Creation:** A Docker image is created to encapsulate the application, which is then pushed to Docker Hub for backup.
5. **AWS S3 Deployment:** Sync the static web contents to the S3 bucket.
6. **AWS CloudFront Integration:** The web content stored in the S3 bucket is integrated with AWS CloudFront, a content delivery network (CDN), which enables efficient distribution of content to users worldwide, reducing latency and enhancing user experience.
7. **Live Website Update:** Updates to the portfolio are swiftly reflected on the live website.

## Keeping Up to Date

Stay informed about the changes in this project by viewing the [Changelog](CHANGELOG.md).

## Build and Run Locally

To explore the portfolio locally, follow these steps:

1. **Clone the repository:**

   ```
   https://github.com/AbdulMiah/Portfolio.git
   cd Portfolio
   ```

2. **Install Dependencies:**

   ```
   npm install
   ```

3. **Run the Development Server:**

   ```
   npm run dev
   ```

4. **Access the App:**
   Visit `http://localhost:3000` in your browser to view and interact with the portfolio.

## Get in Touch

Feel free to explore the code, provide feedback, and get inspired by this portfolio project. For any questions, reach out to me on [LinkedIn](https://www.linkedin.com/in/abdul-m-miah/).

Let's create together! 🌟
