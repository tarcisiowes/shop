import "@testing-library/react-native/matchers";

jest.mock("react-native");
jest.mock("@expo/vector-icons", () => ({ Ionicons: "Ionicons" }));
jest.mock("lucide-react-native", () => ({
  Trash2: "Trash2",
  CircleCheck: "CircleCheck",
  CircleDashed: "CircleDashed",
}));
jest.mock("expo-crypto", () => ({ randomUUID: () => "test-uuid" }));

const ReactNative = require("react-native");
if (ReactNative.StyleSheet && !ReactNative.StyleSheet.flatten) {
  ReactNative.StyleSheet.flatten = (style) => {
    if (Array.isArray(style)) {
      return style.filter(Boolean).reduce((acc, item) => Object.assign(acc, item), {});
    }
    return style || {};
  };
}

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock")
);

jest.mock("@react-native-community/datetimepicker", () => "DateTimePicker");
