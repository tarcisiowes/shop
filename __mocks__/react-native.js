const React = require("react");

function createComponent(displayName) {
  const Component = ({ children, ...props }) =>
    React.createElement(displayName, props, children);
  Component.displayName = displayName;
  return Component;
}

const View = createComponent("View");
const Text = createComponent("Text");
const TouchableOpacity = createComponent("TouchableOpacity");
const TextInput = createComponent("TextInput");
const Image = createComponent("Image");
const KeyboardAvoidingView = createComponent("KeyboardAvoidingView");

const Modal = ({ visible, children, ...props }) =>
  visible ? React.createElement("Modal", props, children) : null;

const FlatList = ({ data = [], renderItem, ItemSeparatorComponent, ListEmptyComponent }) => {
  if (!data.length && ListEmptyComponent) {
    return React.createElement(React.Fragment, null, ListEmptyComponent());
  }
  return React.createElement(
    React.Fragment,
    null,
    data.map((item, index) => {
      const element = renderItem({ item, index });
      const separator = ItemSeparatorComponent ? ItemSeparatorComponent() : null;
      return React.createElement(
        React.Fragment,
        { key: item?.id ?? index },
        element,
        separator
      );
    })
  );
};

const Alert = {
  alert: jest.fn(),
};

const Platform = {
  OS: "ios",
  select: (options) => options?.ios ?? options?.default,
};

const StyleSheet = {
  create: (styles) => styles,
};

module.exports = {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Modal,
  FlatList,
  Alert,
  Platform,
  StyleSheet,
};
