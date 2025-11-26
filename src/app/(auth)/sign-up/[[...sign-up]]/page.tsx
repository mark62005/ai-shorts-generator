import Image from "next/image";
import { SignUp } from "@clerk/nextjs";

function SignUpPage() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2">
			<div className="">
				<Image
					src={"auth-page.jpg"}
					alt="Auth Image"
					width={500}
					height={500}
					className="w-full object-contain"
				/>
			</div>

			<div className="flex justify-center items-center h-screen">
				<SignUp />
			</div>
		</div>
	);
}
export default SignUpPage;
