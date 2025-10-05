"use client";
import { useRouter } from "next/navigation";

export function YearCard({ year, description }) {
  const router = useRouter();
  
  const handleClick = () => {
    router.push(`/year/${year}`);
  };
  
  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: "white",
        borderRadius: "12px",
        padding: "30px",
        cursor: "pointer",
        border: "2px solid #e0e0e0",
        flex: "1"
      }}
     
    >
      <div
        style={{
          fontSize: "48px",
          marginBottom: "15px",
          textAlign: "center",
        }}
      >
        {year === "1st" && "🎓"}
        {year === "2nd" && "📖"}
        {year === "3rd" && "🎯"}
        {year === "4th" && "🏆"}
      </div>
      <h3
        style={{
          fontSize: "24px",
          color: "#2c3e50",
          marginBottom: "10px",
          textAlign: "center",
        }}
      >
        {year} Year
      </h3>
      <p
        style={{
          color: "#0e0f0fff",
          textAlign: "center",
          lineHeight: "1.6",
        }}
      >
        {description}
      </p>
    </div>
  );
}