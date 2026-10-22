import { apiRequest } from "./client";

export interface Apartment {
  id: string;
  title: string;
  name: string;
  apartment_type: string;
  description: string;
  price: number;
  monthly_rent: number;
  agreement_fee: number;
  location: string;
  street: string;
  city: string;
  state: string;
  bedrooms: number;
  bathrooms: number;
  uploaded_images: string[];
  video?: string;
  video_url?: string;
  document_type?: string;
  document_file?: string;
  is_available: boolean;
  ownerName: string;
  ownerEmail: string;
  ownerPhone: string;
  createdAt: string;
}

// export interface ApartmentPayload {
//   name: string;
//   title: string;
//   apartment_type: string;
//   description: string;
//   price: number;
//   monthly_rent: number;
//   agreement_fee: number;
//   location: string;
//   street: string;
//   city: string;
//   state: string;
//   bedrooms: number;
//   bathrooms: number;
//   uploaded_images: File[];
//   video: File;
//   document_file: File;
//   document_type?: string;
//   is_available: boolean;
//   ownerName: string;
//   ownerEmail: string;
//   ownerPhone: string;
// }

function apartmentPath(path: string) {
  return `/apartments${path}`;
}

export function listApartments() {
  return apiRequest<Apartment[]>(apartmentPath(""));
}

export function createApartment(payload: FormData) {
  return apiRequest<Apartment>(apartmentPath(""), {
    method: "POST",
    body: payload,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    redirect: "follow",
  });
}

export function getApartment(id: string) {
  return apiRequest<Apartment>(apartmentPath(`/${encodeURIComponent(id)}`));
}

export function updateApartment(id: string, payload: Partial<FormData>) {
  return apiRequest<Apartment>(apartmentPath(`/${encodeURIComponent(id)}`), {
    method: "PATCH",
    body: JSON.stringify(payload),
  });
}

export function deleteApartment(id: string) {
  return apiRequest<{ message?: string }>(
    apartmentPath(`/${encodeURIComponent(id)}`),
    {
      method: "DELETE",
    },
  );
}

export function verifyApartment(id: string) {
  return apiRequest<Apartment>(
    apartmentPath(`/${encodeURIComponent(id)}/verify`),
    {
      method: "PATCH",
    },
  );
}
