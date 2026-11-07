"use client";
import { Property } from "@/app/store/useDashboardStore";
import {
  User,
  Calendar,
  Eye,
  BellRing,
  Wrench,
  Hourglass,
  PenTool,
  FileText,
  MessageSquare,
  Inbox,
  Edit,
  Construction,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import toast from "react-hot-toast";

export const PropertyCard: FC<Property> = ({
  name,
  status,
  statusLabel,
  statusColor,
  location,
  specs,
  price,
  image,
  imageAlt,
  primaryDetail,
  secondaryDetail,
  tenantName,
  inquiriesCount,
  ticketCount,
}) => {
  return (
    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
      <div className="flex items-start gap-space-md">
        <Image
          src={image}
          width={96}
          height={96}
          className="w-24 h-24 rounded-lg object-cover shrink-0"
          alt={imageAlt}
        />
        <div>
          <div className="flex items-center gap-space-xs flex-wrap">
            <h3 className="font-headline-sm text-headline-sm text-primary">
              {name}
            </h3>
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full font-label-caps text-label-caps ${statusColor}`}
            >
              {statusLabel}
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            {location} • {specs}
          </p>
          <div className="flex items-center gap-space-md mt-3 flex-wrap">
            <div className="flex items-center gap-1.5 text-primary">
              {primaryDetail.icon === "user" && (
                <User className="w-4 h-4 text-secondary" />
              )}
              {primaryDetail.icon === "eye" && (
                <Eye className="w-4 h-4 text-secondary" />
              )}
              {primaryDetail.icon === "hourglass" && (
                <Hourglass className="w-4 h-4 text-secondary" />
              )}
              <span className="font-label-md text-label-md font-medium">
                {primaryDetail.label}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-on-surface-variant">
              {secondaryDetail.icon === "calendar" && (
                <Calendar className="w-4 h-4 text-secondary" />
              )}
              {secondaryDetail.icon === "bellRing" && (
                <BellRing className="w-4 h-4 text-on-tertiary-container" />
              )}
              {secondaryDetail.icon === "wrench" && (
                <Wrench className="w-4 h-4 text-error" />
              )}
              {secondaryDetail.icon === "penTool" && (
                <PenTool className="w-4 h-4 text-secondary" />
              )}
              <span className="font-body-sm text-body-sm">
                {secondaryDetail.label}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex flex-col items-start md:items-end justify-between w-full md:w-auto pt-2 md:pt-0">
        <div className="text-left md:text-right mb-3">
          <span className="font-headline-sm text-headline-sm text-primary font-serif">
            ${price.toLocaleString()}
          </span>
          <span className="font-label-md text-label-md text-on-surface-variant">
            {" "}
            / month
          </span>
        </div>
        <div className="flex items-center gap-2">
          {status === "active" && (
            <>
              <button
                type="button"
                onClick={() =>
                  toast(`Opening lease for ${name}`, { icon: "📄" })
                }
                className="bg-surface-container-low hover:bg-surface-container text-primary font-label-md text-label-md px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1"
              >
                <FileText className="w-4 h-4" /> View Lease
              </button>
              <button
                type="button"
                onClick={() => toast(`Chat opened with ${tenantName}`)}
                className="bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" /> Chat Tenant
              </button>
            </>
          )}

          {status === "vacant" && (
            <>
              <button
                type="button"
                onClick={() =>
                  toast.success(`Reviewing ${inquiriesCount} inquiries`)
                }
                className="bg-secondary text-on-secondary hover:bg-primary transition-colors font-label-md text-label-md px-3.5 py-2 rounded-lg flex items-center gap-1 shadow-sm"
              >
                <Inbox className="w-4 h-4" /> Review Inquiries ({inquiriesCount}
                )
              </button>
              <button
                type="button"
                onClick={() =>
                  toast(`Editing listing for ${name}`, { icon: "✏️" })
                }
                className="bg-surface-container-low hover:bg-surface-container text-primary font-label-md text-label-md px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1"
              >
                <Edit className="w-4 h-4" /> Edit Listing
              </button>
            </>
          )}

          {status === "maintenance" && (
            <>
              <button
                type="button"
                onClick={() =>
                  toast.error(`Reviewing ${ticketCount} maintenance ticket`)
                }
                className="bg-surface-container-low hover:bg-surface-container text-error font-label-md text-label-md px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1"
              >
                <Construction className="w-4 h-4" /> Tickets ({ticketCount})
              </button>
              <button
                type="button"
                onClick={() => toast(`Chat opened with ${tenantName}`)}
                className="bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" /> Chat Marcus
              </button>
            </>
          )}

          {status === "offer" && (
            <button
              type="button"
              onClick={() => toast.success(`Reviewing contract for ${name}`)}
              className="bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md px-4 py-2 rounded-lg transition-colors flex items-center gap-1 shadow-sm"
            >
              <CheckCircle className="w-4 h-4" /> Review Contract
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
