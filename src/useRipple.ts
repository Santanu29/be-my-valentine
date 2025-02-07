import { useEffect } from "react";

const useRipple = (ref: React.RefObject<HTMLButtonElement | null>) => {
  useEffect(() => {
    if (ref.current) {
      const button = ref.current;

      const handleClick = (e: MouseEvent) => {
        const ripple = document.createElement("span");
        ripple.classList.add("ripple-effect");

        // Calculate the position of the click
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Set the position of the ripple
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        // Append the ripple to the button
        button.appendChild(ripple);

        // Remove the ripple after the animation ends
        ripple.addEventListener("animationend", () => {
          ripple.remove();
        });
      };

      button.addEventListener("click", handleClick);

      // Cleanup the event listener
      return () => {
        button.removeEventListener("click", handleClick);
      };
    }
  }, [ref]);
};

export default useRipple;
