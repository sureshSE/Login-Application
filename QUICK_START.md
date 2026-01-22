# Login System - Quick Start Guide

## 🚀 Installation in 5 Minutes

### Step 1: Extract the Project
```bash
unzip login-system.zip
cd login-system
```

### Step 2: Start Backend (Terminal 1)
```bash
cd backend
npm install
npm start
```

✅ Backend running on: http://localhost:5000

### Step 3: Start Frontend (Terminal 2 - New Window)
```bash
cd frontend
npm install
npm run dev
```

✅ Frontend running on: http://localhost:3000

### Step 4: Test the Application
1. Open browser: http://localhost:3000
2. Use demo credentials:
   - Email: `admin@example.com`
   - Password: `Admin@123`

## 📁 What You Got

```
login-system/
├── backend/          # Node.js/Express API
├── frontend/         # React + Vite UI
└── README.md         # Complete documentation
```

## ✅ Verification Checklist

- [ ] Backend started successfully on port 5000
- [ ] Frontend started successfully on port 3000  
- [ ] Login page loads in browser
- [ ] Form validation works (try empty fields)
- [ ] Successful login shows success message
- [ ] Wrong credentials show error message

## 🐛 Common Issues

**Port 5000 already in use?**
```bash
# Change port in backend/.env
PORT=5001
```

**Port 3000 already in use?**
```bash
# Change port in frontend/vite.config.js
server: { port: 3001 }
```

**Cannot connect to backend?**
- Ensure backend is running
- Check frontend/.env has correct API URL
- Try: http://localhost:5000/api/health

## 📝 Next Steps

1. Read the complete `README.md` for detailed documentation
2. Check `Project_Folder_Structure.pdf` for architecture overview
3. Explore the code in `src/components/Login.jsx`
4. Test the API with Postman: `POST http://localhost:5000/api/login`

## 🎯 Demo Credentials

**Email:** admin@example.com  
**Password:** Admin@123

## 📚 Tech Stack

**Frontend:** React 18, Vite, Axios  
**Backend:** Node.js, Express, CORS  
**Styling:** Pure CSS with modern animations

## 🔗 Important Files

- `backend/server.js` - Login API endpoint
- `frontend/src/components/Login.jsx` - Login form component
- `frontend/src/services/api.js` - API service layer
- `README.md` - Complete documentation

---

**Need help?** Check the main README.md or create an issue on GitHub.

**Project Time:** ~24 hours from scratch to deployment-ready
