import React from "react";
function Footer() {
    const year =new Date().getFullYear();
  return (
    <>
    <p className="text-center font-semibold text-2xl float- bg-slate-600">&copy;{year} My website 2025</p>
    </>
  )
}

export default Footer