import { useDeleteContact } from "../components/useDeleteContact";
import { useContact } from "./../components/useContact";

const Messages = () => {
  const { deleteMessage, isLoading } = useDeleteContact();
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
            <button
              className="px-2 py-1 text-white ml-3 bg-red-700 rounded-lg hover:bg-red-400 duration-300"
              disabled={isLoading}
              onClick={() => deleteMessage(contact.id)}
            >
              delete ALL
            </button>
          </div>
          <br />

          <hr className="w-full ml-2" />
        </div>
      ))}

      <br />
    </ul>
  );
};

export default Messages;
