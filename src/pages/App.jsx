export default function App() {
  return (
    <div className="bg-midnight-background min-h-screen text-midnight-text">
      <div className="flex justify-between flex-row">
        <div className="flex items-center">
          <div className="p-2 h-50 w-50 bg-midnight-background border-4 border-midnight-border border-solid m-10 rounded-lg">
            <h2 className="text-midnight-text">Background Color</h2>
            <h2 className="text-midnight-code">Code on Primary</h2>
          </div>
        </div>
        <div className="flex items-center">
          <div className="p-2 h-50 w-50 bg-midnight-heading border-4 border-midnight-border border-solid m-10 rounded-lg">
            <h2 className="text-midnight-code">Heading Color</h2>
          </div>
        </div>
        <div className="flex items-center">
          <div className="p-2 h-50 w-50 bg-midnight-primary border-4 border-midnight-border border-solid m-10 rounded-lg">
            <h2 className="text-midnight-text">Primary Color</h2>
            <h2 className="text-midnight-code">Code on Primary</h2>
          </div>
          <div className="flex items-center">
            <div className="p-2 h-50 w-50 bg-midnight-secondary border-4 border-midnight-border border-solid m-10 rounded-lg">
              <h2 className="text-midnight-text">Secondary Color</h2>
              <h2 className="text-midnight-code">Code on Primary</h2>
            </div>
          </div>
          <div className="flex items-center">
            <div className="p-2 h-50 w-50 bg-midnight-code border-4 border-midnight-border border-solid m-10 rounded-lg">
              <h2 className="text-midnight-text">Code Color</h2>
              <h2 className="text-midnight-code">Code on Primary</h2>
            </div>
          </div>
          <div className="flex items-center">
            <div className="p-2 h-50 w-50 bg-midnight-border border-4 border-midnight-border border-solid m-10 rounded-lg">
              <h2 className="text-midnight-text">Border Color</h2>
              <h2 className="text-midnight-code">Code on Primary</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <img
          src="logo.png"
          className="m-4 h-40 w-40 border-solid border-midnight-border border-4 rounded-lg"
        ></img>
        <div className="m-4 h-40 w-40 border-solid border-midnight-border border-4 rounded-lg">
          Neovim
        </div>
        <div className="m-4 h-40 w-40 border-solid border-midnight-border border-4 rounded-lg"></div>
        <div className="m-4 h-40 w-40 border-solid border-midnight-border border-4 rounded-lg"></div>
      </div>
    </div>
  );
}
