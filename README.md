# CMC-Markets-Take-Home-Test

The business requirement is to build a backend service that will accept specific events from the trading broker platform through secure API. The event will be then processed and stored in a queryable form, by SQL, which could be used for analysis or reports later. The aggregated data on a customer_id level should then be exposed for the CRM system in a form of Rest API. The aggregated data should be updated every time a new event arrives in near-real time.

1 - Prepare the high-level design diagram of AWS services used to build the backend with the data flow. Try to use serverless as much as possible.

2 - One element of the working solution should be the AWS Lambda function. This Lambda will accept the event in a json format (event.json file)  and will flatten it to a single row that could be further inserted into e.g. database.  We assume the event structure does not change. Prepare the Lambda code in TypeScript for the json processing.

For task 1 we expect a diagram with a short description of why the service is used and what it is doing.

For task 2 we expect a proper and working TypeScript code that can process the attached event. We do not expect code that connects to dababase and inserts data into a table.


