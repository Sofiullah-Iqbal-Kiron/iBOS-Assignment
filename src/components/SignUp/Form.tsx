import { Link, useNavigate } from "react-router-dom";

// shadcn
import { Input } from "../../shadcn/ui/input";
import { Label } from "../../shadcn/ui/label";
import { Checkbox } from "../../shadcn/ui/checkbox";
import { Button } from "../../shadcn/ui/button";

// local
import HorizontalSeparator from "../HorizontalSeparator";
import google_logo from "../../assets/google logo.svg"
import apple_logo from "../../assets/apple logo.svg"
import BrandName from "../BrandName";
import RequiredIndicator from "../RequiredIndicator";


export default function Form() {
    const navigate = useNavigate()

    return (
        <form className="flex flex-col space-y-8">
            <legend>
                <h1 className="text-xl front-bold">Welcome To</h1>
                <BrandName size="stamp" />
                <h3 className="text-sm text-neutral-500">Register for purchase your favorite products</h3>
            </legend>

            <div className="flex flex-col space-y-2.5">
                <div className="flex space-x-2.5">
                    <div className="form-field">
                        <Label htmlFor="first_name">First Name</Label>
                        <Input id="first_name" type="text" placeholder="first name (optional)" />
                    </div>

                    <div className="form-field">
                        <Label htmlFor="last_name">Last Name</Label>
                        <Input id="last_name" type="text" placeholder="last name (optional)" />
                    </div>
                </div>

                <div className="form-field">
                    <Label htmlFor="email">
                        Email
                        <RequiredIndicator />
                    </Label>
                    <Input id="email" type="email" placeholder="enter a valid email address" />
                </div>

                <div className="form-field">
                    <Label htmlFor="password">
                        Password
                        <RequiredIndicator />
                    </Label>
                    <Input id="password" type="password" placeholder="choose a strong password" />
                </div>

                <div className="form-field">
                    <Label htmlFor="password-confirmation">
                        Password Confirmation
                        <RequiredIndicator />
                    </Label>
                    <Input id="password-confirmation" type="password" placeholder="retype the password" />
                </div>

                <div className="flex items-center space-x-1">
                    <Checkbox id="accept-terms-and-conditions" />
                    <Label htmlFor="accept-terms-and-conditions" className="font-normal text-sm">I have read and agree to the</Label>
                    <Link to="" className="font-normal text-sm underline underline-offset-2">Terms & Policy</Link>
                </div>

                <Button type="submit" className="w-full" onClick={() => navigate("/")}>
                    Sign Up
                </Button>

                <HorizontalSeparator text="or" />

                <div className="flex flex-row space-x-2.5">
                    <Button variant="outline" className="flex-grow font-normal text-xs flex items-center space-x-1.5">
                        <img src={google_logo} alt="google-logo" height={20} width={20} />
                        <span>Register with Google</span>
                    </Button>
                    <Button variant="outline" className="flex-grow font-normal text-xs flex items-center space-x-1.5">
                        <img src={apple_logo} alt="apple-logo" height={20} width={20} />
                        <span>Register with Apple</span>
                    </Button>
                </div>

                <div className="text-xs font-semibold flex justify-center space-x-1">
                    <span>Already have an account?</span>
                    <Link to="/sign-in" className="text-sky-600">Sign In</Link>
                </div>
            </div>
        </form>
    )
}
