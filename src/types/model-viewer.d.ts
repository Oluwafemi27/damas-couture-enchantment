import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": DetailedHTMLProps<
        HTMLAttributes<HTMLElement> & {
          src?: string;
          alt?: string;
          poster?: string;
          "camera-controls"?: boolean;
          "auto-rotate"?: boolean;
          "auto-rotate-delay"?: string;
          "rotation-per-second"?: string;
          "shadow-intensity"?: string;
          exposure?: string;
          "environment-image"?: string;
          "interaction-prompt"?: string;
          ar?: boolean;
        },
        HTMLElement
      >;
    }
  }
}

export {};
