import { COLORS } from "@src/styles/Constants";
import { SpanColor } from "../SpanColor";

interface Props {
	text: string;
}
export const SpanMultColorLetters = ({ text }: Props) => {
	const name = text.split("");
	const colorIndex: { [key: number]: string } = {
		0: COLORS.blue,
		1: COLORS.red,
		2: COLORS.yellow,
		3: COLORS.green,
	};
	return (
		<>
			{name.map((letter, index) => {
				const selectedColor = index % Object.keys(colorIndex).length;
				return (
					<SpanColor key={index} color={colorIndex[selectedColor]}>
						{letter}
					</SpanColor>
				);
			})}
		</>
	);
};
