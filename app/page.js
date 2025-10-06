'use client';

import { useRouter } from 'next/navigation';
import { Footer } from './/components/Footer.js';
import { Header } from './/components/Header.js';
import { YearCard } from './/components/YearCard.js';

function Year() {

  const years = [
    {
      year: "1st",
      description: "Foundation courses and basic concepts"
    },
    {
      year: "2nd",
      description: "Core subjects and practical knowledge"
    },
    {
      year: "3rd",
      description: "Advanced topics and specialization"
    },
    {
      year: "4th",
      description: "Projects and professional preparation"
    }
  ];

  const handleYearClick = (year) => {

    router.push(`/year/${year}`);
  };
  return (
    <div>
      <div style={{
        display: "grid",
        gap: "30px"
      }}>
        <section style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 20px"
        }}>
          <h2 style={{
            fontSize: "32px",
            color: "#2c3e50",
            textAlign: "center",
            marginBottom: "40px",
            fontWeight: "bold"
          }}>
            Select Your Year
          </h2>
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              padding: "20px",
              flexWrap: "wrap"
            }}
          >
            {years.map((item) => (
              <YearCard
                key={item.year}
                year={item.year}
                description={item.description}
                onClick={() => handleYearClick(item.year)}
              />
            ))}
          </div>
        </section>

      </div>


    </div>
  );
}

export default function App() {
  const router = useRouter();


  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#f5f6fa"
    }}>
      <Header />

      <div style={{ flex: 1 }}>

        <section style={{
          backgroundColor: "#45b455ff",
          color: "white",
          padding: "60px 20px",
          textAlign: "center"
        }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{
              fontSize: "36px",
              marginBottom: "20px",
              fontWeight: "bold"
            }}>
              Not finding notes?
            </h2>
            <p style={{
              fontSize: "18px",
              lineHeight: "1.8",
              marginBottom: "30px"
            }}>
              A collaborative platform where students and teachers can share, view, and upload academic notes.
              Access study materials from all years and contribute to help fellow students succeed.
            </p>



          </div>
        </section>
        <Year />
      </div>

      <Footer />
    </div>
  );
}