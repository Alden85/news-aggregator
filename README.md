# Newsfeed App

This project is a Vite and React-based web application, containerized with Docker for easy setup.

## Prerequisites

Before you begin, ensure you have installed:

- [Docker](https://www.docker.com/get-started)

## Getting Started

These instructions will guide you through getting a copy of the project up and running on your local machine for development and testing purposes.

## Installation

#### 1. Clone the repository

```bash
git clone https://github.com/Alden85/news-aggregator

cd news-aggregator
```

#### 2. Build the Docker Image

```bash
docker build -t news-aggregator .
```

#### 3. Running the App

To start the application, run the below command. This command runs the Docker container, mapping port 3000 of the container to port 3000 on your host machine.

```bash
docker run -p 3000:3000 news-aggregator
```

This command will start the app and make it accessible at:

```bash
http://localhost:3000
```

#### 4. Environment Variables

You can use an environment file to pass it to the `docker run` command, as shown below.
_(Do not commit .env files to your repository.)_

```bash
docker run -p 3000:3000 --env-file .env news-aggregator
```

## Contact

For questions, please contact me.
