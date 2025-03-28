import { useState } from "react";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from '../components/Logo';
import img from '../assets/hero5.jpeg'; // Use the same image as login or choose another

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Handle password reset logic here
    console.log("Reset link sent to:", email);
    setLoading(false);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Left Side - Image */}
      <div className="hidden lg:flex w-1/2 h-screen">
        <img src={img} alt="Forgot Password" className="w-full h-full object-cover" />
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-primary">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
          <div className="flex justify-center">
            <Logo />
          </div>

          <h2 className="text-2xl font-bold text-center mt-4">Reset Password</h2>
          <p className="text-gray-500 text-center mt-2">
            Enter your email to receive reset instructions
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mt-6">
              <label className="text-gray-700 flex items-center gap-2">
                <Mail size={20} className="text-primary" /> Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-primary-2 focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-3 transition"
              disabled={loading}
            >
              {loading ? "Sending..." : "Reset Password"}
            </button>
          </form>

          {/* Back to Login Link */}
          <p className="text-center mt-6 text-gray-600">
            Remember your password?{" "}
            <Link to="/login" className="text-primary hover:underline">
              Back to Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
