"use client";

import SearchIcon from "@mui/icons-material/Search";
import { useDebounce } from "@src/utils/debounce";
import { useCreateQueryString } from "@src/utils/useCreateQueryString";
import { useRouter } from "next/navigation";

import { useCallback, useEffect, useId, useState } from "react";
import { Modal } from "../Modal";
import { isAddress } from "web3-validator";

import styles from "./SearchBox.module.scss";

interface Props {
	modal?: boolean;
}
export const SearchBox = ({ modal = true }: Props) => {
	const router = useRouter();
	const [address, setAddress] = useState("");
	const debouncedAddress = useDebounce(address, 2000);
	const createCreateQueryString = useCreateQueryString();
	const id = useId();

	const [resultModal, setResultModal] = useState(false);
	const handleModal = useCallback(() => {
		setResultModal(false);
	}, [setResultModal]);

	const handleRedirect = useCallback(() => {
		router.push(
			`/address?${createCreateQueryString({
				address: debouncedAddress,
			})}`
		);
	}, [router, createCreateQueryString, debouncedAddress]);

	useEffect(() => {
		if (!debouncedAddress) {
			return;
		}
		if (debouncedAddress) {
			if (modal) {
				setResultModal(true);
				return;
			}
			handleRedirect();
		}
	}, [debouncedAddress, handleRedirect, modal]);

	const isValid = isAddress(debouncedAddress);

	return (
		<div data-testid="SearchBox" className={styles.SearchBox}>
			<span className={styles.inputBox}>
				<SearchIcon className={styles.icon} />
				<input
					className={styles.input}
					id={id}
					value={address}
					placeholder="Search for an address"
					onChange={(event) => {
						setAddress(event.target.value);
					}}
				/>
			</span>

			{modal && (
				<Modal title={"Search"} open={resultModal} handleClose={handleModal}>
					<>
						<h2>You entered an address!</h2>
						<p>
							Ops, before i start, did you noticed that i put a debounce on
							search? Yes, i did this.
						</p>
						<p>So now I will explain to you what can happen. step by step</p>
						<p>
							First of all, I will redirect to a page "/address" end send this
							address as a query string. Then on this new page i will validate
							if the address is valid or not (this one is{" "}
							{isValid ? "valid" : "invalid"}
							). If is valid, i will show same sample data, if not i will show
							an error message, and request a new address
						</p>
						<button className={styles.resultBtn} onClick={handleRedirect}>
							Can we continue? (
							{isValid
								? "You will se same simple data, but you can dive deeper if you want!"
								: "You will see an error page, and will need to enter a new address!"}
							)
						</button>
						<small className={styles.small}>
							Ok, I'll try to create better buttons next time!
						</small>
					</>
				</Modal>
			)}
		</div>
	);
};
