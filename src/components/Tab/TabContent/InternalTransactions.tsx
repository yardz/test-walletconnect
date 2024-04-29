/* eslint-disable @next/next/no-img-element */

import { TypedTransaction } from "@src/interfaces/api";
import axios from "axios";
import styles from "./TransactionsTable.module.scss";
import { TypedTransactionTable } from "./TypedTransactionTable";

interface Props {
	address: string;
}

export const InternalTransactions = async ({ address }: Props) => {
	const req = await axios.get<{ transactions: TypedTransaction[] }>(
		`/api/wallet/${address}/transactions/internal`
	);
	const { transactions } = req.data;

	return (
		<div data-testid="InternalTransactions" className={styles.container}>
			<TypedTransactionTable transactions={transactions} />
		</div>
	);
};
