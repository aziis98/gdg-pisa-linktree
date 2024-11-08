# GDG Pisa / Links

Welcome to the GDG Pisa Links project! This project is a simple web application that provides links
to various GDG Pisa resources and social media platforms. It is built using TypeScript, Vite and
Preact.

## Features

-   Responsive design with support for dark mode

-   Links to GDG Pisa's social media platforms

-   Dynamic fetching and display of the latest GDG Pisa event

## Installation

To get started with the project, clone the repository and install the dependencies:

```sh
$ git clone https://github.com/.../gdg-pisa-links.git
$ cd gdg-pisa-links
$ bun install
```

## Usage

To run the project locally, use the following command:

```sh
$ bun dev
```

This will start a development server and you can view the application in your browser at
`http://localhost:5173`.

## Development

### Project Structure

The project has the following structure:

```
index.html
package.json
public/
src/
    main.tsx
    styles.css
tsconfig.json
vite.config.ts
```

The main files are:

-   **index.html**: The main HTML file that includes the structure of the web page.

-   **src/main.tsx**: The main TypeScript file that initializes the Preact application and fetches
    the latest event.

-   **src/styles.css**: The CSS file that contains the styles for the application.

-   **vite.config.ts**: The Vite configuration file for Preact.

### Building the Project

To build the project for production, use the following command:

```sh
bun run build
```

This will create a `dist/` directory with the production build of the application.