import React from "react";
import { View, StyleSheet } from "react-native";
import { Table, Rows } from "react-native-table-component";

export default function Matrix({ data }) {
  return (
    <View>
      <Table borderStyle={{ borderWidth: 2, borderColor: "#212529" }}>
        <Rows data={data} textStyle={styles.text} />
      </Table>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#212529" },
  text: { margin: 6 },
});
