import React from "react";
import { useQuery } from "react-query";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase.config";
import { Document, Page } from "react-pdf";
function PdfComponent({ pdfLink }) {
  return (
    <Document file={pdfLink}>
      <Page pageNumber={1} />
    </Document>
  );
}
export default function Activity() {
  const { isLoading, data } = useQuery("activities", async () => {
    const querySnapshot = await getDocs(collection(db, "activity"));
    return querySnapshot.docs.map((doc) => doc.data());
  });
  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <h2 style={{textAlign:"center"}}>Activities</h2>
      <div
      className="pdfContainer"
      >
        {data.map((item) => {
          return (
            <div className="pdfs">
              <a href={item?.pdfUrl} className = "pdf" target="_blank" rel="noopener noreferrer">
                <iframe
                  src={item?.pdfUrl}
                  scrolling="no"
                  width="200px"
                  height="230px"
                  style={{overflow: "hidden"}}
                  
                ></iframe>
              </a>
            </div>
            
          );
        })}
      </div>
    </div>
  );
}
