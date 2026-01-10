import { WEB3FORMS_ACCESS_KEY } from "@/lib/constants";

export async function submitToWeb3Forms(data: any) {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        ...data,
      }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Web3Forms submission error:", error);
    return { success: false, message: "Something went wrong. Please try again." };
  }
}
