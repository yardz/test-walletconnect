import { LongText } from "../LongText";

import styles from "./Address.module.scss";

interface Props {
	address: string;
}
export const Address = ({ address }: Props) => {
	return (
		<div data-testid="Address" className={styles.Address}>
			{/* 
			I created this component same time ago, and i never have a chance to update/fix/maintai for a long time. And is was developed for next 10.
			I carifully ask you to not take to hard on this "LongText" component, because i know that is not the best way to do this. I just use-it for this test propose.
			I also have plans to update this component in the future, and reselases it as a npm package.
			*/}
			<LongText text={address} />
		</div>
	);
};
