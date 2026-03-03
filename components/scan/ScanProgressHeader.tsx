import {UserSearch, Waypoints, FlaskConical, NotebookTabs, ScrollText} from "lucide-react";
const steps = [
  {name: "Spidering", icon: UserSearch}, 
  {name: "Mapping", icon: Waypoints}, 
  {name: "Testing", icon: FlaskConical}, 
  {name: "Validating", icon: NotebookTabs}, 
  {name: "Reporting", icon: ScrollText}
];

export function ScanProgressHeader({progress}: {progress: number}) {
  const activeStep = 0;

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 bg-surface border border-border rounded-2xl p-6 space-y-6 space-x-5">

        <div className="relative w-28 h-28 flex items-center justify-center bg-black rounded-full">
          
          <div className="text-center">
            <div className="text-3xl text-accent font-semibold">{progress}%</div>
            <div className="text-sm text-white">In Progress</div>
          </div>
        </div>

        <div className="hidden lg:block border border-gray-400 h-40"/>

        <div className="flex flex-col justify-center w-full lg:w-auto">

         
          <div className="flex relative items-center justify-between w-full py-4">
            <div className="absolute h-0.5 top-1/3 mx-10 w-6/7 bg-gray-500 z-1" />
            {steps.map((step, i) => (
              <div key={i} className="flex-1 text-center relative z-2">
                <div
                  className={`lg:ml-10 w-10 h-10 flex items-center justify-center rounded-full text-xs font-medium
                  ${i === activeStep
                    ? "bg-accent text-white"
                    : "bg-gray-200 dark:bg-black text-gray-500 dark:text-white"
                  }`}
                >
                  <step.icon className="w-4 h-4"/>
                </div>
                <div className="lg:-ml-10 text-xs mt-3 text-gray-500 dark:text-gray-400">
                  {step.name}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-sm text-gray-500 dark:text-gray-400 p-6 border-t">
            <Meta label="Scan Type" value="Grey Box" />
            <Meta label="Targets" value="google.com" />
            <Meta label="Started At" value="Nov 22, 09:00AM" />
            <Meta label="Credentials" value="2 Active" />
            <Meta label="Files" value="Control.pdf" />
            <Meta label="Checklists" value="40/350" highlight />
          </div>
        </div>

      </div>
    </div>
  );
}

function Meta({ label, value, highlight = false }: any) {
  return (
    <div>
      <div className="text-xs">{label}</div>
      <div className={`font-medium ${highlight ? "text-accent" : "text-gray-800 dark:text-white"}`}>
        {value}
      </div>
    </div>
  );
}