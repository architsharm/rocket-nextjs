import { getSession, useSession, getCsrfToken, getProviders } from 'next-auth/react'

export default function VerifyRequest() {
    const session = useSession();

    // User is not authenticated, display default verify-request page
    return (
        <div className='h-screen flex justify-center items-center'>
            <div>
                <h1>Verify Your Email Address</h1>
                <p>Please check your email and click the verification link to continue.</p>
            </div>
        </div>
    )
}

export async function getServerSideProps(context: any) {
    const session = await getSession(context)
    const providers = await getProviders()

    return {
        props: {
            session,
            providers,
            csrfToken: await getCsrfToken(context),
        },
    }
}
