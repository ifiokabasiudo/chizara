export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full text-center bg-gray-50 p-8 rounded-2xl shadow-md">
        <h1 className="text-2xl font-semibold text-green-600 mb-4">
          ✅ Request Sent Successfully
        </h1>

        <p className="text-gray-700 mb-6">
          Thank you for reaching out. Someone will reach out to you soon.
        </p>

        <a
          href="/"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}