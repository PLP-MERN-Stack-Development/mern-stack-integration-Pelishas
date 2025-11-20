# MERN Stack Blog Application

A full-stack blog application built with MongoDB, Express.js, React.js, and Node.js.

## Features

- ✅ RESTful API with Express.js and MongoDB
- ✅ React front-end with component architecture
- ✅ Full CRUD functionality for blog posts
- ✅ User authentication and authorization
- ✅ Comments system
- ✅ Category management
- ✅ Image upload support

## Project Structure

```
mern-stack-integration-Pelishas/
├── Backend/                    # Express.js server
│   ├── config/                 # Database configuration
│   ├── controllers/            # Route controllers
│   ├── models/                 # Mongoose models
│   ├── routes/                 # API routes
│   ├── middleware/             # Authentication middleware
│   ├── server.js               # Main server file
│   └── package.json            # Server dependencies
├── Frontend/                   # React client
│   ├── components/             # Reusable components
│   ├── pages/                  # Page components
│   ├── hooks/                  # Custom React hooks
│   ├── context/                # React context providers
│   ├── App.jsx                 # Main application component
│   └── package.json            # Client dependencies
└── client/src/services/        # API services
```

## Setup Instructions

### Backend Setup

1. Navigate to Backend directory:
```bash
cd Backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file with:
```
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mern-blog
JWT_SECRET=your-super-secret-jwt-key-here
```

4. Start the server:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to Frontend directory:
```bash
cd Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Posts
- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get single post
- `POST /api/posts` - Create new post (auth required)
- `PUT /api/posts/:id` - Update post (auth required)
- `DELETE /api/posts/:id` - Delete post (auth required)
- `POST /api/posts/:id/comments` - Add comment (auth required)

### Categories
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create category (admin only)

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- Multer for file uploads

### Frontend
- React.js
- React Router for navigation
- Axios for API calls
- Context API for state management
- Vite for build tooling

## Assignment Requirements Met

✅ **RESTful API with Express.js and MongoDB** - Complete backend with all CRUD operations
✅ **React front-end with component architecture** - Organized components, pages, hooks, and context
✅ **Full CRUD functionality for blog posts** - Create, read, update, delete posts
✅ **User authentication and authorization** - JWT-based auth with protected routes
✅ **Advanced features** - Comments system and image upload support