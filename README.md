# 🛒 Shop — Smart Shopping List App (React Native + Expo Go)

A mobile app to help you create and manage shopping lists quickly, with a modern React Native experience powered by **Expo Go**.

This project is designed to evolve into an intelligent shopping companion with practical and modern shopping-related technology.

## Current Stack

- **React Native** (cross-platform mobile app)
- **Expo** (fast development and easy device testing)
- **TypeScript** (safer code and better scalability)
- **Lucide React Native** (modern icon set)

## Current App Features

- Add shopping items from a simple input field
- Filter items by status (`Done` / `Pending`)
- Clear list action (UI already prepared)
- Clean and minimal mobile-first interface

> Current UI entry point: `Home` screen in `src/app/Home`.

## Vision: Interesting Shopping Tech to Implement

Planned features using up-to-date technologies for shopping apps:

1. **AI Smart Suggestions**
   - Auto-suggest items based on history (e.g., "milk" every week)
   - Group suggestions by category (fruits, cleaning, bakery)

2. **Price Intelligence**
   - Compare item prices between nearby supermarkets
   - Highlight best value based on quantity/brand

3. **Voice-to-List**
   - Add items by voice command (speech recognition)
   - Natural language parsing like: "add 2kg rice and 1 milk"

4. **Barcode Scanning**
   - Scan products and auto-fill item names/details
   - Optional product metadata integration

5. **Collaborative Lists**
   - Share live shopping lists with family/roommates
   - Real-time updates and presence indicators

6. **Store Mode + Indoor Guidance (future/advanced)**
   - Smart ordering of list items by store aisle
   - Optional map/navigation inside large stores

7. **Budget & Spend Analytics**
   - Set a target budget per trip
   - Track estimated vs final spend over time

## Run on Your Own Device (No Local Machine Setup Needed)

You can run and test the app **without installing Node.js, Android Studio, Xcode, or any mobile SDK** using Expo's cloud workflow.

### Option A — Expo Snack (fully browser-based)

1. Install **Expo Go** on your phone:
   - Android: Google Play Store
   - iOS: App Store
2. Open [https://snack.expo.dev](https://snack.expo.dev) in any browser.
3. Create a new Snack and paste this project code (or import from a GitHub repository).
4. In Snack, click **Run** and scan the QR code with Expo Go.
5. The app runs directly on your device.

✅ This is the easiest path with *zero machine environment setup*.

### Option B — Use a shared Expo project link

If someone publishes this app to Expo and shares a project URL/QR code:

1. Open Expo Go on your phone.
2. Scan the QR code or open the shared link.
3. App launches instantly.

No local dev setup required on your side.

## Local Development (Optional)

If you do want local development later:

```bash
npm install
npm run start
```

Then scan the QR code from the Expo CLI with Expo Go.

## Project Structure

```text
src/
  app/
    Home/
    Menu/
    Profile/
  components/
    Button/
    Filter/
    Input/
    StatusIcon/
  Types/
```

## Next Milestones

- [ ] Persist list items locally (AsyncStorage)
- [ ] Add item quantity/unit support
- [ ] Implement Done/Pending state management
- [ ] Build collaborative sync (Firebase/Supabase)
- [ ] Add AI suggestion service layer
- [ ] Add camera barcode scanner flow

---

Built with ❤️ using React Native + Expo.
