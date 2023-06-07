import React from "react";
import {
  Button,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  StyleSheet
} from "react-native";

import { fetchTransactions } from "../utils/transaction-data";
import { TransactionList } from "../components/transaction-list";

const App = () => {
  const [transactions, setTransactions] = React.useState([]);
  const [balance, setBalance] = React.useState([]);

  const onUpdateJsPress = async () => {
    // TODO: Compute and set balance.
    const response = await fetchTransactions();
    const newTransactions = await response.json();
    setTransactions(newTransactions.transactions);
    setBalance(newTransactions.balance);
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Text
        style={styles.textBalance}>
        Balance: {balance !== undefined ? balance : "?"}
      </Text>
      <View
        style={styles.buttonContainer}>
        <Button
          title="Update (JS)"
          onPress={onUpdateJsPress}
        />
        <Button
          title="Update (Native)"
          onPress={() => {
            // TODO: Compute balance via native module and set.
            // TODO: Update transaction list.
          }}
        />
      </View>
      <TransactionList transactions={transactions} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textBalance: {
    width: "100%",
    textAlign: "center",
    fontSize: 20,
    marginVertical: 20,
  },
  buttonContainer: {
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    flexDirection: "row",
    justifyContent: "space-evenly",
  }
})

export default App;
