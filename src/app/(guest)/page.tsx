import CodeBlock from "@/src/components/common/CodeBlock";
import Footer from "@/src/components/user/Footer";
import Sidebar from "@/src/components/user/LeftSidebar";
import Navbar from "@/src/components/user/Navbar";

export default function Home() {

  // const javascriptCode = `
  //   const greet = (name) => {
  //     return \`Salam, \${name}!\`;
  //   };
  //   greet('developer. Gəl birlikdə addımlayaq!');
  // `;

  const javascriptCode = `console.log('Salam, developer. Gəl birlikdə addımlayaq!')`;



  return (
    <div>
      <h3 className="text-3xl text-gray-800 my-4">
        Salam, bu saytt sənin web proqramlaşdırma həvəsindən məlumdur. Məqsədimiz səni bu sahədə daha da inkişaf etdirməkdir.
      </h3>
      <p>
        Proqramlaşdırma hər zaman inkişaf etməkdə olan bir sahədir. Bu sahədə öyrənmək üçün bir çox mənbələr mövcuddur. Lakin
        biz istərdik ki yerli mənbələrə dəstək olmaq məqsədilə bu saytı yaradaq. Bu saytın məqsədi sadəcə öyrənmək deyil, həm də öyrəndiklərini praktikada tətbiq etməkdir.
      </p>
      <p>
        Hardan başlaya bilərəm? Gəl yol xəritəsində sənə rəhbərlik edək.
      </p>

      <p>
        Ən sevdiyim dil javascriptdir. Elə isə javascript ilə başlayaq.
      </p>

      {/* <CodeBlock
        language="javascript"
        fileName="app.js"
        code={javascriptCode}
      /> */}

      <p>
         Təbriklər artıq ilk kodunuzu yazmış oldunuz.Burda sadəcə console-a bir mətn yazdırırıq. 
      </p>

    </div>


  )
}