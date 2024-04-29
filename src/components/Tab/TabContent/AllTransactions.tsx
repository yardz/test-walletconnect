/* eslint-disable @next/next/no-img-element */

import { Transaction } from "@src/interfaces/api";
import styles from "./TransactionsTable.module.scss";
import axios from "axios";
import { LongText } from "@src/components/LongText";
import { Address } from "@src/components/Address";
import { weiToEther } from "@src/utils/blockchain/weiToEther";
import { displayDecimals } from "@src/utils/blockchain/displayDecimals";

interface Props {
	address: string;
}

export const AllTransactions = async ({ address }: Props) => {
	const req = await axios.get<{ transactions: Transaction[] }>(
		`/api/wallet/${address}/transactions`
	);
	const { transactions } = req.data;

	return (
		<div data-testid="AllTransactions" className={styles.container}>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>Summary</th>
						<th>Hash</th>
						<th>Block</th>
						<th>From</th>
						<th>To</th>
						<th>Value</th>
						<th>Fee (Units)</th>
					</tr>
				</thead>
				<tbody>
					{transactions.map((transaction) => (
						<tr key={transaction.hash}>
							<td className={styles.summary}>{transaction.summary}</td>
							<td width={100}>
								<LongText
									showCopy={false}
									showRedirect={false}
									text={transaction.hash}
								/>
							</td>
							<td>{transaction.block}</td>
							<td width={200}>
								<Address address={transaction.from} />
							</td>
							<td width={200}>
								<Address address={transaction.to} />
							</td>
							<td>
								{transaction.value === "0"
									? "0"
									: displayDecimals(weiToEther(transaction.value), 4)}
							</td>
							<td>{transaction.fee}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
