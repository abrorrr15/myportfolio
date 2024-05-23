import { useMutation } from "@tanstack/react-query";
import { createContact } from "../services/apiContact";
import toast from "react-hot-toast";

export function useCreateContact() {
  const { mutate: createData } = useMutation({
    mutationFn: createContact,

    onSuccess: () => {
      toast.success("Successfully sent!")
    },
    onError: () => {
      toast.error("Error")
    }
  });

  return { createData }
}
