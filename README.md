1.  Project Overview
    Project Name:
      MarBlogger

    Description:
      MarBlogger is a blogging application designed to gather posts related to web development.
      Users can explore various blog posts categorized by random topics.
      The platform supports account management with admin privileges, allowing admins and post owners to create, edit, and delete blog posts.

    Features:
      User authentication with JWT and Google OAuth (via Firebase).
      Admin features for post management.
      User sign-up and sign-in functionality.
      Blog post creation (admin user only) and modification by users.
      Protected routes for admin and post owners.

3.  Technology Stack
    Front-end:
      React, Redux

    Back-end:
      Node.js, Express

    Database:
      MongoDB (Mongoose)

    Authentication:
      JWT (JSON Web Tokens), Firebase for Google OAuth.

    Other Tools:
      bcrypt.js for password hashing, cookie-parser for handling cookies, nodemon for development.

4.  Application Structure
    Frontend:
      Built with React, state management using Redux.
      React components handle user authentication and blog post CRUD operations.

    Backend:
      Express.js manages API routes for users, posts, and comments.
      Middleware for JWT-based authentication (verifyToken).
      Mongoose models for users, posts, and comments.

5.  Routing and Endpoints (Backend APIs)
    User Routes (/users):

        GET /test:                              Test the API.
        PUT /update/:userId:                    Update user details (protected).
        DELETE /delete/:userId:                 Delete a user (protected).
        POST /signout:                          Log out a user.
        GET /getusers:                          Fetch all users (admin only).
        GET /:userId:                           Fetch a specific user.

    Post Routes (/posts):

        POST /create:                           Create a new post (admin only).
        GET /getposts:                          Fetch posts (filter by user, category, or search term).
        DELETE /deletepost/:postId/:userId:     Delete a post (admin or post owner).
        PUT /updatepost/:postId/:userId:        Update a post (admin or post owner).

Comment Routes (/comments):

        POST /create:                           Create a new comment (protected).
        GET /getPostComments/:postId:           Fetch comments for a specific post.
        PUT /likeComment/:commentId:            Like or unlike a comment (protected).
        PUT /editComment/:commentId:            Edit a comment (protected).
        DELETE /deleteComment/:commentId:       Delete a comment (protected).

Authentication Routes (/auth):

        POST /signup:                           User sign-up.
        POST /signin:                           User sign-in.
        POST /google:                           Google OAuth sign-in.

5.  Database Schema
    User Schema (User):
        Fields: username, email, password, profilePicture, isAdmin.

   Post Schema (Post):
        Fields: userId, content, title, image, category, slug.

    Comment Schema (Comment):
        Fields: content, postId, userId, likes, numberOfLikes.


6.  Protected Routes
      JWT Token Middleware:
        The verifyToken function is used to protect routes, ensuring that only authorized users can perform certain actions like modifying or deleting posts and comments.

8.  Setup Instructions
      Install Dependencies:
        Run npm install to install all required packages (e.g., Express, Mongoose, bcryptjs, dotenv).

      Environment Variables:
        Set up a .env file for the following keys:

      JWT_SECRET:
        Secret key for JWT tokens.

      MONGO_URI:
        MongoDB connection URI.

      FIREBASE_CONFIG:
        Firebase configuration for Google OAuth.

      Run Application:
        Use npm start to run the backend, or npm run dev to run the app in development mode using nodemon.

9.  Admin and User Roles
      Admin Users:
        Have full control over posts and users.

      Regular Users:
        Can create posts and comments, but only modify their own content.

10.  Testing
    Test API endpoints using Insomnia.
    
11. Installation
      Clone the repository:
        git clone https://github.com/PositivWarrior/mern-blog.git
        cd marblogger
    
      Install the dependencies for both the client and server:
    
        npm install
        cd client
        npm install
    
    Set up the environment variables as described in the Environment Variables section.
    
    Start the development server:
      npm run dev
