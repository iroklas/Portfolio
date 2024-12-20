import * as React from "react";
import { motion } from "framer-motion";
import { SVGProps } from "react";

interface LogoProps extends SVGProps<SVGSVGElement> {
  motionEnabled?: boolean;
}

const Logo = ({ motionEnabled = true, ...props }: LogoProps) => {
  const content = (
    <svg width={32} height={32} fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="#D90429"
        d="M12 21c4.418 0 8-3.356 8-7.496 0-3.741-2.035-6.666-3.438-8.06-.26-.258-.694-.144-.84.189-.748 1.69-2.304 4.123-4.293 4.123-1.232.165-3.112-.888-1.594-6.107.137-.47-.365-.848-.749-.534C6.905 4.905 4 8.511 4 13.504 4 17.644 7.582 21 12 21Z"
      />
    </svg>
  );

  return motionEnabled ? (
    <motion.div
      whileHover={{ scale: 1.2, transition: { duration: 0.1 } }}
      whileTap={{ scale: 0.9 }}
    >
      {content}
    </motion.div>
  ) : (
    content
  );
};

export default Logo;
