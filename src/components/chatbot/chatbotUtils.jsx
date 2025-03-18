import { faqData } from "../FAQ/FAQData.js";
import { packages } from "../tour/packageData.js";

export const getBotResponse = (input) => {
  const lowerInput = input.toLowerCase().trim();
  console.log("User Input:", lowerInput);

  // 1. Greeting Response
  if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
    return "Hello! How can I assist you with dirtbike rentals or tours today?";
  }

  // 2. Package Matching
  const matchedPackage = packages.find((pkg) => {
    // Split package title into keywords (ignoring very short words)
    const keywords = pkg.title.toLowerCase().split(" ").filter((word) => word.length > 2);
    // Return true if any keyword from the title is found or if the package ID is mentioned
    return keywords.some((keyword) => lowerInput.includes(keyword)) || lowerInput.includes(pkg.id.toString());
  });

  if (matchedPackage) {
    // If the user asks for details, itinerary, or more info, return full details
    if (
      lowerInput.includes("detail") ||
      lowerInput.includes("itinerary") ||
      lowerInput.includes("more info")
    ) {
      return `Detailed info for "${matchedPackage.title}":\n\n${matchedPackage.details}`;
    } else {
      // Otherwise, return a quick summary using the package's description
      return `Here's a quick summary of "${matchedPackage.title}":\n\n${matchedPackage.description}\n\nFor more details, try asking: "Show me the details of ${matchedPackage.title}"`;
    }
  }

  // 3. FAQ Matching (using keyword matching)
  const matchedFAQ = faqData.find((faq) => {
    const keywords = faq.question.toLowerCase().split(" ").filter((word) => word.length > 3);
    return keywords.some((keyword) => lowerInput.includes(keyword));
  });

  if (matchedFAQ) {
    return matchedFAQ.answer;
  }

  // 4. Default fallback response
  return "Sorry, I couldn't find the information you're looking for. Please contact our team for more details.";
};

console.log("FAQ Data Loaded:", faqData);
console.log("Package Data Loaded:", packages);
