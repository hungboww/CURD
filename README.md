# CURD
Tutorial built with Node.js, Sequelize and MySQL

Other versions available:

.NET: .NET 5.0
In this tutorial we'll cover how to build a simple Node.js API that supports CRUD operations and stores data in a MySQL database. The example API includes routes to retrieve, update, create and delete records in a MySQL database, the records in the example are user records but the same CRUD pattern and code structure could be applied to any type of data e.g. products, services, articles etc.

MySQL Code First DB Generation with Sequelize
The Node.js API automatically creates the MySQL database on startup (if required) and synchronizes db tables and columns with javascript models defined using the Sequelize ORM library. Database creation and model synchronization is performed by the initialize() function in the MySQL database wrapper.
Tools required for this tutorial
To follow the steps in this tutorial you'll need the following:

Node.js & npm - includes the Node.js runtime, command line tools and package manager, install it from https://nodejs.org/.
MySQL - you'll need access to running MySQL server instance for the API to connect to, it can be remote (e.g. Azure, AWS etc) or on your local machine. The Community Server version is available for free from https://dev.mysql.com/downloads/mysql/, ensure it is started so the API can connect to it. Installation instructions are available at https://dev.mysql.com/doc/refman/8.0/en/installing.html.
A code editor to view and edit the API code, it doesn't matter which one, personally I use Visual Studio Code which is a free editor that runs on Windows, Mac and Linux, you can download it at https://code.visualstudio.com/.

Run the Node + MySQL CRUD API Locally
Download or clone the project source code from https://github.com/cornflourblue/node-mysql-crud-api
Install all required npm packages by running npm install or npm i from the command line in the project root folder (where the package.json is located).
Update the database credentials in /config.json to connect to your MySQL server instance, and ensure MySQL server is running.
Start the API by running npm start (or npm run start:dev to start with nodemon) from the command line in the project root folder, you should see the message Server listening on port 4000.
You can test the API directly with a tool such as Postman or hook it up with the example React or Angular applications below.
Sequelize model synchronization
On startup you should also see output like below from the Sequelize model synchronization that is executed in the MySQL database wrapper, it shows the creation and syncing of the Users table based on the Sequelize user model.
