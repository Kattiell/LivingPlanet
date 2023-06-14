import React from "react";
import { Image, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default function CustomImage({ source, width, height, borderRadius }) {
  const styles = StyleSheet.create({
    image: {
      width: width,
      height: height,
      borderRadius: borderRadius,
    },
  });

  return <Image source={source} style={styles.image} />;
}

CustomImage.propTypes = {
  source: PropTypes.any.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  borderRadius: PropTypes.number.isRequired,
};
