export function SocialButton({
  variant,
}: {
  variant: "apple" | "google" | "meta";
}) {
  const map = {
    apple: "bg-black text-white",
    google: "bg-white text-black border border-gray-300",
    meta: "bg-blue-600 text-white",
  };

  const labels = {
    apple: "Apple",
    google: "Google",
    meta: "Meta",
  };

  return (
    <button
      className={`flex-1 py-2 rounded-xl text-sm font-medium transition hover:opacity-90 ${map[variant]}`}
    >
      {labels[variant]}
    </button>
  );
}