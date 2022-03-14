# CURD
Tutorial built with Node.js, Sequelize and MySQL

Other versions available:

.NET: .NET 5.0
In this tutorial we'll cover how to build a simple Node.js API that supports CRUD operations and stores data in a MySQL database. The example API includes routes to retrieve, update, create and delete records in a MySQL database, the records in the example are user records but the same CRUD pattern and code structure could be applied to any type of data e.g. products, services, articles etc.

MySQL Code First DB Generation with Sequelize
The Node.js API automatically creates the MySQL database on startup (if required) and synchronizes db tables and columns with javascript models defined using the Sequelize ORM library. Database creation and model synchronization is performed by the initialize() function in the MySQL database wrapper.
