# Mock Retailer API - Node.js

Mock Retailer API built using Node.js and Express.

Features:

* Generate OTP
* Check OTP
* Register Retailer
* Fetch Business Details
* In-memory mock data
* CORS enabled
* Middleware support
* No database required
* Nodemon support

---

# Tech Stack

* Node.js
* Express.js
* CORS
* UUID
* Body Parser
* Nodemon

---

# Project Structure

```text
mock-retailer-api-node
│
├── controllers
│   └── retailerController.js
│
├── middleware
│   └── apiHeaderMiddleware.js
│
├── mockData
│   └── mockRetailerData.js
│
├── routes
│   └── retailerRoutes.js
│
├── package.json
│
└── server.js
```

---

# Create Project

```bash
mkdir mock-retailer-api-node

cd mock-retailer-api-node

npm init -y
```

---

# Install Packages

```bash
npm install express cors body-parser uuid
```

---

# Install Nodemon

```bash
npm install --save-dev nodemon
```

---

# package.json

```json
{
  "name": "mock-retailer-api-node",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "body-parser": "^1.20.2",
    "cors": "^2.8.5",
    "express": "^4.19.2",
    "uuid": "^9.0.1"
  },
  "devDependencies": {
    "nodemon": "^3.1.0"
  }
}
```

---

# Run Project

## Production

```bash
npm start
```

## Development

```bash
npm run dev
```

---

# Server URL

```text
http://localhost:7118
```

---

# Required Headers

## x-api-key

```text
Basic V2swRVFLQ2RaY3JibjBFOnY5VGtEbjhScGxw
```

## authorization

```text
bearer testtoken
```

---

# Mock OTP Test Data

| Mobile     | OTP    | Token     |
| ---------- | ------ | --------- |
| 8446152135 | 179237 | TOKEN_001 |
| 7208505572 | 316243 | TOKEN_002 |
| 9819631954 | 654321 | TOKEN_003 |
| 9988776655 | 111111 | TOKEN_004 |

---

# APIs

---

# 1. Generate OTP

## Endpoint

```http
POST /register/retailer/validatemobile/generate_otp
```

## CURL

```bash
curl --location 'http://localhost:7118/register/retailer/validatemobile/generate_otp' \
--header 'x-api-key: Basic V2swRVFLQ2RaY3JibjBFOnY5VGtEbjhScGxw' \
--header 'authorization: bearer testtoken' \
--header 'Content-Type: application/json' \
--data '{
    "username":"8446152135",
    "version":"13"
}'
```

## Request Body

```json
{
  "username": "8446152135",
  "version": "13"
}
```

## Success Response

```json
{
  "resultCode": "200",
  "resultStatus": "TXN",
  "resultMessage": "Verification code has been send to mobile number 8446152135",
  "otpToken": "TOKEN_001"
}
```

---

# 2. Check OTP

## Endpoint

```http
POST /register/retailer/validatemobile/check_otp
```

## CURL

```bash
curl --location 'http://localhost:7118/register/retailer/validatemobile/check_otp' \
--header 'x-api-key: Basic V2swRVFLQ2RaY3JibjBFOnY5VGtEbjhScGxw' \
--header 'authorization: bearer testtoken' \
--header 'Content-Type: application/json' \
--data '{
    "otp":"179237",
    "otpToken":"TOKEN_001"
}'
```

## Request Body

```json
{
  "otp": "179237",
  "otpToken": "TOKEN_001"
}
```

## Success Response

```json
{
  "resultCode": "200",
  "resultStatus": "TXN",
  "otpToken": "NEW_TOKEN",
  "resultMessage": "Details not found"
}
```

---

# 3. Register Retailer

## Endpoint

```http
POST /register/retailer/new
```

## CURL

```bash
curl --location 'http://localhost:7118/register/retailer/new' \
--header 'x-api-key: Basic V2swRVFLQ2RaY3JibjBFOnY5VGtEbjhScGxw' \
--header 'authorization: bearer testtoken' \
--header 'Content-Type: application/json' \
--data '{
  "CompanyType": 2,
  "businessServiceType": "2",
  "email": "saurabh@gmail.com",
  "firstName": "Saurabh",
  "lastName": "Panday",
  "mobileNo": "7208505572",
  "otp": "179237",
  "otpToken": "TOKEN_001",
  "pincode": "400055"
}'
```

## Request Body

```json
{
  "CompanyType": 2,
  "businessServiceType": "2",
  "email": "saurabh@gmail.com",
  "firstName": "Saurabh",
  "lastName": "Panday",
  "mobileNo": "7208505572",
  "otp": "179237",
  "otpToken": "TOKEN_001",
  "pincode": "400055"
}
```

## Success Response

```json
{
  "status": "true",
  "data": "Details found.",
  "businessIdentificationCode": "876fb243",
  "businessName": "NA",
  "businessOwnerName": "Saurabh Panday",
  "mobile": "7208505572",
  "businessStatus": "IN COMPLETE",
  "isKycOfficer": 0,
  "companyType": 2,
  "businessServiceType": "2",
  "balance": "0",
  "businessAuthToken": "sample-token",
  "resultMessage": "Retailer Registered Successfully",
  "resultCode": "200",
  "resultStatus": "TXN"
}
```

---

# 4. Business Details Fetch

## Endpoint

```http
POST /retailer/businessdetailsFetchnew
```

## CURL

```bash
curl --location 'http://localhost:7118/retailer/businessdetailsFetchnew' \
--header 'x-api-key: Basic V2swRVFLQ2RaY3JibjBFOnY5VGtEbjhScGxw' \
--header 'authorization: bearer testtoken' \
--header 'Content-Type: application/json' \
--data '{
    "BusinessId":"0",
    "IdentificationCode":"2b91a674"
}'
```

## Request Body

```json
{
  "BusinessId": "0",
  "IdentificationCode": "2b91a674"
}
```

## Success Response

```json
{
  "status": "true",
  "data": "Details found.",
  "businessIdentificationCode": "2b91a674",
  "businessName": "Nikhil Enterprise",
  "businessOwnerName": "Nikhil Nishad",
  "mobile": "9819631954",
  "businessStatus": "IN COMPLETE",
  "isKycOfficer": 0,
  "companyType": 2,
  "businessServiceType": "2",
  "balance": "0",
  "resultMessage": "Details found.",
  "resultCode": "200",
  "resultStatus": "TXN"
}
```

---

# Common Error Responses

## Invalid API Key

```json
{
  "resultCode": "401",
  "resultStatus": "ERR",
  "resultMessage": "Invalid x-api-key"
}
```

## Invalid Authorization Header

```json
{
  "resultCode": "401",
  "resultStatus": "ERR",
  "resultMessage": "Invalid authorization token"
}
```

## Invalid OTP

```json
{
  "resultCode": "400",
  "resultStatus": "ERR",
  "resultMessage": "Invalid OTP"
}
```

---

# Features

* Express.js REST API
* In-memory object storage
* Mock OTP flow
* Retailer registration flow
* Business detail fetch API
* Global CORS enabled
* Header validation middleware
* Nodemon auto-reload support
* Easy frontend integration

---

# Future Improvements

You can extend this project with:

* MongoDB
* PostgreSQL
* JWT Validation
* Swagger Documentation
* Winston Logger
* Docker
* Unit Testing
* Redis Cache
* Environment Variables
* Rate Limiting
* Request Validation
* TypeScript
