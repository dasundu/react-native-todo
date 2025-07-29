# 📱 React Native Todo App

A full-stack, real-time todo application built with React Native, Expo, and Convex. This app works seamlessly across Android, iOS, and web platforms with instant synchronization across all devices.

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Convex](https://img.shields.io/badge/Convex-FF6B6B?style=for-the-badge)

## 🎯 What This App Offers

This isn't just a UI prototype—this is a **real, full-stack, real-time todo app** that:
- ✅ Works on **physical devices & simulators** (Android / iOS)
- ✅ Everything updates **instantly** across users (create, complete, delete)
- ✅ No native Swift / Kotlin required—just JavaScript & React Native
- ✅ Complete with dark mode, progress tracking, and real-time sync

## 📱 Download & Try

### Android APK
[**Download APK for Android**](https://expo.dev/accounts/dasundush/projects/to_do/builds/a59eaa13-9aae-4a26-a9a1-9b22804bf6e9)

*Click the link above to download and install the app directly on your Android device.*

## 🚀 Features

### 📝 Todos Tab
- ➕ **Add new tasks** - Create todos with a simple tap
- ✅ **Mark as completed/uncompleted** - Toggle task status instantly
- 📝 **Edit existing tasks** - Modify your todos on the fly
- 🗑️ **Delete tasks** - Remove completed or unwanted tasks
- 📊 **Live progress bar** - Visual representation of your completion rate

### ⚙️ Settings Tab
- 📈 **View task stats** - See total, completed, and remaining tasks
- 🌙 **Toggle Dark Mode** - Switch between light and dark themes
- 🔔 **Notification toggle** - Control app notifications
- 🔄 **Auto-sync toggle** - Manage synchronization preferences
- 🚨 **Danger Zone** - Clear all data with confirmation

### 🔄 Real-Time Sync
- All updates reflect **instantly** across devices
- Powered by **Convex** real-time database
- Multi-user support with live collaboration

## 🛠️ Tech Stack

- **Frontend**: React Native + Expo
- **Navigation**: React Navigation (Tab + Stack)
- **Backend**: Convex (Real-time database)
- **Styling**: React Native StyleSheet with custom themes
- **State Management**: React hooks + Convex queries

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- Convex account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/react-native-todo-app.git
   cd react-native-todo-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the project root:
   ```env
   CONVEX_DEPLOYMENT=<your_convex_deployment_url>
   EXPO_PUBLIC_CONVEX_URL=<your_convex_public_url>
   ```
   
   *Get these values from your Convex dashboard after setting up your project.*

4. **Start the Convex backend**
   
   Open a separate terminal and run:
   ```bash
   npx convex dev
   ```

5. **Start the Expo development server**
   ```bash
   npx expo start
   ```

6. **Run on your device**
   - Scan the QR code with Expo Go app (Android/iOS)
   - Or press `w` to run in web browser
   - Or press `a` for Android emulator
   - Or press `i` for iOS simulator

## 📚 What You'll Learn

Building this app covers essential React Native concepts:

- 🏗️ **React Native + Expo setup** - Modern mobile development workflow
- 🧭 **Navigation patterns** - Tab and stack navigation with React Navigation
- 🧱 **Core components** - `View`, `Text`, `FlatList`, `ScrollView`, `TouchableOpacity`, `Switch`
- 🌈 **Advanced styling** - Gradients, modals, alerts, and custom themes
- ⚡ **Real-time backend integration** - Convex database with live updates
- 🌓 **Theme management** - Dark mode implementation with context
- 🧹 **CRUD operations** - Create, read, update, delete with real-time sync
- 📱 **Cross-platform development** - One codebase for iOS, Android, and web

## 📂 Project Structure

```
react-native-todo-app/
├── App.js                 # Main app component with navigation
├── convex/                # Convex backend configuration
│   ├── schema.ts         # Database schema
│   └── todos.ts          # Todo operations
├── components/           # Reusable components
├── screens/              # App screens
│   ├── TodosScreen.js    # Main todos interface
│   └── SettingsScreen.js # Settings and preferences
├── styles/               # Styling and themes
├── .env                  # Environment variables
└── package.json          # Dependencies and scripts
```

## 🎨 Key Components Used

- **View** - Container components for layout
- **Text** - Text display with custom styling
- **FlatList** - Efficient list rendering for todos
- **ScrollView** - Scrollable content areas
- **TouchableOpacity** - Interactive buttons and list items
- **Switch** - Toggle controls for settings
- **Modal** - Overlay components for dialogs
- **Alert** - Native alert dialogs

## 🌐 Cross-Platform Support

- **📱 iOS** - Native iOS experience
- **🤖 Android** - Native Android experience  

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [React Native](https://reactnative.dev/)
- Powered by [Expo](https://expo.dev/)
- Real-time sync with [Convex](https://convex.dev/)
- Navigation by [React Navigation](https://reactnavigation.org/)


