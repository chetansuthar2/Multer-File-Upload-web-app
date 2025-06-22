# Multer File Upload App

A full-stack file upload application built with React.js frontend and Express.js backend using Multer for file handling and MongoDB for data storage.

## 🚀 Features

- **File Upload**: Upload multiple file types with drag-and-drop support
- **File Management**: View, download, and manage uploaded files
- **Real-time Feedback**: Progress indicators and upload status
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **MongoDB Integration**: Secure file metadata storage
- **RESTful API**: Clean API endpoints for file operations

## 🛠️ Tech Stack

### Frontend
- **React.js** - User interface library
- **Vite** - Build tool and development server
- **Axios** - HTTP client for API requests
- **CSS3** - Styling and responsive design

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **Multer** - Middleware for handling multipart/form-data
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
multer-file-upload-app/
├── Backend/
│   ├── index.js              # Main server file
│   ├── routes/               # API routes
│   ├── model/                # Database models
│   ├── multer/               # Multer configuration
│   ├── uploads/              # Uploaded files storage
│   └── package.json          # Backend dependencies
├── frontend/
│   ├── src/
│   │   ├── Component/
│   │   │   ├── Upload.jsx    # Upload component
│   │   │   └── Upload.css    # Upload styles
│   │   ├── App.jsx           # Main app component
│   │   └── main.jsx          # Entry point
│   ├── index.html            # HTML template
│   └── package.json          # Frontend dependencies
└── README.md                 # Project documentation
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/multer-file-upload-app.git
   cd multer-file-upload-app
   ```

2. **Install Backend Dependencies**
   ```bash
   cd Backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Setup MongoDB**
   - Make sure MongoDB is running on `mongodb://localhost:27017`
   - Or update the connection string in `Backend/index.js`

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd Backend
   node index.js
   ```
   Server will run on `http://localhost:3000`

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   Frontend will run on `http://localhost:5173`

## 📚 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/api/products` | Get all uploaded files |
| POST   | `/api/products` | Upload new file(s) |
| GET    | `/uploads/:filename` | Access uploaded files |

## 🔧 Configuration

### Backend Configuration
- **Port**: 3000 (configurable in `Backend/index.js`)
- **Database**: MongoDB connection string in `Backend/index.js`
- **Upload Directory**: `Backend/uploads/`

### Frontend Configuration
- **Development Server**: Vite configuration in `frontend/vite.config.js`
- **API Base URL**: Update axios base URL if backend port changes

## 📝 Usage

1. Open the application in your browser
2. Select files using the file input or drag and drop
3. Click upload to send files to the server
4. View uploaded files in the file list
5. Download or manage files as needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🐛 Issues

If you encounter any issues or have suggestions, please [open an issue](https://github.com/yourusername/multer-file-upload-app/issues).

## 📞 Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/multer-file-upload-app](https://github.com/yourusername/multer-file-upload-app)

---

⭐ Star this repository if you found it helpful!
