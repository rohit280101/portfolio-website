# Developer Portfolio Website

This is a developer portfolio website built using Next.js and Tailwind CSS. The website showcases projects, skills, and provides a contact form for potential clients or employers.

## Features

- **Responsive Design**: The website is fully responsive and looks great on all devices.
- **Dynamic Components**: Utilizes React components for modularity and reusability.
- **Tailwind CSS**: Styled using Tailwind CSS for a modern and clean look.
- **TypeScript**: Built with TypeScript for type safety and better development experience.

## Project Structure

```
portfolio-website
├── src
│   ├── app
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── types
│       └── index.ts
├── public
│   └── resume.pdf
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── next.config.js
```

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js (version 14 or later)
- npm (Node package manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   ```

2. Navigate to the project directory:
   ```bash
   cd portfolio-website
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application

To run the application in development mode, use the following command:

```bash
npm run dev
```

Open your browser and go to `http://localhost:3000` to see your portfolio.

### Building for Production

To build the application for production, use:

```bash
npm run build
```

Then, you can start the production server with:

```bash
npm start
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.