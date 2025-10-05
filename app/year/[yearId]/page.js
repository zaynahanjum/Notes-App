"use client";
import { Footer } from '../../components/Footer.js'; 
import { Header } from '../../components/Header.js'; 

import { useRouter } from "next/navigation";

export default function YearPage({ params }) {
  const router = useRouter();
  const { year } = params;

  const yearContent = {
    "1st": {
      emoji: "🎓",
      title: "First Year",
      description: "Welcome to your first year! This is where your journey begins.",
      subjects: ["Mathematics", "Physics", "Chemistry", "English", "Programming Basics","Mechanics"],
    },
    "2nd": {
      emoji: "📖",
      title: "Second Year",
      description: "Building on fundamentals and exploring new concepts.",
      subjects: ["Data Structures", "Electronics", "Mechanics", "Communication Skills", "Database Management"],
    },
    "3rd": {
      emoji: "🎯",
      title: "Third Year",
      description: "Diving deeper into specialized topics and practical applications.",
      subjects: ["Web Development", "Operating Systems", "Computer Networks", "Software Engineering", "Artificial Intelligence"],
    },
    "4th": {
      emoji: "🏆",
      title: "Fourth Year",
      description: "Final year with projects, internships, and career preparation.",
      subjects: ["Major Project", "Cloud Computing", "Cyber Security", "Machine Learning", "Entrepreneurship"],
    },
  };

  const content = yearContent[year] || yearContent["1st"];

  return (
    <div>
      <div>
      <Header/>
      </div>
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#f5f7fa",
      padding: "40px 20px",
    }}>
      <div style={{
        maxWidth: "800px",
        margin: "0 auto",
      }}>
        {/* Back Button */}
        <button
          onClick={() => router.push("/")}
          style={{
            backgroundColor: "#3498db",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "12px 24px",
            fontSize: "16px",
            cursor: "pointer",
            marginBottom: "30px",
          }}
         
        >
          ← Back to Home
        </button>

        {/* Year Card */}
        <div style={{
          backgroundColor: "white",
          borderRadius: "16px",
          padding: "40px",
      
        }}>
          <div style={{
            fontSize: "80px",
            textAlign: "center",
            marginBottom: "20px",
          }}>
            {content.emoji}
          </div>

          <h1 style={{
            fontSize: "36px",
            color: "#2c3e50",
            textAlign: "center",
            marginBottom: "15px",
          }}>
            {content.title}
          </h1>

          <p style={{
            fontSize: "18px",
            color: "#7f8c8d",
            textAlign: "center",
            marginBottom: "40px",
            lineHeight: "1.6",
          }}>
            {content.description}
          </p>

          {/* Subjects List */}
          <div>
            <h2 style={{
              fontSize: "24px",
              color: "#2c3e50",
              marginBottom: "20px",
            }}>
              📚 Subjects
            </h2>
            
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}>
              {content.subjects.map((subject, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: "#f8f9fa",
                    padding: "15px 20px",
                    borderRadius: "8px",
                    fontSize: "16px",
                    color: "#2c3e50",
                    border: "1px solid #e0e0e0",
                  }}
                >
                  {subject}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
    <Footer/>
    </div>
    
    </div>
  );
}