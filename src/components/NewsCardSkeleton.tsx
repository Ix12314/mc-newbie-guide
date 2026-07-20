export default function NewsCardSkeleton() {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-4 border-b border-zinc-100 py-6 animate-pulse dark:border-zinc-800 sm:grid-cols-[4rem_1fr] sm:gap-7">
      <div className="h-9 w-9 rounded bg-zinc-100 dark:bg-zinc-800" />
      <div className="min-w-0">
        <div className="h-5 w-3/4 rounded bg-zinc-100 dark:bg-zinc-800" />
        <div className="mt-2 h-3 w-1/4 rounded bg-zinc-100 dark:bg-zinc-800" />
        <div className="mt-3 flex gap-4">
          <div className="h-3 w-12 rounded bg-zinc-100 dark:bg-zinc-800" />
          <div className="h-3 w-16 rounded bg-zinc-100 dark:bg-zinc-800" />
          <div className="h-3 w-12 rounded bg-zinc-100 dark:bg-zinc-800" />
        </div>
      </div>
    </div>
  );
}
