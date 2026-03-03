type Status = "Completed" | "Scheduled" | "Failed";

export function StatusChip({ status }: { status: Status }) {
  const map = {
    Completed: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
    Scheduled: "bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
    Failed: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
  };

  return (
    <span className={`px-3 py-1 text-xs rounded-md ${map[status]}`}>
      {status}
    </span>
  );
}