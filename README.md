# NodeJS sample MVC Rest Backend
Using Sequelize as ORM and express framework.

## Getting Started

Create a .env file in the root folder, you can use .env.example as the template.
If you have a frontend, don't forget to change cors configuration in the config.js file.
This example is currently preconfigured with a sample User Model.
feel free to modify/remove it.

If you want Sequelize to create the schema for you, just uncomment the sync() line in:
```
src/db/sequelize.js
```

### Installing

To start use
```
npm install
```
then use
```
npm start
```

## Built With

* [Express](https://expressjs.com/) - The web framework used
* [Sequelize](https://sequelize.org/v5/) - ORM

## Author
* **Eliya Bar On**


## License

This project is licensed under the MIT License.
