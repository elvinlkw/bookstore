import { Book } from "@/types";

export interface FormDetails {
  title: string;
  price: number;
  category: string;
  description: string;
}

export interface BookDetailsProps {
  onClose?: () => void;
  onSubmit?: (formDetails: FormDetails) => void;
  book?: Book | null;
}
