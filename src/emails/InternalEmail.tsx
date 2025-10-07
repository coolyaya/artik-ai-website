type Lead = { name: string; email: string; company?: string; notes?: string; timeslot?: string };

export default function InternalEmail(lead: Lead) {
  return (
    <div>
      <h3>New demo request</h3>
      <ul>
        <li>Name: {lead.name}</li>
        <li>Email: {lead.email}</li>
        {lead.company && <li>Company: {lead.company}</li>}
        {lead.timeslot && <li>Timeslot: {lead.timeslot}</li>}
      </ul>
      {lead.notes && <p>Notes: {lead.notes}</p>}
    </div>
  );
}
