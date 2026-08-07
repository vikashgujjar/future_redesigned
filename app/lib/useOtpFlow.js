"use client";

import { useState } from "react";
import { swalFire } from "./swal";

const OTP_API = "https://enquiry.futuretouch.org/api";
const MAIL_API = "https://mail.futuretouch.org/api";
const SEND_TO = "info@futuretouch.in";
const COMPANY_NAME = "Future IT Touch Pvt. Ltd.";

// axios is only needed once a lead form is actually submitted — loading it
// lazily (and caching the import) keeps it out of every page's initial JS,
// since this hook is used by nearly every form site-wide.
let axiosPromise;
function getAxios() {
  if (!axiosPromise) axiosPromise = import("axios").then((m) => m.default);
  return axiosPromise;
}

/* Fires the lead-notification email directly — used both as the OTP flow's
   secondary notification below, and standalone by forms that skip OTP
   entirely (e.g. the newsletter signup, which has no phone to verify). */
export async function sendLeadNotification({ name, phone, email, service, message }) {
  const res = await fetch(`${MAIL_API}/send-message`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      company: COMPANY_NAME,
      company_name: COMPANY_NAME,
      name: name || "",
      phone: phone || "N/A",
      email: email || "N/A",
      serviceType: service || "",
      message: message || `Service Interested In: ${service || ""}`,
      mail_to: SEND_TO,
    }),
  });
  return res.ok;
}

/* Shared OTP flow for lead forms: send OTP by phone, verify it (which emails
   the lead server-side), and fire a secondary lead-notification email —
   no Firebase/reCAPTCHA involved. */
export default function useOtpFlow() {
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const sendOtp = async (phone) => {
    try {
      const res = await (await getAxios()).post(`${OTP_API}/send-otp`, { phone });
      if (!res.data.success) {
        swalFire({ icon: "error", title: "Failed to Send OTP", text: res.data.message || "Unable to send OTP. Please try again." });
        return false;
      }
      setShowOTP(true);
      swalFire({ icon: "success", title: "OTP Sent", text: "An OTP has been sent to your phone number." });
      return true;
    } catch (error) {
      swalFire({
        icon: "error",
        title: "Failed to Send OTP",
        text: error?.response?.data?.message || "Something went wrong.",
      });
      return false;
    }
  };

  const resendOtp = async (phone) => {
    try {
      const res = await (await getAxios()).post(`${OTP_API}/send-otp`, { phone });
      if (res.data.success) {
        swalFire({ icon: "success", title: "OTP Resent", text: "A new OTP has been sent to your phone number." });
      } else {
        swalFire({ icon: "error", title: "Error", text: res.data.message || "Failed to resend OTP. Please try again." });
      }
    } catch (error) {
      swalFire({
        icon: "error",
        title: "Error",
        text: error?.response?.data?.message || "Failed to resend OTP. Please check your network and try again.",
      });
    }
  };

  const verifyOtp = async ({ phone, subject, formData, lead, redirectTo = "/welcome", onSuccess }) => {
    setLoading(true);
    try {
      const res = await (await getAxios()).post(`${OTP_API}/verify-otp`, {
        phone,
        otp,
        sendto: SEND_TO,
        subject,
        formdata: formData,
      });
      if (!res.data.success) {
        swalFire({ icon: "error", title: "Failed to Verify OTP", text: res.data.message || "Verification failed, please try again." });
        return;
      }

      try {
        await sendLeadNotification({ ...lead, phone });
      } catch (mailError) {
        console.error("Failed to send lead notification email:", mailError);
      }

      swalFire({ icon: "success", title: "Verified", text: "OTP verified and message sent." }).then(() => {
        setShowOTP(false);
        setOtp("");
        onSuccess?.();
        if (redirectTo) window.location.href = redirectTo;
      });
    } catch (error) {
      swalFire({
        icon: "error",
        title: "Failed to Verify OTP",
        text: error?.response?.data?.message || "Something went wrong.",
      });
    } finally {
      setLoading(false);
    }
  };

  return { showOTP, setShowOTP, otp, setOtp, loading, sendOtp, resendOtp, verifyOtp };
}
