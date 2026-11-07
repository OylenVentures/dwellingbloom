"use client";
import { useDashboardStore } from "@/app/store/useDashboardStore";
import {
  ShieldCheck,
  ThumbsUp,
  MessageSquare,
  X,
  Calendar,
} from "lucide-react";
import toast from "react-hot-toast";

export const ApplicantVettingRail = () => {
  const { applicants, removeApplicant } = useDashboardStore();

  const handleApprove = (name: string, id: string) => {
    toast.success(`Lease agreement generated & sent to ${name}!`);
    removeApplicant(id);
  };

  const handleDecline = (name: string, id: string) => {
    toast(`Application for ${name} declined`, { icon: "🚫" });
    removeApplicant(id);
  };

  return (
    <div className="xl:col-span-4 flex flex-col gap-space-md">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-headline-md text-headline-md text-primary">
            Applicant Vetting
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Candidates ready for decision
          </p>
        </div>
        <span className="px-2 py-1 rounded-full bg-secondary-fixed text-primary font-label-caps text-label-caps font-bold">
          {applicants.length} Priority
        </span>
      </div>

      {applicants.map((applicant) => (
        <div
          key={applicant.id}
          className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm relative overflow-hidden"
        >
          {applicant.matchType === "Top Match" && (
            <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-tertiary-fixed-dim/20 to-transparent rounded-bl-full pointer-events-none" />
          )}

          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center font-serif text-primary text-headline-sm font-semibold">
                {applicant.initials}
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary">
                  {applicant.name}
                </h3>
                <p className="font-body-sm text-body-sm text-secondary">
                  Target: {applicant.targetProperty}
                </p>
              </div>
            </div>
            <span
              className={`inline-flex items-center px-2 py-0.5 rounded-full font-label-caps text-label-caps font-semibold ${
                applicant.matchType === "Top Match"
                  ? "bg-surface-container-low text-on-tertiary-container"
                  : "bg-surface-container text-secondary"
              }`}
            >
              {applicant.matchType}
            </span>
          </div>

          {/* Verification Metrics Grid */}
          <div className="grid grid-cols-3 gap-2 bg-surface-container-low p-space-sm rounded-lg text-center mt-1">
            <div>
              <span className="font-label-caps text-label-caps text-secondary block">
                Credit Score
              </span>
              <span className="font-headline-sm text-headline-sm text-primary font-serif">
                {applicant.creditScore}
              </span>
            </div>
            <div>
              <span className="font-label-caps text-label-caps text-secondary block">
                {applicant.stat2Label}
              </span>
              <span className="font-headline-sm text-headline-sm text-primary font-serif">
                {applicant.stat2Value}
              </span>
            </div>
            <div>
              <span className="font-label-caps text-label-caps text-secondary block">
                {applicant.stat3Label}
              </span>
              <span className="font-headline-sm text-headline-sm text-primary font-serif">
                {applicant.stat3Value}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
            <ShieldCheck className="w-4 h-4 text-on-tertiary-container shrink-0" />
            <span>Verified Employment: {applicant.employer}</span>
          </div>

          {applicant.matchType === "Top Match" ? (
            <div className="flex flex-col gap-2 mt-2">
              <button
                type="button"
                onClick={() => handleApprove(applicant.name, applicant.id)}
                className="w-full bg-primary hover:bg-primary-container text-on-primary py-2.5 rounded-lg font-label-lg text-label-lg transition-colors shadow-sm flex items-center justify-center gap-1.5"
              >
                <ThumbsUp className="w-4 h-4" /> Approve &amp; Send Lease
              </button>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => toast(`Chat initiated with ${applicant.name}`)}
                  className="bg-surface-container-low hover:bg-surface-container text-primary py-2 rounded-lg font-label-md text-label-md transition-colors flex items-center justify-center gap-1"
                >
                  <MessageSquare className="w-4 h-4" /> Message
                </button>
                <button
                  type="button"
                  onClick={() => handleDecline(applicant.name, applicant.id)}
                  className="bg-surface-container-low hover:bg-error-container text-on-surface-variant hover:text-on-error-container py-2 rounded-lg font-label-md text-label-md transition-colors flex items-center justify-center gap-1"
                >
                  <X className="w-4 h-4" /> Decline
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2 mt-2">
              <button
                type="button"
                onClick={() =>
                  toast.success(`Tour scheduled with ${applicant.name}`)
                }
                className="bg-primary hover:bg-primary-container text-on-primary py-2.5 rounded-lg font-label-md text-label-md transition-colors shadow-sm flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-4 h-4" /> Schedule Tour
              </button>
              <button
                type="button"
                onClick={() => toast(`Chat initiated with ${applicant.name}`)}
                className="bg-surface-container-low hover:bg-surface-container text-primary py-2.5 rounded-lg font-label-md text-label-md transition-colors flex items-center justify-center gap-1"
              >
                <MessageSquare className="w-4 h-4" /> Chat{" "}
                {applicant.name.split(" ")[0]}
              </button>
            </div>
          )}
        </div>
      ))}

      {/* Quick Maintenance Overview Dispatch Widget */}
      <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="font-label-caps text-label-caps uppercase text-secondary">
            Dispatch Alert
          </span>
          <span className="w-2 h-2 rounded-full bg-error" />
        </div>
        <div>
          <h4 className="font-headline-sm text-headline-sm text-primary">
            Sunlit Pearl Townhouse
          </h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            Assigned Vendor: Cascade Plumbing Co.
          </p>
        </div>
        <div className="flex items-center justify-between pt-1">
          <span className="font-label-md text-label-md text-secondary">
            Scheduled: Tomorrow, 10:00 AM
          </span>
          <button
            type="button"
            onClick={() =>
              toast("Opening vendor dispatch details", { icon: "🔧" })
            }
            className="text-primary hover:text-primary-container font-label-md text-label-md font-semibold underline decoration-secondary"
          >
            View Dispatch
          </button>
        </div>
      </div>
    </div>
  );
};
