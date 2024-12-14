import CodeBlock from "@/components/common/CodeBlock";
import Footer from "@/components/user/Footer";
import Sidebar from "@/components/user/LeftSidebar";
import Navbar from "@/components/user/Navbar";

export default function Home() {

  const javascriptCode = `
    const greet = (name) => {
      return \`Hello, \${name}!\`;
    };
    greet('World');
  `;

  return (
    <div>

      <Sidebar />
      <div className="container mx-auto" style={{maxWidth : "800px"}}>
        <Navbar />

        <CodeBlock
          language="javascript"
          fileName="app.js"
          code={javascriptCode}
        />

        <Footer />
      </div>


    </div>
  )
}