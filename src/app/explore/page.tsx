import { Logo, LogoResponsive } from "@src/components/Logo";
import { SearchBox } from "@src/components/SearchBox";

import styles from "./page.module.scss";

import { Tutorial } from "@src/components/Tutorial";

export default function Explore() {
	return (
		<>
			<main data-testid="Explore" className={styles.explore}>
				<div className={styles.content}>
					<LogoResponsive desktop={"100px"} mobile={"50px"} />
					<SearchBox />
				</div>
			</main>
			<Tutorial>
				<>
					<h2>How to use the search box?</h2>
					<p>
						Enter an address in the search box{" "}
						<span style={{ textDecoration: "line-through" }}>
							and press enter
						</span>
					</p>
				</>
			</Tutorial>
		</>
	);
}
