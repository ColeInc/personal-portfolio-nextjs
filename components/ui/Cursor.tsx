import React, { ReactElement, useState, useRef, createContext } from "react";
import { useFollowPointer } from "../../hooks/use-follow-pointer";
import { motion } from "framer-motion";

export const CursorContext = createContext([]);

const Cursor: React.FC<{ children: ReactElement }> = props => {
    // State for setting custom mouse cursor to active (when it hovers over buttons/links etc.
    const [cursor, setCursor] = useState(false);

    // useRef and useFollowPointer are for listening to user's mouse movements and allowing framer motion element to follow it (making use of use-follow-pointer hook):
    const ref = useRef(null);
    const { clientX, clientY } = useFollowPointer();

    // Give cursor different animations if in "Active" state:
    const cursorVariant = cursor
        ? {
              visible: {
                  x: clientX - 32,
                  y: clientY - 32,
                  scale: 1.3,
                  //   backgroundColor: "var(--secondary-color)",
                  //   opacity: 0.3,
              },
              visibleInner: { scale: 2, opacity: 0.5 },
          }
        : {
              visible: { x: clientX - 32, y: clientY - 32 },
          };

    return (
        <CursorContext.Provider value={[cursor, setCursor]}>
            {props.children}

            <div className="invisible xl:visible fixed top-0 bottom-0 left-0 right-0 z-50 pointer-events-none">
                <motion.div
                    className="w-[64px] h-[64px] rounded-full border border-secondary-color invert flex justify-center items-center"
                    ref={ref}
                    variants={cursorVariant}
                    animate="visible"
                    transition={{
                        type: "spring",
                        damping: 50,
                        stiffness: 400,
                        restDelta: 0.001,
                    }}
                    layout
                >
                    <motion.div
                        className="w-[7px] h-[7px] rounded-full bg-secondary-color"
                        variants={cursorVariant}
                        animate="visibleInner"
                    />
                </motion.div>
            </div>
        </CursorContext.Provider>
    );
};

export default Cursor;
