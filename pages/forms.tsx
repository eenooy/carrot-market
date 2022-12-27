import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
    userName: string;
    email: string;
    password: string;
}

export default function Forms() {
    const { register, handleSubmit } = useForm<LoginForm>();
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
                    required: "Email is reqired"
                })}
                type="email"
                placeholder="Email"
            />
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