import { Transaction, TypedTransaction } from "@src/interfaces/api";
import axios from "axios";
import styles from "./page.module.scss";
import { Tab } from "@src/components/Tab";
import { AllTransactions } from "@src/components/Tab/TabContent/AllTransactions";
import {
	InternalTransactions,
	NftTransactions,
} from "@src/components/Tab/TabContent";
import { TypedTransactionTable } from "@src/components/Tab/TabContent/TypedTransactionTable";

export default async function Page({
	params,
}: {
	params: { address: string };
}) {
	// Validation on middleware
	const address = params.address;

	// I used Promise.all to get the data from 2 different api's at the same time
	const [reqErc20, reqNative] = await Promise.all([
		axios.get<{ transactions: TypedTransaction[] }>(
			`/api/wallet/${address}/transactions/erc20`
		),
		axios.get<{ transactions: TypedTransaction[] }>(
			`/api/wallet/${address}/transactions/native`
		),
	]);

	const erc20Transactions = reqErc20.data.transactions;
	const nativeTransactions = reqNative.data.transactions;

	return (
		<main data-testid="TransactionsPage" className={styles.TransactionsPage}>
			<div className={styles.container}>
				<div className={styles.title}>
					<h2>
						<span>Transactions</span>
					</h2>
				</div>
				<div className={styles.body}>
					<Tab
						initial="all"
						options={[
							{
								id: "all",
								label: "All",
								content: <AllTransactions address={address} />,
							},
							// I choose he to create "specialized" tabs for each type of transaction just to create different components for each type of transaction.
							// Inside each one i can add more specific information about the transaction type. But those are just examples.
							{
								id: "internal",
								label: "Internal Transactions",
								content: <InternalTransactions address={address} />,
							},
							{
								id: "nft",
								label: "NFT Transfers",
								content: <NftTransactions address={address} />,
							},
							// Since all diferent types of transactions are being displayed in the same way, i created a single component to display them.
							// This same "simple" component can be used inside the "specialized" tabs. They are here just to show the difference ways to do the same thing
							{
								id: "erc20",
								label: "ERC20 Transfer",
								content: (
									<TypedTransactionTable transactions={erc20Transactions} />
								),
							},
							{
								id: "native",
								label: "Native Transfers",
								content: (
									<TypedTransactionTable transactions={nativeTransactions} />
								),
							},
						]}
					/>
				</div>
			</div>
		</main>
	);
}
