import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

// EmailJS configuration
export const EMAIL_SERVICE_ID = "service_1yp0s0p"; // Replace with your actual EmailJS service ID
export const EMAIL_TEMPLATE_ID = "template_98z1zbo"; // Replace with your actual EmailJS template ID
export const EMAIL_PUBLIC_KEY = "m5rN2OXaYfm5HvQ23"; // Replace with your actual EmailJS public key
