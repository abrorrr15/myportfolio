import supabase from "./supabase";

type Contact = {
  id: number;
  name: string;
  phone: string;
  email: string;
  message: string;
};

// Function to get contacts
export async function getContact(): Promise<Contact[]> {
  const { data, error } = await supabase
    .from("contact")  // Provide the correct type argument for the table
    .select("*");

  if (error) {
    console.error("Error fetching contacts:", error);
    throw new Error("Contacts could not be loaded");
  }

  console.log("Fetched contacts:", data);

  return data || [];
}

// Function to create a new contact
export async function createContact(newContact: {}): Promise<Contact> {
  
  const { data, error } = await supabase
    .from("contact")  // Provide the correct type argument for the table
    .insert([newContact])      // Ensure we pass an array
    .select()
    .single();                 // Get a single result

  if (error) {
    console.error("Error creating contact:", error);
    throw new Error("Contact could not be created");
  }

  console.log("Created contact:", data);

  return data as Contact;
}
