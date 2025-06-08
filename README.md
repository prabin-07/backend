# Project Tracker API

A simple REST API for managing projects built with Express.js and MongoDB.

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Make sure MongoDB is running on your system

3. Start the server:
```bash
npm start
```

The server will run on port 5000 by default.

## API Endpoints

### Projects

#### Create a new project
- **POST** `/api/projects`
- **Body:**
```json
{
    "projectName": "Project Name",
    "ownerName": "Owner Name",
    "status": "Active",
    "deadline": "2024-12-31"
}
```

#### Get all projects
- **GET** `/api/projects`

#### Update a project
- **PUT** `/api/projects/:id`
- **Body:** Same as create project

#### Delete a project
- **DELETE** `/api/projects/:id`

## Project Schema

```javascript
{
    projectName: String (required),
    ownerName: String (required),
    status: String (enum: ['Active', 'On Hold', 'Completed']),
    deadline: Date (required)
}
```

## Error Handling

The API returns appropriate HTTP status codes:
- 200: Success
- 201: Created
- 400: Bad Request
- 404: Not Found
- 500: Server Error 