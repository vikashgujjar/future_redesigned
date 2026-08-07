"use client";
import { useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

const PILL_W = 220;
const PILL_H = 50;

export default function Pill({ skill, pos, arenaW, arenaH, onDragEnd, zIdx, onDragStart }) {
  const x      = useMotionValue(pos.x);
  const y      = useMotionValue(pos.y);
  const rotate = useMotionValue(pos.rotate ?? 0);

  useEffect(() => {
    animate(x,      pos.x,           { duration: 0.22, ease: "easeOut" });
    animate(y,      pos.y,           { duration: 0.22, ease: "easeOut" });
    animate(rotate, pos.rotate ?? 0, { duration: 0.28, ease: "easeOut" });
  }, [pos.x, pos.y, pos.rotate]);

  return (
    <motion.div
      className="absolute cursor-grab active:cursor-grabbing select-none"
      style={{ width: PILL_W, height: PILL_H, x, y, rotate, zIndex: zIdx, top: 0, left: 0 }}
      drag
      dragMomentum={false}
      dragElastic={0}
      dragConstraints={{ left: 0, top: 48, right: arenaW - PILL_W, bottom: arenaH - PILL_H }}
      whileTap={{ scale: 1.10 }}
      whileHover={{ scale: 1.05 }}
      onDragStart={onDragStart}
      onDragEnd={() => onDragEnd(x.get(), y.get())}
    >
      {/* gradient border shell */}
      <div style={{
        background: `linear-gradient(135deg,${skill.fi},${skill.ti})`,
        borderRadius: 9999,
        padding: "2px",
        width: "100%",
        height: "100%",
        boxShadow: `0 0 24px ${skill.fi}55, 0 6px 26px rgba(0,0,0,.52)`,
      }}>
        {/* dark glass inner */}
        <div style={{
          background: "linear-gradient(135deg,rgba(8,12,28,.93),rgba(12,18,42,.91))",
          borderRadius: 9999,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "0 18px",
          backdropFilter: "blur(12px)",
        }}>
          <span className="sk-dot" style={{
            width: 8, height: 8, borderRadius: "50%", flexShrink: 0,
            background: `linear-gradient(135deg,${skill.fi},${skill.ti})`,
            boxShadow: `0 0 8px ${skill.fi}, 0 0 20px ${skill.fi}66`,
          }} />
          <span style={{
            fontFamily: "'Poppins',sans-serif",
            fontSize: 11.5,
            fontWeight: 600,
            whiteSpace: "nowrap",
            color: "rgba(255,255,255,.92)",
            letterSpacing: "0.015em",
          }}>
            {skill.label}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
