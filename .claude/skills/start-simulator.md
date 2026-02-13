# Start App in Simulator Skill

This skill handles starting the Expo app in iOS or Android simulators.

## Commands

When the user asks to "start app", "run simulator", "open in simulator", or "launch app":

**IMPORTANT: If the user does not specify a platform, always ask which simulator to launch (iOS or Android) before running any command.**

### iOS Simulator
```bash
npx expo start --ios -c
```

### Android Emulator
```bash
npx expo start --android -c
```

## Usage Examples

- "start the app" → **ask the user**: "Which simulator — iOS or Android?"
- "run on ios" → run `npx expo start --ios -c`
- "run on android" → run `npx expo start --android -c`
- "launch simulator" → **ask the user**: "Which simulator — iOS or Android?"
- "start fresh" → **ask the user**: "Which simulator — iOS or Android?"

## Notes

- Uses `-c` flag to clear Metro cache for a clean start
- Never assume a default platform — always ask if not specified
- Requires Xcode (iOS) or Android Studio (Android) to be installed
