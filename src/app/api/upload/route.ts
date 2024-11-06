import { promises as fs } from "fs";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import PDFParser from "pdf2json";

export async function POST(req: NextRequest) {
  const formData: FormData = await req.formData();
  const uploadedFiles = formData.getAll("filepond");
  let fileName: string = "";
  let parsedText: string = "";

  if (uploadedFiles && uploadedFiles.length > 0) {
    const uploadedFile = uploadedFiles[1];
    console.log("Uploaded file:", uploadedFile);

    if (uploadedFile instanceof File) {
      fileName = uuidv4();

      const tempFilePath = `/tmp/${fileName}.pdf`;
      const fileBuffer = Buffer.from(await uploadedFile.arrayBuffer());
      await fs.writeFile(tempFilePath, fileBuffer);

      PDFParser.on("pdfParser_dataError", (errData) =>
        console.log(errData.parserError)
      );
      PDFParser.on("pdfParser_dataReady", () => {
        console.log((PDFParser as any).getRawTextContent());
        parsedText = (PDFParser as any).getRawTextContent();
      });

      PDFParser.loadPDF(tempFilePath);
    } else {
      console.log("Uploaded file is not in the expected format.");
    }
  } else {
    console.log("No files found.");
  }

  const response = new NextResponse(parsedText);
  response.headers.set("Filename", fileName);
  return response;
}
