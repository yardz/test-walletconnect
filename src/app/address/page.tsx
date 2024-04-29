import { Address } from "@src/components/Address";
import { NFTs } from "@src/components/NFTs";
import { Overview } from "@src/components/Overview";
import { SearchBox } from "@src/components/SearchBox";
import { SpanMultColorLetters } from "@src/components/SpanColor";
import { Tokens } from "@src/components/Tokens/Tokens";
import { isAddress } from "web3-validator";

import classNames from "classnames";
import styles from "./page.module.scss";
import { Tutorial } from "@src/components/Tutorial";

export default function Page({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	const query = new URLSearchParams(searchParams as unknown as string);
	const address = query.get("address") || "";
	const isValidAddress = isAddress(address);

	let title = null;
	let content = null;
	if (!isValidAddress) {
		title = (
			<h2>
				This is a invalid address...
				<br />
				<SpanMultColorLetters text="Please, try again!" />
			</h2>
		);
		content = <SearchBox modal={false} />;
	} else {
		title = (
			<h2>
				<span>Address:</span>
				&nbsp;
				<Address address={address} />
			</h2>
		);
		content = (
			<div className={styles.grid}>
				<div className={styles.pageSection}>
					<Overview address={address} />
				</div>

				<div className={styles.pageSection}>
					<Tokens address={address} />
				</div>

				<div className={styles.pageSection}>
					<NFTs address={address} />
				</div>
			</div>
		);
	}

	return (
		<>
			<main
				data-testid="Address"
				className={classNames(styles.Address, {
					[styles.invalid]: !isValidAddress,
				})}
			>
				<div className={styles.container}>
					<div className={styles.title}>{title}</div>
					<div className={styles.body}>{content}</div>
				</div>
			</main>
			<Tutorial>
				<>
					<h2>Just a Overview</h2>
					<p>
						This page is just an Overview of the address you are searching
						for...
					</p>
					<p>
						On this page I show 3 sessions. One with the network's default
						currencies (ether). Another with tokens and another with your NFTs
					</p>
					<p>
						If you have more than 3 tokens or more than 3 NFTs, it will show a
						link to see the list of these tokens (or nfts)
					</p>
					<p>
						In the balance part (first board/card) I implemented a receipt
						between 2 providers in the backend. So whichever promise returns
						first, I use its value!
					</p>
				</>
			</Tutorial>
		</>
	);
}
