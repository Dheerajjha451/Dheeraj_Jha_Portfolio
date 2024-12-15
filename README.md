# Dheeraj Jha's Portfolio

Welcome to my portfolio website! This site showcases my projects and skills as a full-stack developer and UI/UX designer. Built with Next.js and styled using Aceternity UI, Shadcn, and Tailwind CSS, it provides a comprehensive overview of my work and expertise.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Contact](#contact)

## Features

- **Project Showcase**: A detailed display of my projects, including descriptions, technologies used, and links to live demos and repositories.
- **Skills Section**: Highlights my technical skills and proficiencies.
- **Responsive Design**: Ensures the site looks great on all devices.
- **Interactive UI**: Provides a smooth and engaging user experience.

## Technologies Used

- **Next.js**: A React framework for server-rendered or statically-exported React applications.
- **Aceternity UI**: A modern UI component library for React.
- **Shadcn**: A design system built on top of Tailwind CSS.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/Dheerajjha451/Dheeraj_Jha_Portfolio
    cd Dheeraj_Jha_Portfolio
    ```

2. **Install dependencies**:

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Start the development server**:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

4. Open your browser and navigate to `http://localhost:3000` to see the website in action.


## Docker Image

The Docker image for this application is available as:  
`dheerajjha451/portfolio:01`

## Prerequisites

Before running the Docker image, ensure you have the following installed on your local system:

- [Docker](https://docs.docker.com/get-docker/)

## Running the Application Locally

To run the portfolio application locally using Docker, follow these steps:

### Step 1: Pull the Docker Image

Use the following command to pull the Docker image from Docker Hub:

```bash
docker pull dheerajjha451/portfolio:01
```

### Step 2: Run the Docker Container

Run the Docker container using the following command:

```bash
docker run -d -p 3000:3000 dheerajjha451/portfolio:01
```

This will:

- Run the container in detached mode (`-d`).
- Map the container's port `3000` to your local machine's port `3000` (`-p 3000:3000`).

### Step 3: Access the Application

Once the container is running, you can access the portfolio application in your web browser at:

```
http://localhost:3000
```

## Stopping the Application

To stop the running container, first, find the container ID using:

```bash
docker ps
```

Then stop the container with:

```bash
docker stop <container_id>
```

## Additional Commands

- **List Running Containers**:  
  ```bash
  docker ps
  ```

- **Remove the Container**:  
  After stopping the container, you can remove it with:  
  ```bash
  docker rm <container_id>
  ```

- **Remove the Docker Image**:  
  If you no longer need the Docker image, you can remove it with:  
  ```bash
  docker rmi dheerajjha451/portfolio:01
  ```

## Customization

If you want to customize the application or build the Docker image yourself, you can clone this repository and use the provided `Dockerfile`.

```bash
git clone https://github.com/dheerajjha451/portfolio.git
cd portfolio
docker build -t dheerajjha451/portfolio:01 .
```

## Contact

If you have any questions or would like to collaborate, feel free to reach out:

- **Email**: dheerajjha451@gmail.com
- **LinkedIn**: [linkedin.com/in/dheeraj-jha451/](https://www.linkedin.com/in/dheeraj-jha451/)
  

---

Feel free to customize the template as needed and add any additional sections or information relevant to your portfolio.

