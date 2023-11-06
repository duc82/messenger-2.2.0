"use client";

const SignIn = () => {
  return (
    <div className="col-12 col-md-5 col-lg-4">
      <div className="card card-shadow border-0">
        <div className="card-body">
          <form className="row g-6">
            <div className="col-12">
              <div className="text-center">
                <h3>Sign In</h3>
                <p>Login to your account</p>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating">
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="form-control bg-light"
                  placeholder="Email"
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="col-12"></div>
            <div className="col-12"></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
