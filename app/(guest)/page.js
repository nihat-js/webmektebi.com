import CodeBlock from "@/components/common/CodeBlock";
import Footer from "@/components/user/Footer";
import Sidebar from "@/components/user/LeftSidebar";
import Navbar from "@/components/user/Navbar";

export default function Home() {

  const javascriptCode = `
    const greet = (name) => {
      return \`Salam, \${name}!\`;
    };
    greet('developer. Gəl birlikdə addımlayaq!');
  `;



  return (
    <div>
      <CodeBlock
        language="javascript"
        fileName="app.js"
        code={javascriptCode}
      />

    </div>


  )
}