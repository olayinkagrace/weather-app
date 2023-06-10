import React from "react";
import { View, Text } from "react-native";

const RowText = (props) => {
  const {
    containerStyles,
    messageOneStyles,
    messagetwoStyles,
    messageOne,
    messagetwo,
  } = props;
  return (
    <View style={containerStyles}>
      <Text style={messageOneStyles}>{messageOne}</Text>
      <Text style={messagetwoStyles}>{messagetwo}</Text>
    </View>
  );
};

export default RowText;
