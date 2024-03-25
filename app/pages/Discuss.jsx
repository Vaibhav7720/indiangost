import ForumCard from "../components/ForumCard";
const Discuss = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-semibold p-2 bg-slate-200 uppercase text-red-500 inline rounded-lg max-w-fit">
        Discussion Forum
      </h1>
      <div className="flex flex-col gap-4">
        <ForumCard></ForumCard>
        <ForumCard></ForumCard>
        <ForumCard></ForumCard>
      </div>
    </div>
  );
};

export default Discuss;
