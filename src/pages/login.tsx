import { useState, ChangeEvent } from "react";
import { TextInput, Button } from "flowbite-react";
import Link from 'next/link'
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

export default function RegistrationForm() {
    const router = useRouter();
    const session = useSession();

    if (session.status === "authenticated") {
        router?.push("/protected");
    }
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        email: "user1@test.com",
        password: "12345"
    });

    const assignVal = (event:ChangeEvent<HTMLInputElement>, field:string) => {
        setFormData({
            ...formData,
            [field]: event.target.value
        })
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsSubmitting(true);

        const { email, password } = formData;

        try {
            signIn("credentials", {
                email,
                password,
            });
        } catch (err: any) {
            console.log(err);
        }
        setIsSubmitting(false);
    };

    return (
        <div className="container mx-auto py-10 min-h-screen">
            <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
                <h1 className="text-2xl text-center pb-3">Login In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email address
                        </label>
                        <TextInput
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            onChange={(e) => assignVal(e, 'email')}
                            required
                            className="border border-gray-300 rounded-md px-3 py-2 w-full"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <TextInput
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={(e) => assignVal(e, 'password')}
                            minLength={5}
                            required
                            className="border border-gray-300 rounded-md px-3 py-2 w-full"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                        >
                            {isSubmitting ? "Login..." : "Login"}
                        </Button>

                        <Link href="/register">Go to Register</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
