"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { MapPin, Building2, Bed, Search } from "lucide-react";
import { useListingStore } from "@/app/store/useListingStore";
import {
  SearchConsoleFormData,
  searchConsoleSchema,
} from "@/app/common/validator";

export const SearchConsole = () => {
  const { filters, setFilters } = useListingStore();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SearchConsoleFormData>({
    resolver: yupResolver(searchConsoleSchema),
    defaultValues: filters,
  });

  const currentPrice = watch("maxBudget", filters.maxBudget);

  const onSubmit = (data: SearchConsoleFormData) => {
    setFilters(data);
    toast.success(
      `Filter applied: ${data.location} up to $${data.maxBudget}/mo`,
    );
  };

  return (
    <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-lg relative z-20 -mt-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-md items-end"
      >
        {/* Location Input */}
        <div className="lg:col-span-4 flex flex-col gap-space-xs">
          <label className="text-[11px] font-bold text-secondary uppercase tracking-wider flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" /> Location or Neighborhood
          </label>
          <input
            {...register("location")}
            className="w-full px-space-md py-3 bg-surface rounded-lg text-primary placeholder-outline focus:outline-none focus:bg-surface-container-lowest transition-colors text-sm"
            placeholder="e.g. Pearl District, Seattle, Greenlake"
          />
          {errors.location && (
            <span className="text-xs text-red-500">
              {errors.location.message}
            </span>
          )}
        </div>

        {/* Dwelling Type */}
        <div className="lg:col-span-2 flex flex-col gap-space-xs">
          <label className="text-[11px] font-bold text-secondary uppercase tracking-wider flex items-center gap-1">
            <Building2 className="w-3.5 h-3.5" /> Dwelling Type
          </label>
          <select
            {...register("dwellingType")}
            className="w-full px-space-md py-3 bg-surface rounded-lg text-primary focus:outline-none focus:bg-surface-container-lowest transition-colors text-sm"
          >
            <option value="Apartment">Apartment</option>
            <option value="Condo">Condo</option>
            <option value="Townhouse">Townhouse</option>
            <option value="Single Family">Single Family</option>
          </select>
        </div>

        {/* Monthly Budget */}
        <div className="lg:col-span-3 flex flex-col gap-space-xs">
          <div className="flex justify-between items-center">
            <label className="text-[11px] font-bold text-secondary uppercase tracking-wider flex items-center gap-1">
              ₦ Monthly Budget
            </label>
            <span className="text-xs text-primary font-bold">
              ₦{Number(currentPrice).toLocaleString()}/mo
            </span>
          </div>
          <div className="py-2">
            <input
              type="range"
              min={50000}
              max={2000000}
              step={50}
              {...register("maxBudget")}
              className="w-full h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>
        </div>

        {/* Beds */}
        <div className="lg:col-span-1 flex flex-col gap-space-xs">
          <label className="text-[11px] font-bold text-secondary uppercase tracking-wider flex items-center gap-1">
            <Bed className="w-3.5 h-3.5" /> Beds
          </label>
          <select
            {...register("beds")}
            className="w-full px-space-sm py-3 bg-surface rounded-lg text-primary focus:outline-none focus:bg-surface-container-lowest transition-colors text-center text-sm"
          >
            <option value="Any">Any</option>
            <option value="1+">1+</option>
            <option value="2+">2+</option>
            <option value="3+">3+</option>
            <option value="4+">4+</option>
          </select>
        </div>

        {/* Submit */}
        <div className="lg:col-span-2">
          <button
            type="submit"
            className="w-full py-3 px-space-md bg-on-tertiary-container hover:bg-tertiary text-on-tertiary font-semibold text-sm rounded-lg shadow-md transition-all flex items-center justify-center gap-space-xs"
          >
            <Search className="w-4 h-4" />
            <span>Find Sanctuary</span>
          </button>
        </div>
      </form>
    </div>
  );
};
