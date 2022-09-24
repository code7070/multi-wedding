import { useRouter } from "next/router";
import Button from "../../components/button/Button";
import Icon from "../../components/icons";
import HomepageSlider from "./HomepageSlider";

const Homepage = () => {
  const { push } = useRouter();
  return (
    <div className="max-w-screen-lg mx-auto">
      <section className="flex items-center justify-between">
        <div className="flex-1 py-6 px-4">
          <div className="mt-10">
            <h2 className="text-5xl font-semibold color-dark-green mb-10">
              Pengen Nikah?
            </h2>
            {/* <div className="text-xl font-medium color-dark-green mb-6 leading-7">
              Buat undangan pernikahanmu di sini,
              <br />
              dapatkan beragam kelebihan
            </div> */}
            {/* <WordingSlide /> */}
            <h3 className="text-xl font-medium color-dark-green mb-8 leading-7">
              Undang orang-orang ke pernikahan Anda dengan cara yang menarik.
              <br />
              <br />
              <span>Undanganmu, semaumu.</span>
            </h3>
            <Button onClick={() => push("/register")}>
              Buat sekarang
              <Icon icon="ArrowRight" spaceLeft={2} />
            </Button>
          </div>
        </div>
        <div className="py-6 px-4 w-1/2">
          <HomepageSlider />
        </div>
      </section>
    </div>
  );
};

export default Homepage;
