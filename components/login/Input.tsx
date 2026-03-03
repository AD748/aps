export function Input({
  label,
  type = "text",
}: {
  label: string;
  type?: string;
}) {
  return (
    <div className="space-y-1">
      <input
        type={type}
        placeholder={label}
        className="w-full px-4 py-3 rounded-xl text-black border focus:border-accent focus:ring-0 outline-none transition"
      />
    </div>
  );
}