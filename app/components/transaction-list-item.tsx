import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";

import { type Transaction } from "../interface/types";

export const TransactionListItem = ({
  transaction,
}: {
  transaction: Transaction;
}) => {
  return (
    <ListCard
      amount={transaction.amount}
      title={`#${transaction.id} ${transaction.type}`}
    /**
     * TODO: For wires,
     *       1. add subtitle="A fee may apply" under the title
     *       2. downsize the font by 2 points
     *       3. use font color "slategray"
     */
    /**
     * TODO: For deposits,
     *       1. add subtitle="A fee may apply" under the title
     *       2. keep the regular font size
     *       3. use font color "slategray"
     */
    />
  );
};

// Note: This component is intentionally separate from `TransactionListItem`.
// Avoid inlining this, regardless of how strong the temptation is!
const ListCard = ({ title, amount }: { title: string; amount: number }) => {
  const amountStyles = amount > 0 ? styles.amountPositive : styles.amountNegative;
  const subtitleStyles = title.includes("wire") ? styles.wiresSubtitle : styles.subtitle;
  const isSubtitleVisible = title.includes("wire") || title.includes("deposit") ? true : false;
  return (
    <TouchableOpacity
      style={styles.container}
    >
      <View>
        <Text style={styles.textTitle}>{title}</Text>
        {isSubtitleVisible && <Text style={subtitleStyles}>A fee may apply”</Text>}
      </View>
      <Text style={amountStyles}>{amount}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 2,
    backgroundColor: "#eee",
    marginHorizontal: 15,
    marginVertical: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center'
  },
  textTitle: {
    fontSize: 14,
    color: "navy"
  },
  amountPositive: {
    color: "green",
    fontWeight: "400"
  },
  amountNegative: {
    fontWeight: "200"
  },
  subtitle: {
    fontSize: 12,
    color: "slategray"
  },
  wiresSubtitle: {
    fontSize: 10,
    color: "slategray"
  }
});
