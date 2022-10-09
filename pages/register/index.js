import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useJwt, decodeToken } from "react-jwt";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { MetaHead } from "..";
import Button from "../../components/button/Button";
import Icon from "../../components/icons";
import style from "./register.module.scss";
import { getCookie, setCookie } from "../../helpers/utils";

export default function Register() {
  const [view, setView] = useState("button");

  const token = getCookie("google-login");

  const { decodedToken } = useJwt(token);

  const { back } = useRouter();

  const onSuccess = (loginInfo) => {
    const decoded = decodeToken(loginInfo.credential);
    console.log("Login Success: ", { loginInfo, decoded });
    setCookie("google-login", loginInfo.credential);
    setView("loggedin");
  };

  useEffect(() => {
    if (token) setView("loggedin");
    else setView("button");
  }, [token]);

  return (
    <GoogleOAuthProvider
      clientId={`${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`}
    >
      <div
        className={`${style.register} flex items-center justify-center h-screen`}
      >
        <MetaHead title="Register" />
        <section className="w-full max-w-screen-lg mx-auto">
          <div className="lg:flex lg:max-w-full md:max-w-xl md:mx-auto rounded-2xl overflow-hidden">
            <div
              className={`${style.photo} hidden sm:hidden md:hidden lg:block`}
            >
              <Image
                // src={`https://placeimg.com/400/500/people`}
                src="https://picsum.photos/400/500"
                alt="Wedding Illsutration"
                width={400}
                height={500}
                className="block"
              />
            </div>
            <div className={`${style.photo} block sm:block md:block lg:hidden`}>
              <Image
                // src={`https://placeimg.com/400/500/people`}
                src="https://picsum.photos/400/300"
                alt="Wedding Illsutration"
                width={400}
                height={300}
                className="block"
              />
            </div>
            <div
              className={`flex-1 py-4 px-6 bg-darken-green text-lightest-green font-medium`}
            >
              <h2 className="text-2xl mt-6 mb-1 text-center sm:text-left">
                Login atau Register
              </h2>
              <h3 className="text-l mb-8  text-center sm:text-left">
                lalu lanjutkan buat undanganmu.
              </h3>
              <div className="flex items-center flex-col sm:flex-row mb-6 mt-1">
                <Button
                  className="btn-outline sm:rounded-r-none"
                  onClick={back}
                >
                  <Icon icon="ChevronLeft" className="mr-2" /> Kembali
                </Button>
                {/* <GoogleLogin
                clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
                cookiePolicy="single_host_origin"
                onSuccess={authResponse}
                onFailure={authResponse}
                render={({ disabled, onClick }) => (
                  <Button
                    model="secondary"
                    onClick={onClick}
                    disabled={disabled}
                    loading={disabled}
                    className="sm:rounded-l-none mb-2"
                  >
                    Login dengan Google
                  </Button>
                )}
              /> */}
                {view === "loggedin" ? (
                  "Logging In..."
                ) : (
                  <GoogleLogin
                    onSuccess={onSuccess}
                    onError={(e) => console.log("Error Login: ", e)}
                    size="large"
                    text="Login dengan Google"
                    shape="pill"
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </GoogleOAuthProvider>
  );
}
