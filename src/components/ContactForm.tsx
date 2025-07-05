"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useRadixToast } from "./ui/toast-provider";
import { Mail, User, MessageSquare, Send, Loader2 } from "lucide-react";

interface ContactFormProps {
  onSuccess?: () => void;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactForm = ({ onSuccess }: ContactFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const showToast = useRadixToast();

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        showToast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. We&#39;ll get back to you soon.",
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        onSuccess && onSuccess();
      } else {
        showToast({
          title: "Error",
          description: data.error || "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      showToast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label
            htmlFor="name"
            className="flex items-center gap-2 text-sm font-medium"
          >
            <User className="w-4 h-4" />
            Name *
          </Label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange("name", e.target.value)
            }
            placeholder="Your full name"
            className={`transition-all duration-200 ${
              errors.name
                ? "border-red-500 focus:border-red-500"
                : "focus:border-blue-500"
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1 text-left">{errors.name}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label
            htmlFor="email"
            className="flex items-center gap-2 text-sm font-medium"
          >
            <Mail className="w-4 h-4" />
            Email *
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange("email", e.target.value)
            }
            placeholder="your.email@example.com"
            className={`transition-all duration-200 ${
              errors.email
                ? "border-red-500 focus:border-red-500"
                : "focus:border-blue-500"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1 text-left">{errors.email}</p>
          )}
        </div>
      </div>
      <div className="space-y-2">
        <Label
          htmlFor="subject"
          className="flex items-center gap-2 text-sm font-medium"
        >
          <MessageSquare className="w-4 h-4" />
          Subject *
        </Label>
        <Input
          id="subject"
          type="text"
          value={formData.subject}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange("subject", e.target.value)
          }
          placeholder="What&#39;s this about?"
          className={`transition-all duration-200 ${
            errors.subject
              ? "border-red-500 focus:border-red-500"
              : "focus:border-blue-500"
          }`}
        />
        {errors.subject && (
          <p className="text-red-500 text-xs mt-1 text-left">{errors.subject}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label
          htmlFor="message"
          className="flex items-center gap-2 text-sm font-medium"
        >
          <MessageSquare className="w-4 h-4" />
          Message *
        </Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            handleInputChange("message", e.target.value)
          }
          placeholder="Tell us more about your inquiry..."
          className={`min-h-[120px] resize-none transition-all duration-200 ${
            errors.message
              ? "border-red-500 focus:border-red-500"
              : "focus:border-blue-500"
          }`}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1 text-left">{errors.message}</p>
        )}
      </div>
      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-[1.02]"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Sending Message...
          </>
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </>
        )}
      </Button>
      <p className="text-xs text-gray-500 text-center">
        * Required fields. I&#39;ll respond within 24 hours.
      </p>
    </form>
  );
};
