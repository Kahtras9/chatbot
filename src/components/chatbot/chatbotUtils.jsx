import { faqData } from "../FAQ/FAQData.js";
import { packages } from "../tour/packageData.js";

export const getBotResponse = (input) => {
  const lowerInput = input.toLowerCase();

  console.log("User Input:", lowerInput);

  // Greeting Responses
  if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
    return "Hello! How can I assist you with dirtbike rentals or tours today?";
  }

  // Check in Tour Packages using flexible matching
  const packageInfo = packages.find((pkg) => {
    console.log("Checking package title:", pkg.title.toLowerCase());
    return (
      lowerInput.includes(pkg.title.toLowerCase()) ||
      lowerInput.includes(pkg.title.split(" ")[0].toLowerCase()) || 
      lowerInput.includes(pkg.id.toString())
    );
  });

  if (packageInfo) {
    console.log("Matched Package:", packageInfo.title);
    return `Our ${packageInfo.title} package includes: ${packageInfo.details}`;
  }

  // FAQs Matching
  const faq = faqData.find((faq) => {
    console.log("Checking FAQ:", faq.question.toLowerCase());
    return lowerInput.includes(faq.question.toLowerCase());
  });

  if (faq) {
    console.log("Matched FAQ:", faq.question);
    return faq.answer;
  }

  console.log("No match found.");
  return "Sorry, I couldn't find the information you're looking for. Please contact our team for more details.";
};

console.log("FAQs Loaded:", faqData);
console.log("Packages Loaded:", packages);
