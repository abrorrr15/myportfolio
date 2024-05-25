import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteContact } from "../services/apiContact";
import toast from "react-hot-toast";

export function useDeleteContact() {
  const queryClient = useQueryClient();
  const { mutate: deleteMessage, isLoading }: any = useMutation({
    mutationFn: deleteContact,
    onSuccess: () => {
      toast.success("Deleted");
      queryClient.invalidateQueries({queryKey: ["contact"]})
    },
    onError: (err) => {
      console.error(err.message);
      toast.error("Error");
    },
  });
  return { deleteMessage, isLoading };
}
