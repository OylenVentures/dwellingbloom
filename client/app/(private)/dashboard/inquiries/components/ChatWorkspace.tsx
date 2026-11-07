"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Phone,
  Video,
  Send,
  Smile,
  Paperclip,
  Image as ImageIcon,
  Calendar,
  ExternalLink,
  Verified,
  Building2,
} from "lucide-react";
import toast from "react-hot-toast";
import Image from "next/image";
import { ChatInputFormData, chatInputSchema } from "@/app/common/validator";
import { useInquiriesStore } from "@/app/store/useInquiriesStore";

export const ChatWorkspace = () => {
  const { messages, sendMessage, isTourAccepted, acceptTour } =
    useInquiriesStore();

  const { register, handleSubmit, reset } = useForm<ChatInputFormData>({
    resolver: yupResolver(chatInputSchema),
  });

  const onSubmit = (data: ChatInputFormData) => {
    sendMessage(data.message || "");
    reset();

    // Simulate host response
    setTimeout(() => {
      useInquiriesStore.setState((state) => ({
        messages: [
          ...state.messages,
          {
            id: String(Date.now()),
            sender: "Sarah Jenkins",
            text: "Thanks Elena, noted! I have updated your application card on the left pane accordingly.",
            timestamp: "Just now",
          },
        ],
      }));
    }, 1200);
  };

  const handleQuickChip = (text: string) => {
    sendMessage(text);
    toast.success("Quick question sent to Sarah");

    setTimeout(() => {
      useInquiriesStore.setState((state) => ({
        messages: [
          ...state.messages,
          {
            id: String(Date.now()),
            sender: "Sarah Jenkins",
            text: "Great question! I'll email you the complete utility breakdown document shortly.",
            timestamp: "Just now",
          },
        ],
      }));
    }, 1200);
  };

  return (
    <div className="lg:col-span-8 xl:col-span-7 flex flex-col bg-surface-container-lowest rounded-xl shadow-md overflow-hidden min-h-195">
      {/* Top Chat Context & Host Header */}
      <div className="bg-surface-container-lowest p-space-md shadow-sm z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md">
            <div className="relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCb3LK2fbvM4-XmxTFlz7q9g3dkKLPNlNYgV2A7ll69TWvMIjZq7FdR7NsxOBRfw6kL0jSlIg1pEyox0z8dW8Xzn7kSVmWINFBv2jv40-veqz7KTMrmnM2SXUWXYGFyiHSOl3tnlZLP-rCM1DlBmfXNtePUNNoSWs3V_Q0XonulvAVYNGJECIFLQggeiQGZLnFORQKoBFKoJSRqGrcLGLCPGQwAqspQh7he-D_xPN1g"
                width={56}
                height={56}
                className="w-14 h-14 rounded-full object-cover shadow-sm"
                alt="Sarah Jenkins"
              />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-on-tertiary-container rounded-full ring-2 ring-surface-container-lowest" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="font-headline-md text-headline-md text-primary">
                  Sarah Jenkins
                </h2>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-label-caps text-label-caps bg-surface-container-high text-on-surface font-semibold">
                  <Verified className="w-3.5 h-3.5 text-primary" />
                  Verified Homeowner &amp; Property Host
                </span>
              </div>
              <div className="flex items-center gap-3 text-secondary text-body-sm font-body-sm mt-0.5">
                <span className="flex items-center gap-1 text-on-tertiary-container font-medium">
                  <Calendar className="w-3.5 h-3.5" /> Typically replies within
                  15 mins
                </span>
                <span>•</span>
                <span className="bg-secondary-fixed text-on-secondary-fixed px-2 py-0.5 rounded font-label-caps text-label-caps font-semibold">
                  Re: Cascadia Loft #12 ($3,150/mo)
                </span>
              </div>
            </div>
          </div>

          {/* Chat Control Actions */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => toast.success("Calling Sarah Jenkins...")}
              className="p-2.5 rounded-lg bg-surface-container text-secondary hover:text-primary hover:bg-surface-container-high transition-colors cursor-pointer"
              title="Phone Call"
            >
              <Phone className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() =>
                toast.success("Initializing video tour conference...")
              }
              className="p-2.5 rounded-lg bg-surface-container text-secondary hover:text-primary hover:bg-surface-container-high transition-colors cursor-pointer"
              title="Schedule Video Tour"
            >
              <Video className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() =>
                toast.success("Opening formal application submission flow")
              }
              className="px-space-md py-2 rounded-lg bg-primary-container text-on-primary hover:bg-primary font-label-lg text-label-lg transition-colors shadow-sm whitespace-nowrap cursor-pointer"
            >
              Submit Formal Application
            </button>
          </div>
        </div>

        {/* Property Context Banner Accordion Row */}
        <div className="mt-space-md p-space-sm bg-surface-container-low rounded-lg flex items-center justify-between">
          <div className="flex items-center gap-space-sm">
            <Building2 className="w-4 h-4 text-secondary" />
            <span className="font-body-sm text-body-sm text-on-surface">
              Unit #12 • 1,120 sq ft • 1 Bed • 1.5 Bath • In-unit Laundry •
              Rooftop Access
            </span>
          </div>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toast("Opening property monograph details");
            }}
            className="font-label-md text-label-md text-primary font-semibold hover:underline flex items-center gap-0.5"
          >
            View Details <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Chat Stream Body */}
      <div className="flex-1 p-space-lg overflow-y-auto space-y-space-md bg-surface-container-low/50">
        <div className="flex justify-center my-space-xs">
          <span className="font-label-caps text-label-caps text-secondary bg-surface-container-lowest px-space-md py-1 rounded-full shadow-sm">
            Today, October 24
          </span>
        </div>

        {messages.map((msg) => {
          const isMe = msg.sender === "You (Elena)";
          return (
            <div
              key={msg.id}
              className={`flex items-start gap-space-sm max-w-[82%] ${isMe ? "ml-auto flex-row-reverse" : ""}`}
            >
              {isMe ? (
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary font-label-md text-label-md font-bold shrink-0 mt-1">
                  ER
                </div>
              ) : (
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkh--0PpQQxw3xYkM1nnUYR3pOoA1A5eo80KFXtchf_HvFUrW6Gaiy_hkRha263FlPyJPAnITspj12pKDjJUEP363flMZNQV1QOpZ8sXgsAqGn-nB0eg5Ig_88w14A3_DJPAko5Wfcs6jsFMG9IuVWZlgpnRYq53MMZ6d5IOOWitT_hnzzh8ds59JH5X9VYyXBjBTJur3nz-KA-yDr-JvtCtNDXO6WjO0XL8YtXOqX"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full object-cover shrink-0 mt-1"
                  alt="Sarah Jenkins"
                />
              )}
              <div>
                <div
                  className={`flex items-baseline gap-2 mb-1 ${isMe ? "justify-end" : ""}`}
                >
                  {!isMe && (
                    <span className="font-label-md text-label-md text-on-surface font-bold">
                      {msg.sender}
                    </span>
                  )}
                  <span className="font-label-caps text-label-caps text-secondary">
                    {msg.timestamp}
                  </span>
                  {isMe && (
                    <span className="font-label-md text-label-md text-on-surface font-bold">
                      {msg.sender}
                    </span>
                  )}
                </div>
                <div
                  className={`p-space-md shadow-sm font-body-md text-body-md leading-relaxed ${
                    isMe
                      ? "rounded-[12px_12px_2px_12px] bg-primary text-on-primary"
                      : "rounded-[12px_12px_12px_2px] bg-surface-container-lowest text-on-surface"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            </div>
          );
        })}

        {/* Interactive In-Chat Invitation Card */}
        <div className="w-full max-w-md mx-auto my-space-sm">
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-md">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-space-sm">
                <div className="w-10 h-10 rounded-lg bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-label-caps text-label-caps text-secondary uppercase font-semibold">
                    Scheduled Appointment
                  </span>
                  <h4 className="font-headline-sm text-headline-sm text-primary">
                    Tour Invitation: Cascadia Loft #12
                  </h4>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full font-label-caps text-label-caps bg-surface-container-high text-on-tertiary-container font-bold">
                Confirmed Slot
              </span>
            </div>
            <div className="mt-space-sm py-2 px-space-sm bg-surface-container-low rounded-lg text-body-sm font-body-sm text-on-surface flex items-center gap-2">
              <Calendar className="w-4 h-4 text-secondary" />
              <span>
                Tomorrow at <strong>3:30 PM PDT</strong> (Private Walkthrough •
                45m)
              </span>
            </div>
            <div className="flex items-center gap-space-sm mt-space-md">
              <button
                type="button"
                disabled={isTourAccepted}
                onClick={() => {
                  acceptTour();
                  toast.success("Tour invitation accepted successfully!");
                  useInquiriesStore
                    .getState()
                    .sendMessage(
                      "I have accepted the tour for tomorrow at 3:30 PM PDT. Looking forward to it!",
                    );
                }}
                className={`flex-1 py-2 rounded-lg font-label-lg text-label-lg font-bold shadow-sm transition-colors text-center cursor-pointer ${
                  isTourAccepted
                    ? "bg-surface-container-high text-on-surface cursor-default"
                    : "bg-on-tertiary-container hover:bg-tertiary-fixed text-tertiary"
                }`}
              >
                {isTourAccepted
                  ? "Invitation Accepted ✓"
                  : "Accept Tour Invitation"}
              </button>
              <button
                type="button"
                onClick={() =>
                  toast("Reschedule prompt sent to host", { icon: "📅" })
                }
                className="px-space-md py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-secondary font-label-lg text-label-lg transition-colors cursor-pointer"
              >
                Reschedule
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Reply Action Chips */}
      <div className="px-space-md pt-space-xs pb-space-sm bg-surface-container-lowest flex items-center gap-2 overflow-x-auto">
        <span className="font-label-caps text-label-caps text-secondary uppercase shrink-0">
          Quick Ask:
        </span>
        <button
          type="button"
          onClick={() => handleQuickChip("What are the utility fees?")}
          className="px-3 py-1 rounded-full font-label-md text-label-md bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors whitespace-nowrap cursor-pointer"
        >
          What are the utility fees?
        </button>
        <button
          type="button"
          onClick={() => handleQuickChip("Is parking included?")}
          className="px-3 py-1 rounded-full font-label-md text-label-md bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors whitespace-nowrap cursor-pointer"
        >
          Is parking included?
        </button>
        <button
          type="button"
          onClick={() => handleQuickChip("Can I apply now?")}
          className="px-3 py-1 rounded-full font-label-md text-label-md bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors whitespace-nowrap cursor-pointer"
        >
          Can I apply now?
        </button>
      </div>

      {/* Rich Chat Input Area */}
      <div className="p-space-md bg-surface-container-lowest shadow-[0_-2px_8px_rgba(30,58,95,0.03)]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-space-xs"
        >
          <div className="relative w-full">
            <textarea
              {...register("message")}
              className="w-full bg-surface-container-low text-on-surface rounded-xl p-space-md pr-12 focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container outline-none transition-all resize-none font-body-md text-body-md placeholder:text-on-surface-variant"
              placeholder="Type your message to Sarah Jenkins..."
              rows={2}
            />
            <button
              type="button"
              onClick={() => toast("Emoji selector opened", { icon: "😊" })}
              className="absolute right-3 top-3 text-secondary hover:text-on-surface p-1 cursor-pointer"
              title="Insert Emoji"
            >
              <Smile className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => toast.success("Attach lease docs modal opened")}
                className="p-2 text-secondary hover:text-primary hover:bg-surface-container rounded-lg transition-colors cursor-pointer"
                title="Attach Lease Docs or Verification PDF"
              >
                <Paperclip className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() =>
                  toast.success("Upload photo/document modal opened")
                }
                className="p-2 text-secondary hover:text-primary hover:bg-surface-container rounded-lg transition-colors cursor-pointer"
                title="Upload Photos or Documents"
              >
                <ImageIcon className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => toast.success("Schedule proposal tool opened")}
                className="p-2 text-secondary hover:text-primary hover:bg-surface-container rounded-lg transition-colors cursor-pointer"
                title="Propose alternative schedule"
              >
                <Calendar className="w-5 h-5" />
              </button>
              <span className="hidden sm:inline text-label-caps font-label-caps text-secondary ml-2">
                Escrow-Encrypted Messaging
              </span>
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-space-lg py-2.5 rounded-lg bg-on-tertiary-container hover:bg-tertiary-fixed text-tertiary font-label-lg text-label-lg font-bold shadow-sm transition-all transform active:scale-95 cursor-pointer"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
