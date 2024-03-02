The project has been deployed. You can visit the api documentaions at https://loyalty-management-nine.vercel.app/api-docs/

If you want to run locally, please clone from branch 'local'

Setup local :
npm install

To run the service :
npm run start

Once the service started, the database table would be auto generated
But the data still empty, please inject the data by running this file :
'loyalty_management_inject_data.sql'

The host for local service is http://localhost:9002
The host for local swagger is http://localhost:9002/api-docs

In case local database cannot be created, please use the deployed database
dialect: 'postgres',
host: 'rosie.db.elephantsql.com',
port: 5432,
database: 'kiyffqta',
username: 'kiyffqta',
password: 'IjQz9ovAfBqw4OfIOpObc5lNQvlL3z3a'
