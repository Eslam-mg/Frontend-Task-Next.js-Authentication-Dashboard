import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Authentication App
        </h1>
        <p className="text-gray-600 mb-8">
          Complete authentication flow with Next.js
        </p>
        <div className="space-y-4">
          <Link
            href="/register"
            className="block w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Get Started - Register
          </Link>

          <Link
            href="/login"
            className="block w-full px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
}
