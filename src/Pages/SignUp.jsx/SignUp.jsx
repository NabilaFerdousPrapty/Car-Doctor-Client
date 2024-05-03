import  { useContext } from "react";
import img from "../../assets/images/login/login.svg";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../Auth/AuthProviders";
const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (e) => {
    const navigation = useNavigate();
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const imageUrl = form.imageUrl.value;
    const password = form.password.value;
    const email = form.useremail.value;
    const confirmPassword = form.confirmPassword.value;
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (password !== confirmPassword) {
      toast.error("Password does not match");
      return;
    }
       if (!regex.test(password)) {
           toast.error('Password must contain at least 8 characters, including uppercase, lowercase letters and numbers');
           return;

       }
    createUser(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            toast.success("User created successfully");
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage);
        });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={img} alt="" />
        </div>
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800">
          <h1 className="text-2xl font-bold text-center">Login</h1>
          <form onSubmit={handleSignUp} className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block text-gray-600">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block text-gray-600">
                User Email
              </label>
              <input
                type="email"
                name="useremail"
                id="useremail"
                placeholder="User Email"
                className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block text-gray-600">
                Image Url
              </label>
              <input
                type="url"
                name="imageUrl"
                id="imageUrl"
                placeholder="Username"
                className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600"
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block text-gray-600">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600"
              />
              <div className="flex justify-end text-xs text-gray-600"></div>
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block text-gray-600">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword" 
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600"
              />

              <div className="flex justify-end text-xs text-gray-600"></div>
            </div>
            <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-[#FF3811]">
              Sign Up
            </button>
          </form>

          <p className="text-xs text-center sm:px-6 text-gray-600">
            Already have an account?
            <Link to={"/login"} className="underline text-gray-800">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
