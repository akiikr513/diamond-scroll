import React, { useState, useEffect, useRef } from "react";

const modalStyle = {
  position: "fixed",
  background: "rgba(40, 40, 40, 0.9)",
  border: "1px solid #555",
  borderRadius: "8px",
  color: "white",
  width: "400px",
  minHeight: "200px",
  zIndex: 101,
  boxShadow: "0 5px 15px rgba(0,0,0,0.5)",
  display: "flex",
  flexDirection: "column",
  fontFamily: "sans-serif",
};

const headerStyle = {
  padding: "10px 15px",
  cursor: "move",
  backgroundColor: "rgba(60, 60, 60, 0.8)",
  borderTopLeftRadius: "8px",
  borderTopRightRadius: "8px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const contentStyle = {
  padding: "15px",
  flexGrow: 1,
};

const closeButtonStyle = {
  cursor: "pointer",
  border: "none",
  background: "transparent",
  color: "white",
  fontSize: "18px",
};

export default function DraggableModal({ isOpen, onClose, title, children }) {
  const modalRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isOpen) {
      // Center the modal on open
      const x = window.innerWidth / 2 - 200; // 200 is half of modal width
      const y = window.innerHeight / 2 - 100; // 100 is half of min-height
      setPosition({ x, y });
    }
  }, [isOpen]);

  const handleMouseDown = (e) => {
    if (!modalRef.current) return;
    setIsDragging(true);
    const rect = modalRef.current.getBoundingClientRect();
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, offset]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      ref={modalRef}
      style={{ ...modalStyle, left: `${position.x}px`, top: `${position.y}px` }}
    >
      <div style={headerStyle} onMouseDown={handleMouseDown}>
        <span>{title}</span>
        <button style={closeButtonStyle} onClick={onClose}>
          &times;
        </button>
      </div>
      <div style={contentStyle}>{children}</div>
    </div>
  );
}
