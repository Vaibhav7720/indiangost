import Discuss from "./pages/Discuss";
import Stories from "./pages/Stories";

export default function Home() {
  return (
    <div className="p-3 mr-6 flex flex-row gap-96 justify-between">
      <Discuss></Discuss>
      <Stories></Stories>
    </div>
  );
}
