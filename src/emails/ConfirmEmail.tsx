type Props = { name: string; timeslot?: string };

export default function ConfirmEmail({ name, timeslot }: Props) {
  return (
    <div>
      <h2>Thanks, {name}.</h2>
      <p>Your demo request is confirmed.</p>
      {timeslot ? <p>Requested time: {new Date(timeslot).toLocaleString()}</p> : null}
      <p>Reply to this email if you need changes.</p>
    </div>
  );
}
