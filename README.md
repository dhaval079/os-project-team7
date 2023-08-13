# OS_Project-Team7 - Operating System Algorithms Simulator

![GitHub repo size](https://img.shields.io/github/repo-size/dhaval079/os-project-team7)
![GitHub last commit](https://img.shields.io/github/last-commit/dhaval079/os-project-team7)

Welcome to the OS_Project-Team7 repository! This repository contains an amazing website that serves as a simulator for various algorithms used in the Operating System subject. Our simulator covers four popular algorithms: Round Robin, Banker's Algorithm, Disk Scheduling, and MRU (Most Recently Used). With this simulator, you can gain hands-on experience and better understanding of these algorithms in a practical and interactive manner.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [License](#license)

## Introduction

The OS_Project-Team7 website provides an interactive and user-friendly platform to simulate the behavior of popular Operating System algorithms. Whether you are a student learning about these algorithms or a professional looking to refresh your knowledge, our simulator is designed to cater to all levels of expertise.

## Features

Our simulator offers the following key features:

1. **Round Robin Algorithm**: Simulate the round-robin CPU scheduling algorithm with adjustable time quantum.

2. **Banker's Algorithm**: Explore the banker's algorithm for deadlock avoidance and resource allocation.

3. **Disk Scheduling**: Observe disk scheduling algorithms like FCFS, SSTF, SCAN, C-SCAN, LOOK, and C-LOOK in action.

4. **MRU (Most Recently Used)**: Understand the MRU page replacement algorithm and how it handles memory management.

## Technologies Used

- Html,Css,Js: For building the interactive web application.
- Docker: For containerizing the application and ensuring easy deployment.
- CircleCI: For setting up the Continuous Integration and Continuous Deployment (CI/CD) pipeline.
- Apache Tomcat: For hosting the backend on the localhost.

## Getting Started

To run the OS_Project-Team7 simulator on your local machine, follow the instructions below.

### Prerequisites

Make sure you have the following software installed on your system:

- Node.js (v12 or higher)
- MongoDB
- Docker (optional, required only if you want to use the Docker container)

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/os_Project-Team7.git
cd os_Project-Team7
```

## Getting Started

To run the OS_Project-Team7 simulator on your local machine, follow the instructions below.

### Prerequisites

Make sure you have the following software installed on your system:

* Node.js (v12 or higher)
* MongoDB
* Docker (optional, required only if you want to use the Docker container)

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/os_Project-Team7.git
cd os_Project-Team7
```
Use code with caution. Learn more
Install the client dependencies:
Bash
cd client
npm install


3. Start the MongoDB server and make sure it is running.

4. Create a `.env` file in the `server` directory and set the required environment variables (e.g., `PORT`, `MONGODB_URI`).

5. Launch the server and client applications:
```bash
cd server
npm start
```

```bash
cd client
npm start
```

Now, you should be able to access the simulator by visiting `http://localhost:3000` in your web browser.

## Usage

Once you have the simulator up and running, explore the different algorithms and customize their parameters as needed. Follow the on-screen instructions and enjoy learning about Operating System algorithms in a fun and interactive way!


## Contributors

* Dhaval Rupapara
* Kevin Patel
* Dhyan Patel

We welcome contributions from the open-source community. Feel free to submit bug reports, feature requests, or pull requests to help improve the simulator.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

We hope you find our OS_Project-Team7 simulator helpful and engaging! If you have any questions, please feel free to contact us.
