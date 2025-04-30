import { StyledPlaceholderPage } from "./Placeholder.styles";

interface Props {
	placeholder: string;
}

export const Placeholder = ({ placeholder }: Props) => {
	return (
		<StyledPlaceholderPage>
			<div>
				<h1>{placeholder}</h1>
				<p>This is the {placeholder} page.</p>
				<p>It is currently under construction.</p>
			</div>
		</StyledPlaceholderPage>
	);
};
