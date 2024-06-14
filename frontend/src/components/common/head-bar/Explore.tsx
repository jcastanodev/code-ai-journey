import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { CustomButton } from "../material-ui";

interface Props {
	onClose: VoidFunction;
}
export function Explore({ onClose }: Props) {
	const { t } = useTranslation();

	return (
		<div className="flex flex-col bg-page h-full">
			<div className="mx-auto">
				<img src="/images/logos/logo.png" alt="Logo" width={100} />
			</div>
			<div className="container mx-auto flex flex-wrap gap-2 justify-center">
				<div className="w-full text-center pb-6">
					<h1>{t("tools")}</h1>
				</div>
				<Link to="/chatbot">
					<CustomButton>{t("goToChatBot")}</CustomButton>
				</Link>
				<Link to="/business">
					<CustomButton>{t("goToBusiness")}</CustomButton>
				</Link>
				<Link to="/customEntity">
					<CustomButton>Go to custom entity</CustomButton>
				</Link>
				<Link to="/connectFour">
					<CustomButton>Go to connectFour</CustomButton>
				</Link>
				<Link to="/aiPlayground">
					<CustomButton>Go to AI Playground</CustomButton>
				</Link>
				<Link to="https://discord.com/oauth2/authorize?client_id=1217540704721567804&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fexplore&scope=identify+messages.read+webhook.incoming">
					<CustomButton>Join Discord</CustomButton>
				</Link>
			</div>
		</div>
	);
}
