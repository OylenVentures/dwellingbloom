"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRealEstateStore } from "../../store/useRealEstateStore";
import { X } from "lucide-react";

interface ListingFormProps {
  onClose: () => void;
}

interface FormInputs {
  name: string;
  apartment_type: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  street: string;
  city: string;
  state: string;
  monthly_rent: number;
  agreement_fee: number;
  document_type: string;
  is_available: boolean;
}

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : "Something went wrong";
}

export default function AddListingModal({ onClose }: ListingFormProps) {
  const addListing = useRealEstateStore((state) => state.addListing);
  const loading = useRealEstateStore((state) => state.loading);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [documentFile, setDocumentFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>({
    defaultValues: {
      bedrooms: 1,
      bathrooms: 1,
      apartment_type: "",
      is_available: false,
      document_type: "",
    },
  });

  const onSubmit = async (data: FormInputs) => {
    if (imageFiles.length < 1 || imageFiles.length > 5) {
      toast.error("Please upload between 1 and 5 images for the listing.");
      return;
    }

    if (!videoFile) {
      toast.error("Please upload exactly one video file for the listing.");
      return;
    }

    if (!documentFile) {
      toast.error("Please upload exactly one document file for the listing.");
      return;
    }

    const rentVal = Number(data.monthly_rent) || 0;

    const payload = new FormData();
    payload.append("name", data.name);
    payload.append("apartment_type", data.apartment_type);
    payload.append("description", data.description || "");
    payload.append("bedrooms", (Number(data.bedrooms) || 0).toString());
    payload.append("bathrooms", (Number(data.bathrooms) || 0).toString());
    payload.append("street", data.street || "");
    payload.append("city", data.city || "");
    payload.append("state", data.state || "");
    payload.append("monthly_rent", rentVal.toString());
    payload.append(
      "agreement_fee",
      (Number(data.agreement_fee) || 0).toString(),
    );
    payload.append("document_type", data.document_type || "");
    payload.append("document_file", documentFile);
    payload.append("is_available", data.is_available ? "true" : "false");
    payload.append("video", videoFile);
    imageFiles.forEach((file, index) => {
      payload.append(`uploaded_images[${index}]`, file);
    });

    try {
      const success = await addListing(payload);
      toast.success("Apartment listing created successfully!", {
        icon: "🏠",
        style: {
          border: "1px solid #22C55E",
          padding: "16px",
          color: "#1F2937",
        },
      });
      // reset();
      // setImageFiles([]);
      // setVideoFile(null);
      // setDocumentFile(null);
      // onClose();
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl border border-border md:p-8 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-text-secondary hover:text-text-primary rounded-full hover:bg-background transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-primary">Add New Apartment</h2>
          <p className="text-text-secondary text-sm">
            Fill in the detailed fields to publish your apartment for rent.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Main Info */}
          <div>
            <h3 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
              Apartment Specifications
            </h3>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-text-primary mb-1">
                  Apartment Name*
                </label>
                <input
                  type="text"
                  placeholder="e.g. Lavender Heights Apartment"
                  {...register("name", { required: "Name is required" })}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-primary/20 text-sm ${
                    errors.name ? "border-red-500" : "border-border"
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-primary mb-1">
                  Apartment Type*
                </label>
                <select
                  {...register("apartment_type", { required: true })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-hidden text-sm"
                >
                  <option value="">SELECT TYPE</option>
                  <option value="APARTMENT">Apartment</option>
                  <option value="CONDO">Condo</option>
                  <option value="LOFT">Loft</option>
                  <option value="DUPLEX">Duplex</option>
                  <option value="VILLA">Villa</option>
                  <option value="STUDIO">Studio Room</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-primary mb-1">
                  Availability*
                </label>
                <select
                  {...register("is_available")}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-hidden text-sm"
                >
                  <option value="true">Available Now</option>
                  <option value="false">Occupied / Hidden</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-primary mb-1">
                  Bedrooms*
                </label>
                <input
                  type="number"
                  {...register("bedrooms", { required: true, min: 0 })}
                  className="w-full px-4 py-2 border border-border rounded-lg text-sm focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-primary mb-1">
                  Bathrooms*
                </label>
                <input
                  type="number"
                  step="0.5"
                  {...register("bathrooms", { required: true, min: 0 })}
                  className="w-full px-4 py-2 border border-border rounded-lg text-sm focus:outline-hidden"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-text-primary mb-1">
                  Description
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your apartment layout, features, and target rent agreements..."
                  {...register("description")}
                  className="w-full px-4 py-2 border border-border rounded-lg text-sm focus:outline-hidden resize-none"
                />
              </div>
            </div>
          </div>

          {/* Location details */}
          <div className="border-t border-border pt-6">
            <h3 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
              Address & Location
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="sm:col-span-3">
                <label className="block text-xs font-semibold text-text-primary mb-1">
                  Street Address
                </label>
                <input
                  type="text"
                  placeholder="e.g. 15 Broad St"
                  {...register("street")}
                  className="w-full px-4 py-2 border border-border rounded-lg text-sm focus:outline-hidden"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-text-primary mb-1">
                  City*
                </label>
                <input
                  type="text"
                  placeholder="e.g. Portland"
                  {...register("city", { required: "City required" })}
                  className="w-full px-4 py-2 border border-border rounded-lg text-sm focus:outline-hidden"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-primary mb-1">
                  State*
                </label>
                <input
                  type="text"
                  placeholder="e.g. Oregon"
                  {...register("state", { required: "State required" })}
                  className="w-full px-4 py-2 border border-border rounded-lg text-sm focus:outline-hidden"
                />
              </div>
            </div>
          </div>

          {/* Pricing & Fees */}
          <div className="border-t border-border pt-6">
            <h3 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
              Financial Terms
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold text-text-primary mb-1">
                  Monthly Rent ($)*
                </label>
                <input
                  type="number"
                  {...register("monthly_rent", {
                    required: "Monthly rent required",
                    min: 1,
                  })}
                  className="w-full px-4 py-2 border border-border rounded-lg text-sm focus:outline-hidden"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-primary mb-1">
                  Agreement Fee ($)
                </label>
                <input
                  type="number"
                  {...register("agreement_fee")}
                  className="w-full px-4 py-2 border border-border rounded-lg text-sm focus:outline-hidden"
                />
              </div>
            </div>
          </div>

          {/* Media uploads (Image Arrays + Video Link) */}
          <div className="border-t border-border pt-6">
            <h3 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
              Media Uploads
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-text-primary mb-1">
                  Uploaded Images
                </label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) =>
                    setImageFiles(
                      e.target.files
                        ? Array.from(e.target.files).slice(0, 5)
                        : [],
                    )
                  }
                  className="px-3 py-2 border border-border rounded-lg text-sm focus:outline-hidden"
                />
                <p className="mt-1 text-[11px] text-text-secondary">
                  Select 1 to 5 images.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-primary mb-1">
                  Video Upload
                </label>
                <input
                  type="file"
                  accept="video/*"
                  onChange={(e) => setVideoFile(e.target.files?.[0] || null)}
                  className="px-3 py-2 border border-border rounded-lg text-sm focus:outline-hidden"
                />
                <p className="mt-1 text-[11px] text-text-secondary">
                  Upload exactly one video file.
                </p>
              </div>
            </div>
          </div>

          {/* Legal / Documents */}
          <div className="border-t border-border pt-6">
            <h3 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
              Legal Verification Documents
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold text-text-primary mb-1">
                  Document Type
                </label>
                <select
                  {...register("document_type")}
                  className="w-full px-4 py-2 border border-border rounded-lg text-sm focus:outline-hidden"
                >
                  <option value="">SELECT TYPE</option>
                  <option value="C_OF_O">Certificate of Occupancy</option>
                  <option value="REFERENCE_LETTER">Reference Letter</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-primary mb-1">
                  Upload Document File
                </label>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={(e) => setDocumentFile(e.target.files?.[0] || null)}
                  className="px-3 py-2 border border-border rounded-lg text-sm focus:outline-hidden"
                />
                <p className="mt-1 text-[11px] text-text-secondary">
                  Upload exactly one document file.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="flex gap-4 justify-end pt-4 border-t border-border">
            <button
              type="button"
              onClick={onClose}
              className="cursor-pointer px-5 py-2.5 text-sm font-medium text-text-secondary hover:text-text-primary border border-border rounded-lg hover:bg-background transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="cursor-pointer px-5 py-2.5 text-sm font-medium text-white bg-primary hover:bg-secondary rounded-lg transition-colors shadow-xs disabled:opacity-50"
            >
              {loading ? "Creating..." : "Submit Listing"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
