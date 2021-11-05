import React from "react";
import {View, Text} from "react-native"

import styles from "./style";

const Section: React.FC = ({children, title}: any) => {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <Text style={  styles.sectionDescription}>{children} </Text>
      </View>
    );
  };

  export default Section;