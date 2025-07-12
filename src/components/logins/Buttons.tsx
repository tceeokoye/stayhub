import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  children,
  onClick,
  disabled = false,
  isLoading = false,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles = clsx(
    "w-full h48 px-6 py-2 rounded-2xl font-geistMedium text-base flex items-center justify-center gap-2 transition-all",
    disabled ? "bg-807c79 cursor-not-allowed" : "bg-0f0f0f",
    "text-ffffff",
    className
  );

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={baseStyles}
    >
      {isLoading && (
        <span className="inline-block w133 h133 border border-eaf3fe border-t-transparent rounded-full animate-spin"></span>
      )}
      {children}
    </button>
  );
}
