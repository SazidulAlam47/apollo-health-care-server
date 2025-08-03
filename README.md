# Apollo Health Care - Backend

A robust and comprehensive healthcare management system backend designed to streamline communication and appointment processes between patients, doctors, and administrators.

## 🏥 Overview

Apollo Health Care is a full-featured healthcare management platform that enables seamless interaction between different user roles while maintaining security, scalability, and reliability. The system incorporates modern technologies and follows best practices for healthcare data management.

## 🚀 Technologies Used

- **Node.js & Express.js** - Server-side application development
- **TypeScript** - Type-safe JavaScript development
- **Prisma ORM** - Database management and query builder
- **PostgreSQL** - Primary database system
- **WebRTC (Agora.io)** - Real-time video communication between doctors and patients
- **JWT** - Authentication and authorization
- **Bcrypt** - Password hashing and security
- **Nodemailer** - Email notifications
- **Cloudinary** - File upload and management
- **SSLCommerz** - Payment gateway integration
- **Node-cron** - Scheduled tasks and reminders
- **Zod** - Runtime type validation

## 📋 Features

### 🔐 Authentication & Authorization

- JWT-based authentication
- Role-based access control (Super Admin, Admin, Doctor, Patient)
- Password recovery and security features
- Account status management

### 👤 User Management

- **Super Admin**: System-wide management
- **Admin**: Doctor account management, appointment oversight
- **Doctor**: Profile management, appointment handling, prescription generation
- **Patient**: Registration, appointment booking, medical record management

### 📅 Appointment System

- Dynamic scheduling with time slot management
- Real-time appointment booking
- Status tracking (Scheduled, In Progress, Completed, Canceled)
- Video consultation integration via WebRTC (Agora.io)
- Automated reminder system
- Payment integration with booking confirmation

### 💊 Medical Records

- Patient health data management
- Medical report uploads and storage
- Prescription generation and email delivery
- Medical history tracking

### 💳 Payment Integration

- Secure payment processing via SSLCommerz
- Automated invoice generation
- Payment status tracking
- Booking cancellation for unpaid appointments (30-minute window)

### ⭐ Review System

- Patient reviews and ratings for doctors
- Comment system
- Average rating calculation

### 📧 Notification System

- Email confirmations for appointments
- Prescription delivery via email
- Payment invoices
- Automated reminders

## 🏗️ Project Structure

```
apollo-health-care-server/
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── migrations/            # Database migrations
├── src/
│   ├── app/
│   │   ├── config/           # Configuration files
│   │   ├── constants/        # Application constants
│   │   ├── DB/              # Database utilities and seeders
│   │   ├── errors/          # Custom error classes
│   │   ├── interfaces/      # TypeScript interfaces
│   │   ├── middlewares/     # Express middlewares
│   │   ├── modules/         # Feature modules
│   │   │   ├── admin/       # Admin management
│   │   │   ├── appointment/ # Appointment system
│   │   │   ├── auth/        # Authentication
│   │   │   ├── doctor/      # Doctor management
│   │   │   ├── patient/     # Patient management
│   │   │   ├── payment/     # Payment processing
│   │   │   ├── prescription/# Prescription management
│   │   │   ├── review/      # Review system
│   │   │   └── ...          # Other modules
│   │   ├── routes/          # API routes
│   │   └── utils/           # Utility functions
│   ├── app.ts               # Express app configuration
│   └── server.ts            # Server entry point
├── uploads/                 # File upload directory
└── generated/              # Prisma generated files
```

## 🛠️ Installation

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database
- npm or yarn package manager

### Setup Steps

1. **Clone the repository**

    ```bash
    git clone https://github.com/SazidulAlam47/apollo-health-care-server.git
    cd apollo-health-care-server
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Environment Configuration**
   Create a `.env` file in the root directory:

    ```env
    NODE_ENV=development
    PORT=5000
    DATABASE_URL="postgresql://username:password@localhost:5432/ph_healthcare"

    # JWT Configuration
    ACCESS_TOKEN_SECRET=your_access_token_secret
    ACCESS_TOKEN_EXPIRES_IN=1h
    REFRESH_TOKEN_SECRET=your_refresh_token_secret
    REFRESH_TOKEN_EXPIRES_IN=7d
    RESET_PASS_TOKEN=your_reset_password_secret
    RESET_PASS_TOKEN_EXPIRES_IN=15m

    # Frontend URL
    CLIENT_URL=http://localhost:3000

    # Email Configuration
    NODE_MAILER_EMAIL=your_email@gmail.com
    NODE_MAILER_PASSWORD=your_app_password

    # Cloudinary Configuration
    CLOUDINARY_NAME=your_cloudinary_name
    CLOUDINARY_KEY=your_cloudinary_key
    CLOUDINARY_SECRET=your_cloudinary_secret

    # Payment Gateway (SSLCommerz)
    STORE_ID=your_store_id
    STORE_PASS=your_store_password

    # Bcrypt
    BCRYPT_SALT_ROUNDS=12
    ```

4. **Database Setup**

    ```bash
    # Generate Prisma client
    npx prisma generate

    # Run database migrations
    npx prisma migrate dev
    ```

5. **Start the application**

    ```bash
    # Development mode
    npm run dev

    # Production mode
    npm run build
    npm start
    ```

## 📡 API Endpoints

### Authentication

- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/refresh-token` - Refresh access token
- `POST /api/v1/auth/change-password` - Change password
- `POST /api/v1/auth/forgot-password` - Forgot password
- `POST /api/v1/auth/reset-password` - Reset password

### User Management

- `GET /api/v1/user/me` - Get current user profile
- `PATCH /api/v1/user/update-profile` - Update user profile
- `PATCH /api/v1/user/update-status` - Update user status

### Doctor Management

- `GET /api/v1/doctor` - Get all doctors
- `GET /api/v1/doctor/:id` - Get doctor by ID
- `POST /api/v1/doctor` - Create doctor (Admin only)
- `PATCH /api/v1/doctor/:id` - Update doctor
- `DELETE /api/v1/doctor/:id` - Delete doctor

### Patient Management

- `GET /api/v1/patient` - Get all patients
- `GET /api/v1/patient/:id` - Get patient by ID
- `POST /api/v1/patient` - Create patient
- `PATCH /api/v1/patient/:id` - Update patient

### Appointment Management

- `GET /api/v1/appointment` - Get appointments
- `POST /api/v1/appointment` - Create appointment
- `PATCH /api/v1/appointment/:id` - Update appointment status
- `GET /api/v1/appointment/my-appointments` - Get user's appointments

### Payment

- `POST /api/v1/payment/init` - Initialize payment
- `POST /api/v1/payment/ipn` - Payment IPN handler

### Schedules

- `GET /api/v1/schedule` - Get available schedules
- `POST /api/v1/schedule` - Create schedule
- `GET /api/v1/doctor-schedule` - Get doctor schedules
- `POST /api/v1/doctor-schedule` - Create doctor schedule

## 🗃️ Database Schema

The application uses PostgreSQL with Prisma ORM. Key models include:

- **User** - Base user authentication
- **Admin** - Administrator profiles
- **Doctor** - Doctor profiles with specialties
- **Patient** - Patient profiles with health data
- **Appointment** - Appointment management
- **Schedule** - Time slot management
- **Payment** - Payment tracking
- **Prescription** - Medical prescriptions
- **Review** - Doctor reviews and ratings
- **Specialties** - Medical specialties

## 🔧 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start           # Start production server
npm run lint        # Run ESLint
npm run format      # Format code with Prettier
```

## 🚦 Development Guidelines

### Code Style

- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Modular architecture with feature-based organization

### Error Handling

- Global error handler middleware
- Custom error classes for different scenarios
- Proper HTTP status codes
- Structured error responses

### Security

- JWT token validation
- Password hashing with bcrypt
- CORS configuration
- Input validation with Zod
- SQL injection prevention with Prisma
