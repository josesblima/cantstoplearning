export default function TailwindTests() {
  return (
    <div>
      <div className="bg-midnight-background min-h-screen text-midnight-text">
        <div className="flex items-center p-2 border-4 border-midnight-border rounded-lg">
          <img
            src="logo.png"
            className="h-40 w-40 border-4 border-midnight-border rounded-lg m-1"
          ></img>
          <div className="h-40 w-40 border-4 border-midnight-border rounded-lg m-1"></div>
          <div className="h-40 w-40 border-4 border-midnight-border rounded-lg m-1"></div>
          <div className="h-40 w-40 border-4 border-midnight-border rounded-lg m-1"></div>
        </div>
      </div>
    </div>
  );
}
