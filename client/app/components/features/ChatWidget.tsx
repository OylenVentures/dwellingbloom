"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Send, Lock, CheckCheck } from "lucide-react";
import { ChatInputFormData, chatInputSchema } from "@/app/common/validator";
import Image from "next/image";
import { useState } from "react";

interface Message {
  id: string;
  sender: string;
  role: "renter" | "owner";
  text: string;
  timestamp: string;
}

export const ChatWidget = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const { register, handleSubmit, reset } = useForm<ChatInputFormData>({
    resolver: yupResolver(chatInputSchema),
  });

  const onSubmit = (data: ChatInputFormData) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: Date.now().toString(),
        sender: "You",
        role: "renter",
        text: data.message ?? "",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
    reset();
  };

  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-lg p-space-md mt-space-sm flex flex-col gap-space-md">
      <div className="flex items-center justify-between p-space-sm bg-surface rounded-lg">
        <div className="flex items-center gap-space-sm">
          <div className="w-10 h-10 rounded-lg bg-surface-container overflow-hidden">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSejjTXOdOz61FIRyh3lyqVVHVO1SD42MS9mhu6bptUlOZKD5YlkKU0PS1jJsmOyyAa4V--hLhXca8kUE0ow9DVR4CAs1b16ftk_ZZAcSvcycJVTMXVBGjxYDs4pQgMCXV2gtwIMR4hPeU3tymabvv_jrlXiZLEt3Uou_lQrj_JU4wMIyd9nXEeo7zLY5Ysw-qov5Fj11snbwymBHJ90LHVj22cTmvP8fAMl5NjHnE"
              width={300}
              height={300}
              className="w-full h-full object-cover"
              alt="Listing preview"
            />
          </div>
          <div>
            <div className="text-xs font-semibold text-primary">
              The Atrium Loft
            </div>
            <div className="text-xs text-secondary">
              ₦700,000/mo • Ketu Lagos
            </div>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 text-[11px] text-on-tertiary-container bg-surface-container-highest px-2 py-1 rounded-full font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container animate-pulse" />
          Active Inquiry
        </span>
      </div>

      <div className="flex flex-col gap-space-sm py-space-xs text-xs max-h-80 overflow-y-auto">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-space-xs max-w-[85%] ${
              msg.role === "renter" ? "self-end justify-end" : ""
            }`}
          >
            {msg.role === "owner" && (
              <div className="w-7 h-7 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold text-[10px] shrink-0">
                CR
              </div>
            )}
            <div
              className={`p-space-sm rounded-lg shadow-sm ${
                msg.role === "renter"
                  ? "bg-primary text-on-primary"
                  : "bg-surface text-on-surface"
              }`}
            >
              {msg.role === "owner" && (
                <div className="font-semibold text-primary mb-0.5">
                  {msg.sender}{" "}
                  <span className="text-secondary font-normal text-xs">
                    • Owner
                  </span>
                </div>
              )}
              <p>{msg.text}</p>
              <div className="flex items-center justify-end gap-1 mt-1 text-[10px]">
                <span
                  className={
                    msg.role === "renter"
                      ? "text-on-primary-container"
                      : "text-secondary"
                  }
                >
                  {msg.timestamp}
                </span>
                {msg.role === "renter" && (
                  <CheckCheck className="w-3 h-3 text-on-primary-container" />
                )}
              </div>
            </div>
          </div>
        ))}

        <div className="flex items-center justify-center my-space-xs">
          <div className="inline-flex items-center gap-1.5 px-space-md py-1 bg-surface-container text-secondary rounded-full text-[11px] font-bold">
            <Lock className="w-3 h-3 text-on-tertiary-container" />
            Application Vault Secured • Zero spam disclosure
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center gap-space-xs p-1 bg-surface rounded-lg"
      >
        <input
          {...register("message")}
          className="flex-1 bg-transparent px-space-sm py-2 text-xs text-primary focus:outline-none"
          placeholder="Ask Claire anything about the lease terms..."
          type="text"
        />
        <button
          type="submit"
          aria-label="Send message"
          className="p-2 bg-on-tertiary-container text-on-tertiary rounded-lg hover:bg-tertiary transition-colors"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
