import { Logo } from "@src/components/Logo";
// import { SearchBox } from "@src/components/SearchBox";

import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
	return (
		<main data-testid="Home" className={styles.home}>
			<h1>
				Welcome to <Logo /> my Block Explorer for WalletConnect! 🚀
			</h1>
			<p>
				Hey there, folks! This is Bruno Motta speaking, and I'm super excited to
				introduce you to my latest project: a Block Explorer that's going to
				change the game!
			</p>
			<p>
				Who am I, you might be wondering? Well, I'm a crypto enthusiast, tech
				lover, and with a generous dose of curiosity for the unknown.
			</p>
			<h2>What to expect from My Block Explorer:</h2>
			<ul>
				<li>Detailed insights into transactions, balances, and more.</li>
				<li>
					A user-friendly interface that's easy to navigate, because life is
					complicated enough, right?
				</li>
			</ul>
			<p>
				So, if you're ready to dive into the fascinating world of blockchain and
				unravel the mysteries of your crypto wallets, you've come to the right
				place! Let's do this! 🚀
			</p>
			<h2>What to not expect from My Block Explorer:</h2>
			<ul>
				<li>
					To be able to connect your wallet and see your transactions, balances,
					and more. (But, you steel can see your transactions, balances, and
					nfts if you put yout address in the search box!!)
				</li>
				<li>
					To be able to connect your wallet and sing transactions (sorry, it is
					just a block Explorer)
				</li>
			</ul>
			<p>
				There are some details I would like to share with you before we embark
				on our journey.
			</p>
			<p>
				There are some details I would like to share with you before we embark
				on our journey. First i need to say that this is a just a test project
				and my intention here is to show my skills as a Software Engineer, so in
				some times i will change same patter just to show my skills knolege. As
				example, i'm using server components fot a several components, but in
				some cases i will disable server components just to show you that i know
				how to work with SSR, SSG, ISR.
			</p>
			<p>
				Second, i need to say that i'm not a got designer, please don't judge my
				"design skills". I did most of those tings here focusing in show my
				skills as a Engineer, please take this in consideration when you are
				reviewg this test project.
			</p>
			<p>
				Third, i'm using just module css. I initialy thought to use Material UI,
				but, i was afraid to use it and be penalized for use a UI library. So, i
				decided to use just module css to show that i can do a good job without
				a UI library.
			</p>
			<p>
				Again, remember that i don't have any "designer skills", so, please, be
				very careful when you are reviewing this project. If i need to create a
				designer i will problably create a purple button whith yellow letters
				end things like that.
			</p>
			<p>
				So, if you're ready to dive into the fascinating world of blockchain and
				unravel the mysteries of your crypto wallets, you've come to the right
				place! Let's do this! 🚀
			</p>

			<div className={styles.finalContent}>
				<Link href="/explore" className={styles.button}>
					Let's go!
				</Link>
				<span>I told you that i'm not a designer, right? 😅</span>
			</div>
		</main>
	);
}
