import { useQuery } from "@tanstack/react-query";
import { getContact } from "../services/apiContact";


export function useContact() {
  const { data, error } = useQuery({
    queryKey: ["contact"],
    queryFn: getContact,
  });

  return { data, error };
}