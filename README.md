This service is running on nodeJS v18.19.1 
The project has been deployed. You can visit the api documentaions at https://loyalty-management-nine.vercel.app/api-docs/

If you want to run locally, please clone from branch 'local'

After clone branch 'local', please install the package by : npm install

To run the service : npm run start

Once the service started, the database table would be auto-generated.
But the data is still empty, please inject the data by running this file on your database editor (such as heidiSQL or DBeaver): 
'loyalty_management_inject_data.sql'

The host for local service is http://localhost:9002 
The host for local swagger is http://localhost:9002/api-docs

In case the local database cannot be created, please use the deployed database:
dialect: 'postgres', 
host: 'rosie.db.elephantsql.com', 
port: 5432, 
database: 'kiyffqta', 
username: 'kiyffqta', 
password: 'IjQz9ovAfBqw4OfIOpObc5lNQvlL3z3a'
