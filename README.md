# React Frontend SPA

## Overview

This project is a React Single Page Application (SPA) that consumes a RESTful API and provides a user interface for performing CRUD (Create, Read, Update, Delete) operations on resources. The application uses React Router for navigation and Axios for API communication.

## Features

* View all resources
* View resource details
* Create new resources
* Update existing resources
* Delete resources
* Client-side routing using React Router
* Loading state handling
* Error handling
* Responsive user interface

## Tech Stack

* React
* React Router DOM
* Axios
* JavaScript (ES6+)
* CSS

## Project Structure

```text
frontend/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Loader.jsx
│   │   └── ErrorMessage.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── CreateResource.jsx
│   │   ├── EditResource.jsx
│   │   └── ResourceDetails.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.js
│   ├── index.js
│   └── App.css
│
├── .env.example
├── package.json
└── README.md
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the application:

```bash
npm start
```

The application will run at:

```text
http://localhost:3000
```

## Environment Variables

Create a `.env` file in the project root:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

## Available Routes

| Route         | Description               |
| ------------- | ------------------------- |
| /             | Display all resources     |
| /create       | Create a new resource     |
| /resource/:id | View resource details     |
| /edit/:id     | Edit an existing resource |

## API Integration

Axios is used to communicate with the backend API.

Example configuration:

```javascript
import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default API;
```

## CRUD Operations

### Get All Resources

```http
GET /api/resources
```

### Get Single Resource

```http
GET /api/resources/:id
```

### Create Resource

```http
POST /api/resources
```

### Update Resource

```http
PUT /api/resources/:id
```

### Delete Resource

```http
DELETE /api/resources/:id
```

## Loading and Error Handling

The application includes:

* Loading indicators while fetching data
* Error messages for failed API requests
* Graceful handling of network failures

Example:

```javascript
if (loading) return <h2>Loading...</h2>;

if (error) return <h2>{error}</h2>;
```

## Screenshots

Add screenshots of the following:

### Home Page

Displays all available resources.

### Create Resource Page

Form used to add a new resource.

### Resource Details Page

Displays information about a selected resource.

### Edit Resource Page

Allows updating an existing resource.

### Delete Operation

Shows successful deletion of a resource.

## Demo

Include a short GIF or screen recording demonstrating:

1. Viewing resources
2. Creating a resource
3. Updating a resource
4. Viewing resource details
5. Deleting a resource

## Sample .env.example

```env
REACT_APP_API_URL=http://localhost:5000/api
```

## Future Improvements

* Authentication and Authorization
* Search and Filtering
* Pagination
* Dark Mode
* Form Validation

## Author

Sandeep

## License

This project was developed for educational and learning purposes.
