import Link from 'next/link';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-10 shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="mt-2 text-gray-600">Sign in to your account</p>
        </div>
        
        <div className="mt-8 space-y-6">
          <div className="flex flex-col gap-4">
            <a
              href="/api/auth/login"
              className="flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Sign in with Auth0
            </a>
            
            <div className="text-center text-sm text-gray-500">
              <p>
                Don't have an account?{' '}
                <a href="/api/auth/login" className="font-medium text-blue-600 hover:text-blue-500">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
          ← Back to home
        </Link>
      </div>
    </div>
  );
} 