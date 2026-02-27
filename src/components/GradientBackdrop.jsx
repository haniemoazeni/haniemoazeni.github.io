export function GradientBackdrop() {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10">
      <div className="absolute -top-24 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-sky-300 blur-[120px] opacity-20 dark:opacity-10" />
    </div>
  );
}
