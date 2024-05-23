
import { useContact } from "./../components/useContact";

const Messages = () => {
  const { data: contacts, error } = useContact();
  console.log(contacts);

  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul className="bg-gray-0 h-screen">
      <h2 className="font-bold text-red-600">Messages:</h2>
      <br />
      {contacts?.map((contact) => (
        <div className="text-black ml-4 grid grid-cols-1" key={contact.id}>
          <div>
            <b>Name:</b> {contact.name}
          </div>
          <div>
            <b>Email:</b> {contact.email}
          </div>
          <div>
            <b>Phone:</b> {contact.phone}
          </div>
          <div>
            <b>Message:</b> {contact.message}
          </div>
          <br />
          <hr className="w-full ml-2" />
          <br />
        </div>
      ))}
    </ul>
  );
};

export default Messages;
