# Personal Blog Project

This project is a simple personal blog application that allows an admin to create, edit, delete, and display articles. It includes both guest and admin sections. The application is built using Node.js and Pug as the templating engine.

---

## Features

### Guest Section

- **Home Page**: Displays a list of published articles.
- **Article Page**: Displays the content of a selected article along with the publication date.

### Admin Section

- **Dashboard**: Lists all published articles with options to add, edit, or delete articles.
- **Add Article**: A form to create a new article.
- **Edit Article**: A form to update an existing article.
- **Delete Article**: Deletes an existing article.
- **Login**: Secure access to the admin section.

---

## Installation

### Prerequisites

- Node.js and npm installed on your machine.

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/07krW5Hnr5ghy/personal-blog
   cd personal-blog
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
4. Open your browser and navigate to `http://localhost:3001`.

---

## File Structure

```
.
├── articles/              # Store articles in JSON files
├── public/                # Static assets (CSS, JS, images)
│   ├── styles.css         # Styling for templates
├── middlewares/           # Middlewares
│   ├── authetication.js   # Authentication middleware
├── views/                 # Pug templates
│   ├── home.pug           # Home page template
│   ├── article.pug        # Article page template
│   ├── dashboard.pug      # Admin dashboard template
│   ├── add-article.pug    # Add article form template
│   ├── edit-article.pug   # Edit article form template
│   └── login.pug          # Login page template
├── data/                  # Data storage for articles (JSON files)
├── app.js                 # Main server file
├── routes.js              # Routing file
├── services.js            # Services file with logic to handle articles
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation
```

---

## Usage

### Admin Access

1. Navigate to `/login`.
2. Log in using the following credentials:
   - Username: `admin`
   - Password: `password`
3. After logging in, access the admin dashboard to manage articles.

### Managing Articles

- **Add Article**: Use the form on `/add` to create a new article.
- **Edit Article**: Edit an article from `/edit/:id`.
- **Delete Article**: Delete an article by clicking the delete button in the dashboard.

---

## Technologies Used

- **Node.js**: Backend server.
- **Express.js**: Web framework.
- **Pug**: Templating engine.
- **Express-Session**: Session management for admin authentication.
- **File System (fs)**: Storing articles as JSON files.

## Project url

https://roadmap.sh/projects/personal-blog
