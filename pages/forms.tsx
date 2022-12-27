import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
    userName: string;
    email: string;
    password: string;
}

export default function Forms() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>({
        mode: "onChange",
    });
    const onValid = (data: LoginForm) => {
        console.log("im valid");
    };
    const onInvalid = (errors: FieldErrors) => {
        console.log(errors);
    };
    return (
        <form onSubmit={handleSubmit(onValid, onInvalid)}>
            <input
                {...register("userName", {
                    required: "UserName is reqired",
                    minLength: {
                        message: "The userName should be longer than 5 chars",
                        value: 5,
                    },
                })}
                type="text"
                placeholder="UserName"
            />
            <input
                {...register("email", {
                    required: "Email is reqired",
                    validate: {
                        notGmail: (value) =>
                            !value.includes("@gmail.com") || "Gmail is not allowed"
                    },
                })}
                type="email"
                placeholder="Email"
                className={`${Boolean(errors.email?.message) ? "border-red-500" : ""}`}
            />
            {errors.email?.message}
            <input
                {...register("password", {
                    required: "Password is reqired"
                })}
                type="password"
                placeholder="Password"
            />
            <input
                type="submit"
                value="Create Account"
            />
        </form>
    );
}