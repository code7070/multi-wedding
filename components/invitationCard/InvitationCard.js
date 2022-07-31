import Image from "next/image";

export default function InvitationCard(props) {
  const { invitationData: data = false } = props;
  const {
    groom,
    bride,
    event_address: addr,
    event_date: date,
    event_time: time,
  } = data;

  const click = () => {
    if (window.confirm("Kamu harus fakyu")) window.location.reload();
  };

  const groomNameTitle = `${groom.name} ${groom.title ? groom.title : ""}`;
  const brideNameTitle = `${groom.name} ${groom.title ? groom.title : ""}`;

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <Image
          src="https://placeimg.com/400/225/arch"
          alt="Shoes"
          width={400}
          height={225}
        />
      </figure>
      <div className="card-body">
        <h3 className="card-title">🤵 {groomNameTitle}</h3>
        <p>
          Putra dari: {groom.father} &amp; {groom.mother}
        </p>
        <br />
        <p>❤️ Menikah dengan:</p>
        <br />
        <h3 className="card-title">👰 {brideNameTitle}</h3>
        <p>
          Putri dari: {bride.father} &amp; {bride.mother}
        </p>
        <br />
        <p>
          <span className="text-xl">🗺️ Lokasi acara:</span>
          <br />
          <span>{addr}</span>
        </p>
        <br />
        <p>
          <span className="text-xl">📅 Tanggal acara:</span>
          <br />
          <span>{date}</span>
        </p>
        <div className="card-actions justify-end mt-10">
          <button className="btn btn-primary" type="button" onClick={click}>
            Open Invitation →
          </button>
        </div>
      </div>
    </div>
  );
}
