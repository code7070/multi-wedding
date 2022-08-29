import { createClient } from "@supabase/supabase-js";
import { MetaHead } from "..";
import Alert from "../../components/alert/Alert";
import InvitationCard from "../../components/invitationCard/InvitationCard";
import Style from "../../styles/Invitation.module.scss";

export async function getServerSideProps(context) {
  const supabaseUrl = "https://wpwsqxujqddyfmmhfdde.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indwd3NxeHVqcWRkeWZtbWhmZGRlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1OTI3OTM3NCwiZXhwIjoxOTc0ODU1Mzc0fQ.lqZyqAnFfLOLJIYfIGXHQwdT10VpHYPiNIUFWyTKpdg";
  const supabase = createClient(supabaseUrl, supabaseKey);

  const host = context.req.headers.host;
  const parts = host.split(".");
  const subdomain = parts.shift();

  let ret = false;

  if (subdomain) {
    const { data, error } = await supabase
      .from("invitation")
      .select("*")
      .eq("url_prefix", subdomain);

    ret = data && data.length > 0 ? data[0] : "empty";
  }

  return {
    props: {
      invitationData: ret,
    },
  };
}

export default function Invitation(props) {
  const { invitationData: data = false } = props;
  console.log("Invitation: ", data);

  let view = <div className="text-xl">Loading...</div>;
  if (data && data === "empty")
    view = <Alert.Error text="Undangn tidak ditemukan" />;
  else if (data && Object.keys(data).length > 0)
    view = <InvitationCard {...props} />;

  const nameTitle =
    data && data !== "empty"
      ? `${data.groom.name} ${data.groom.title ? data.groom.title : ""}`
      : "Not Found";

  return (
    <div className={Style.container}>
      <MetaHead
        title={`Undangan - ${nameTitle}`}
        description={`Ini adalah undangan pernikahan ${nameTitle}`}
      />
      <main className={Style.main}>
        <Alert.Success text="YoohoOo~ Kamu ada di halaman undangan" />
        <br />
        <div className="px-10 py-4 flex justify-center w-9/12">{view}</div>
      </main>
    </div>
  );
}
