# Backend for Customer Management System

Imagine you are tasked with setting up a backend for a customer management system. The system's database is hosted on MongoDB, and you need to create a Node.js server using Express.js to interact with the database. Your job is to set up the server, connect it to MongoDB atlas, and ensure the connection status is logged appropriately.


## Instructions:

### Initialize the Project:

Basic express template was given  
You need to install all the necessary packages required for the task.

## Environment Configuration:

- Set up a `.env` file in the root directory.
- Store the MongoDB connection string securely in the `.env` file.
- The connection string must follow the format:
`
  MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net<databaseName>?retryWrites=true&w=majority
`

## Backend Server Requirements:

- Go to `index.js`.
- Set up an Express.js server.
- Write the code to:
  - Load and use environment variables from the `.env` file.
  - Connect to MongoDB using a database library.

## Logging Requirements:

- On a successful connection to the database, the server should log the following message:
 ` Connected to database`
- If the connection fails, the server should log the following error message along with details of the error: `Error connecting to database: <Error details>
`

## Testing the Backend:

- Start the server and test the connection to MongoDB.
- Ensure appropriate messages are logged based on the connection status.


# **How to Fork and Set Up Your Repository**

---

## **1. Fork the Repository on StackBlitz**

- You will be provided with a **StackBlitz** link for the assignment.
- Open the link in your browser and click on the **Fork** button in StackBlitz.  
  This will create a copy of the repository in your StackBlitz account.

---

## **2. Clone the Repository to Your Personal GitHub**

- After forking, you can download the project or push it directly to your personal GitHub repository:
  - **Option 1: Download and Push**
    1. Download the repository files from StackBlitz.
    2. Open your terminal/command prompt, navigate to the project folder, and run:
       ```bash
       git init
       git remote add origin <your_github_repo_url>
       ```
       Replace `<your_github_repo_url>` with your personal GitHub repository URL.
    3. Commit and push the files to your GitHub repository:
       ```bash
       git add .
       git commit -m "Completed the assignment"
       git push -u origin main
       ```
  - **Option 2: Push Directly**
    1. Use the **Push to GitHub** option in StackBlitz to directly connect and push the repository to your GitHub account.

---

## **3. Submission Instructions**

- Once your code is successfully pushed to GitHub:
  1. Copy the link to your GitHub repository.
  2. Submit the link on the assignment submission portal.  
     The link should follow this format:  
     **`https://github.com/<your_username>/<repository_name>`**

---

### **Example Submission**

If your GitHub username is `johnDoe` and the repository name is `assignment-repo`, the submission link would look like this:  
**`https://github.com/johnDoe/assignment-repo`**
