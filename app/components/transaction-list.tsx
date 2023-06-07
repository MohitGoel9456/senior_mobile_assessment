import React from "react";
import { FlatList, ScrollView, Text, View } from "react-native";

import { TransactionListItem } from "./transaction-list-item";
import { Transaction } from "../interface/types";

export const TransactionList = ({
  transactions,
}: {
  transactions: Transaction[];
}) => {
  const data = transactions.reverse();

  const renderItem = ({ item }: { item: Transaction }) => {
    return (
      <TransactionListItem transaction={item} />
    )
  }

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
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};
