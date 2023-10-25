import Link from "next/link";
import styles from "./sign-in.module.scss";
import { JoinLayout } from "@/layouts";
import LoginForm from "@/components/Auth/LoginForm/LoginForm";
import { Seo } from "@/components/Shared";

export default function SignInPage() {
  return (
   <>
      <Seo title = "Sign In - Page" />
        <JoinLayout>
            <div className = {styles.signIn}>
            <h3>Sign In</h3>

             <LoginForm />

            <div className={styles.actions}>
              <Link href = "/join/sign-up">
                Don't have an Account? Create One
              </Link>
            </div>
            </div>
        </JoinLayout>   
   </>
  )
}


