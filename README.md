# tasks-app

- RESTful API for a Todo App using Node.js and implementing JWT (JSON Web Token)
  authentication.
- The API should allow users to create, read, update, and delete tasks, as well as authenticate and manage their
  tasks using JWT.

## Instructions about SetUp:

First start with downloading the code and and write npm install on code editor, it will install all dependencies on your editor. You will need a code editor and mongoDB setup on your computer. We will use postman to check the api is working or not,So download postman on your computer.

1.Now use this http://localhost:8080/users/register route to register user in API and add info in DB

2.Use this http://localhost:8080/users/login to login user and by providing email & password

3.Use this http://localhost:8080/tasks/create and add the token in authorization area which is recieved in second point and create the task

Use this http://localhost:8080/tasks/edit/:id to edit the task you need to add data in body whatevver you want to change (title, description, status) also add jwt token in header
5.Use this http://localhost:8080/tasks/destroy/:id to delete task from DB also add jwt token in header

Use this http://localhost:8080/tasks to get all the tasks created by different users

Use this http://localhost:8080/tasks/search/:key search different task pased on the key (it might be title, description or status).also add jwt token in header.
