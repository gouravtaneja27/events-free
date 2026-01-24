import { useState } from "react";

function SignUpForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        about: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let newErrors = {};

        if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        if (!formData.password) newErrors.password = "Password is required";
        if (!formData.confirmPassword) newErrors.confirmPassword = "Please confirm password";
        if (formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }
        if (!formData.about.trim()) newErrors.about = "This field is required";

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            alert("Form submitted successfully ");
        }
    };

    return (
        <form onSubmit={handleSubmit} noValidate>
            <h4 className="sign-up text-dark fs-4xl fw-xl">Sign Up</h4>

            <div className="w-100 d-flex justify-content-between mb-16 flex-column flex-sm-row gap-20">
                <div className="w-sm-49 w-100">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`px-17 w-100 ${errors.firstName ? "input-error" : ""}`}
                    />
                    {errors.firstName && <small className="error-text">{errors.firstName}</small>}
                </div>

                <div className="w-sm-49 w-100">
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`px-17 w-100 ${errors.lastName ? "input-error" : ""}`}
                    />
                    {errors.lastName && <small className="error-text">{errors.lastName}</small>}
                </div>
            </div>

            <div className="mb-16">
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className={`px-17 w-100 ${errors.email ? "input-error" : ""}`}
                />
                {errors.email && <small className="error-text">{errors.email}</small>}
            </div>

            <div className="mb-16 d-flex justify-content-between flex-sm-row flex-column gap-20">
                <div className="w-sm-49 w-100">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`px-17 w-100 ${errors.password ? "input-error" : ""}`}
                    />
                    {errors.password && <small className="error-text">{errors.password}</small>}
                </div>

                <div className="w-sm-49 w-100">
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className={`px-17 w-100 ${errors.confirmPassword ? "input-error" : ""}`}
                    />
                    {errors.confirmPassword && <small className="error-text">{errors.confirmPassword}</small>}
                </div>
            </div>

            <div className="mb-16">
                <textarea
                    name="about"
                    placeholder="About Me"
                    value={formData.about}
                    onChange={handleChange}
                    className={`w-100 textarea ${errors.about ? "input-error" : ""}`}
                ></textarea>
                {errors.about && <small className="error-text">{errors.about}</small>}
            </div>

            <button className="form-button bg-blue w-100 text-light">Sign up</button>
        </form>
    );
}

export default SignUpForm;
