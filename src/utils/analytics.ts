export function trackClickEvent(label: string) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "click", {
      event_category: "engagement",
      event_label: label,
    });
  }
} 