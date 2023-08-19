import "./App.css";

function App() {
  return (
    <div className="bg-primary w-full h-full">
      <div className="card w-96 bg-white shadow-xl mx-auto my-auto">
        <div className="card-body">
          <h2 className="card-title self-center text-black text-2xl pb-5 font-bold">
            Login Form
          </h2>

          <div className="card-actions justify-content">
            <button className="btn btn-primary  flex-grow border-gray-300">
              Login
            </button>
            <button className="btn btn-secondary flex-grow border-gray-300 mb-5">
              Signup
            </button>

            <input
              type="text"
              placeholder="Email Address"
              className="input input-bordered w-full max-w-xs bg-white"
            />
            <div className="form-control w-full max-w-xs">
              <input
                type="text"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs bg-white"
              />
              <label className="label">
                <span className="label-text-alt text-primary">
                  Forgot password?
                </span>
              </label>
            </div>
            <div className="form-control ">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  // checked={false}
                  className="checkbox mr-1"
                />
                <span className="label-text text-black">Remember me</span>
              </label>
            </div>
          </div>
          <button className="btn btn-primary  flex-grow">Login</button>
        </div>
      </div>
    </div>
  );
}

export default App;
