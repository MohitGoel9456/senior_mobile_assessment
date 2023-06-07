import React from "react";
import { ScrollView, Text, View } from "react-native";

import { TransactionListItem } from "./transaction-list-item";
import { Transaction } from "../interface/types";

export const TransactionList = ({
  transactions,
}: {
  transactions: Transaction[];
}) => {
  return (
    <View>
      <Text
        style={{
          width: "100%",
          textAlign: "center",
          fontSize: 20,
          marginBottom: 10,
        }}>
        Transactions
      </Text>
      <ScrollView>
        {transactions.reverse().map(transaction => (
          <TransactionListItem transaction={transaction} />
        ))}
      </ScrollView>
    </View>
  );
};
