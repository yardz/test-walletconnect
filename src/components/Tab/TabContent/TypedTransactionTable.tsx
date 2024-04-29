import { Address } from "@src/components/Address";
import { TypedTransaction } from "@src/interfaces/api";
import { displayDecimals } from "@src/utils/blockchain/displayDecimals";
import { weiToEther } from "@src/utils/blockchain/weiToEther";
import styles from "./TransactionsTable.module.scss";

interface Props {
	transactions: TypedTransaction[];
}

export const TypedTransactionTable = ({ transactions }: Props) => {
	return (
		<table className={styles.table} data-testid="TypedTransactionTable">
			<thead>
				<tr>
					<th>From</th>
					<th>To</th>
					<th>Value</th>
					<th>Direction</th>
				</tr>
			</thead>
			<tbody>
				{transactions.map((transaction, key) => (
					<tr key={key}>
						<td width={200}>
							<Address address={transaction.from} />
						</td>
						<td width={200}>
							<Address address={transaction.to} />
						</td>
						<td>
							{transaction.value === "0"
								? "0"
								: displayDecimals(weiToEther(transaction.value), 4)}{" "}
							{transaction.tokenSymbol}
						</td>
						<td>{transaction.direction}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
