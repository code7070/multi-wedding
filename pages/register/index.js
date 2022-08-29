import Image from "next/image";
import { useRouter } from "next/router";
import { GoogleLogin } from "react-google-login";
import { MetaHead } from "..";
import Button from "../../components/button/Button";
import Icon from "../../components/icons";
import style from "./register.module.scss";

export default function Register() {
  const { back } = useRouter();

  const authResponse = (event) => {
    console.log("EVENT TRIGERRED: ", event);
  };

  return (
    <div
      className={`${style.register} flex items-center justify-center h-screen`}
    >
      <MetaHead title="Register" />
      <section className="w-full max-w-screen-lg mx-auto">
        <div className="flex rounded-2xl overflow-hidden">
          <div className={style.photo}>
            <Image
              // src={`https://placeimg.com/400/500/people`}
              src="https://picsum.photos/400/500"
              alt="Wedding Illsutration"
              width={400}
              height={500}
              className="block"
            />
          </div>
          <div
            className={`flex-1 py-4 px-6 bg-darken-green text-lightest-green font-medium`}
          >
            <h2 className="text-2xl mt-6 mb-1">Login atau Register</h2>
            <h3 className="text-l mb-8">lalu lanjutkan buat undanganmu.</h3>
            <div className="flex items-center">
              <Button className="btn-outline rounded-r-none" onClick={back}>
                <Icon icon="ChevronLeft" className="mr-2" /> Kembali
              </Button>
              <GoogleLogin
                clientId="691064431611-dlph09khg9us6ekg73jkn60lrkb7rque.apps.googleusercontent.com"
                cookiePolicy="single_host_origin"
                onSuccess={authResponse}
                onFailure={authResponse}
                render={({ disabled, onClick }) => (
                  <Button
                    model="secondary"
                    onClick={onClick}
                    disabled={disabled}
                    loading={disabled}
                    className=" rounded-l-none"
                  >
                    Login dengan Google
                  </Button>
                )}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
