import { getData, postData } from "@/lib/api";
import toast from "react-hot-toast";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

export const handleLogin = async ({
  userLoginData,
  setIsLoading,
  setErrors,
  router,
}) => {
  try {
    // Validate form data
    await validationSchema.validate(userLoginData, { abortEarly: false });

    // Start loading
    setIsLoading(true);

    // Make API request
    const response = await postData("/api/users/signin", userLoginData);
    console.log(response);

    if (response.data.success === true && response.data.data?.token) {
      // Save token and user type in cookies
      document.cookie = `token=${response.data.data.token}; path=/;`;
      document.cookie = `type=${response.data.data.user.type}; path=/;`;

      toast.success("Successfully logged in!");
      router.push("/");
    } else {
      toast.error("Invalid login response");
    }
  } catch (error) {
    // Handle validation errors
    if (error.name === "ValidationError") {
      const validationErrors = {};
      error.inner.forEach((err) => {
        validationErrors[err.path] = err.message;
      });
      setErrors(validationErrors);
    } else if (error.status === 401) {
      toast.error("Invalid email or password");
    } else if (error.message === "Request timeout") {
      toast.error("Request timed out. Please try again.");
    } else if (error.message === "No internet connection") {
      toast.error("Please check your internet connection");
    } else {
      toast.error("An error occurred. Please try again later.");
    }
  } finally {
    // Stop loading
    setIsLoading(false);
  }
};

export const category = async (setCategories) => {
  try {
    const response = await getData(
      '/api/users/category'
    );
    setCategories(response.data || []);
  } catch (error) {
    console.error("Error fetching categories:", error);
    setCategories([]);
  }
};

export const handleSignup = async ({
  userSignupData,
  router,
  isProvider,
  categories,
  setError,
}) => {
  try {
    // Build base signup data
    const signupData = {
      username: userSignupData.username,
      phone: userSignupData.phone,
      email: userSignupData.email,
      password: userSignupData.password,
      type: "user", // default type
    };

    // If signing up as a provider, map category info
    if (isProvider && userSignupData.category) {
      const selectedCategory = categories.find(
        (cat) => cat.id === userSignupData.category
      );

      if (selectedCategory) {
        // signupData.type = selectedCategory.name;
        signupData.type = "provider";
        signupData.category = selectedCategory.id;
      }
    }

    // API request
    const response = await postData("/api/users/signup", signupData);
    console.log("Signup Response:", response);

    if (response.data.success === true) {
      const { token, user } = response.data.data;

      // Save to cookies
      if (token) {
        document.cookie = `token=${token}; path=/;`;
        document.cookie = `type=${user.type}; path=/;`;
      }

      toast.success(
        user.type === "user"
          ? "User created successfully"
          : "Provider created successfully"
      );

      // Navigate to respective dashboard
      router.push('/');
    } else {
      toast.error("Signup failed");
      setError(response.message || "Signup failed");
    }
  } catch (error) {
    // console.error("Signup Error:", error);
    toast.error("Error during signup");
    setError("An error occurred during signup");
  }
};
