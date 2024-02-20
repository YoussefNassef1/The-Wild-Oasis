import { useMutation } from "@tanstack/react-query";
import { signUp as apiSignup } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignUp() {
  const { isPending, mutate: signup } = useMutation({
    mutationFn: apiSignup,
    onSuccess: () => {
      toast.success("Account successfully created!");
    },
  });

  return { isPending, signup };
}
