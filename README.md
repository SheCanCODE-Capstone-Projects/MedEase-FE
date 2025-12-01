#  MedEase – Frontend (Next.js)

MedEase Frontend is the **web interface** for the MedEase digital healthcare platform.  
It enables **Patients, Doctors, and Pharmacists** to securely interact with queues, consultations, digital prescriptions, and pharmacy workflows in real time.

This repository contains the **Next.js frontend application** that consumes the MedEase Backend API.

---

##  Project Overview

MedEase addresses critical healthcare workflow challenges by providing:

1. Secure authentication for multiple roles
2. Real-time patient queue tracking
3. Doctor consultation dashboards
4. Digital prescription access
5. Pharmacy dispensing verification
6. Clean, responsive healthcare UI

The frontend communicates with the **MedEase Backend (Spring Boot REST API)** using secure HTTP requests.

---

## 👥 Supported User Roles

- **Patient:** Register, join queue, view prescriptions & notifications
- **Doctor:** View queues, consult patients, create prescriptions ,add/update the patient's medical history
- **Pharmacist:** View prescriptions, dispense medication
- **Admin:** (Future) System monitoring & configuration

---

##  Core Frontend Features

-  JWT-based authentication
-  Role-based route protection
-  Patient dashboard
-  Doctor dashboard
-  Pharmacy dashboard
-  Real-time queue visualization
-  Digital prescription viewer
-  Notification system
-  Mobile & desktop responsive layout

---

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript / JavaScript
- **Styling:** Tailwind CSS
- **State Management:** React Context / Redux Toolkit
- **HTTP Client:** Axios / Fetch
- **Authentication:** JWT
- **Build Tool:** Next.js Build System
- **Containerization:** Docker
- **Project Management:** GitHub Issues & Projects

  ## ⚙️ Environment Variables

Create a `.env.local` file using the  `.env.example` template 

## How to get started to this project

### 1️⃣ Clone the Repository using the git clone command 

### 2️⃣ Install Dependencies
npm install

### 3️⃣ Run Development Server
npm run dev

## 🧪 Testing (Planned)

- Jest

## 🚀 Deployment

Supported platforms: Vercel

## 🔗 Backend Integration


