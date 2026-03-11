# 🛒 Shop — Smart Shopping List App (React Native + Expo Go)

A mobile app to help you create and manage shopping lists quickly, with a modern React Native experience powered by *
*Expo Go**.

This project is designed to evolve into an intelligent shopping companion with practical and modern shopping-related
technology.

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

### 🟢 **Easy Next Steps (1-2 days)**

1. **Quantity/Unit Support**
    - Add a big fields to add more details quantity and unit (ex: "2 kg", "1 bottle")
    - Intuitive interface to specify measurements

### 🟡 **Medium Features (3-5 days)**

2. **Barcode Scanner**
    - Use camera to scan products
    - Auto-fill item name/description
    - Optional product metadata integration

3. **Basic Collaborative Lists**
    - Share lists with family/colleagues
    - Sync via Firebase/Supabase
    - Real-time updates

### 🔴 **Advanced Features (1-2 weeks)**

4. **Voice-to-List**
    - Voice commands to add items
    - Speech recognition + natural parsing
    - Ex: "add 2kg rice and 1 milk"

5. **AI Smart Suggestions**
    - Auto-suggest based on history
    - Group by category (fruits, cleaning, bakery)
    - Learn from purchase patterns

### 🟣 **Expert Features (2-4 weeks+)**

6. **Price Intelligence**
    - Compare prices between nearby supermarkets
    - Highlight best value by quantity/brand
    - Integration with local price APIs

7. **Store Mode + Indoor Navigation**
    - Smart ordering by store aisle
    - Map/navigation inside large stores
    - Shopping route optimization

8. **Budget & Spend Analytics**
    - Set target budget per trip
    - Track estimated vs final spend over time
    - Financial reports and insights

## Run on Your Own Device (No Local Machine Setup Needed)

You can run and test the app **without installing Node.js, Android Studio, Xcode, or any mobile SDK** using Expo's cloud
workflow.

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

### 🟢 **Easy Next Steps (1-2 days)**

- [ ] Add item quantity/unit support

### 🟡 **Medium Features (3-5 days)**

- [ ] Add camera barcode scanner flow
- [ ] Build collaborative sync (Firebase/Supabase)

### 🔴 **Advanced Features (1-2 weeks)**

- [ ] Add AI suggestion service layer

### ✅ **Already Implemented**

- [x] Persist list items locally (AsyncStorage) ✅ **COMPLETED**
- [x] Implement Done/Pending state management ✅ **COMPLETED**

---

Built with ❤️ using React Native + Expo.
