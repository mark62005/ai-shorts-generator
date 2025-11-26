import { ClerkProvider as ClerkProviderFromModule } from "@clerk/nextjs";
import { IGeneralLayoutProps } from "@/types/app/layout-props";

function ClerkProvider({ children }: IGeneralLayoutProps) {
	return <ClerkProviderFromModule>{children}</ClerkProviderFromModule>;
}
export default ClerkProvider;
