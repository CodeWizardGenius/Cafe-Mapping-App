# Cafe Discovery App

A mobile application for discovering cafes on a map using Expo, Nativewind, Expo Maps, and Gorhom BottomSheet.

## Technologies Used

- **Expo**: Framework for React Native app development
- **TypeScript**: For type-safe code
- **NativeWind**: Tailwind CSS for React Native styling
- **React Native Maps**: For map integration
- **Gorhom Bottom Sheet**: For creating interactive bottom sheet
- **React Native Reanimated**: For smooth animations
- **React Native Gesture Handler**: For gesture recognition
- **Expo Location**: For accessing device location

## Features

- Full-screen map displaying cafe locations
- Custom cafe markers on the map
- Interactive bottom sheet that opens when a cafe is selected
- Cafe details displayed in the bottom sheet (image, name, and description)
- Custom app icon and splash screen

## Sample Cafe Data

Here's the JSON structure used for cafe data:

```json
[
  {
    "id": "1",
    "name": "Brew House Cafe",
    "coordinates": {
      "latitude": 41.0082,
      "longitude": 28.9784
    },
    "image": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "description": "Cozy cafe with excellent pour-over coffee options."
  },
  {
    "id": "2",
    "name": "Artisan Coffee",
    "coordinates": {
      "latitude": 41.0102,
      "longitude": 28.9762
    },
    "image": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "description": "Specialty coffee shop with a relaxed atmosphere."
  }
]
```

## Development Build Instructions

### Prerequisites

- Node.js (>= 16.0.0)
- Expo CLI
- iOS/Android development environment set up

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```

### Running Development Build

#### For iOS:

```bash
npx expo run:ios
```

Or to run on a specific device:

```bash
npx expo run:ios --device
```

#### For Android:

```bash
npx expo run:android
```

### Notes

- The first development build will take some time as it needs to compile native code
- Make sure you have the necessary development environment set up (Xcode for iOS, Android Studio for Android)
- You may need to open the respective IDE (Xcode/Android Studio) to run the app on a simulator/emulator

## Project Structure

- `/assets`: Contains app icons and splash screen
- `/components`: React components for the app
- `/data`: Sample cafe data
- `/types`: TypeScript type definitions

## Troubleshooting

### Babel Configuration Issues

If you encounter errors related to Babel configuration or plugins, try these steps:

1. Use a minimal babel configuration:

   ```js
   module.exports = function (api) {
     api.cache(true);
     return {
       presets: ["babel-preset-expo"],
     };
   };
   ```

2. Clear watchman cache:

   ```bash
   watchman watch-del-all
   watchman shutdown-server
   ```

3. Clean project:
   ```bash
   rm -rf node_modules
   npm install
   ```

### Watchman Issues

If you see "Waiting for Watchman watch-project" messages:

```bash
watchman watch-del '/Users/username/CascadeProjects/cafe-discovery'
watchman watch-project '/Users/username/CascadeProjects/cafe-discovery'
```

### Metro Bundler Issues

If Metro bundler fails to start or gets stuck:

```bash
kill $(lsof -t -i:8081)
npm start -- --reset-cache
```
# G-rev-18-Cafe-Mapping-App-.pdf
