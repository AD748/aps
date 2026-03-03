export function StatusBar() {
  return (
    <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-2xl px-6 py-3 flex flex-wrap justify-between text-xs text-gray-500 dark:text-gray-400">
      <span>Sub-agents: 0</span>
      <span>Parallel Executions: 2</span>
      <span>Operations: 1</span>
      <span className="text-severity-critical">Critical: 0</span>
      <span className="text-severity-high">High: 0</span>
      <span className="text-severity-medium">Medium: 0</span>
      <span className="text-severity-low">Low: 0</span>
    </div>
  );
}