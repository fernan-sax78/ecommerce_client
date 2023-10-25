
import Link from "next/link";
import styles from "./sign-up.module.scss";
import { JoinLayout } from "@/layouts";
import { RegisterForm } from "@/components/Auth/RegisterForm/RegisterForm";
import { Seo } from "@/components/Shared";

export default function SignUp() {
  return (
   <>
   <Seo title = "Create Account - Page"/>
    <JoinLayout>
    <div className = {styles.signIn}>
      <h3>Create Account</h3>

      <RegisterForm />

   <div className = {styles.actions}>
     <Link href = "/join/sign-in">Already an Account ? Go to Login</Link>
   </div>
    </div>



    </JoinLayout>   
   </>
  )
}

 
