export const Button = ({ children, variant = "primary", isBold = false }) => {
    return (
        <button
                className={`flex m-auto items-center justify-center p-4 rounded-full bg-primary font-graphik text-xl leading-5 
            ${
                variant === "primary"
                    ? "bg-primary text-white"
                    : "bg-white text-primary"
            }
            ${isBold && "font-graphik-bold"}
      `}
        >
            {children}
        </button>
    );
};
