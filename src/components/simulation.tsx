import { DNA, DoorOpen, Magic, MapPin, Pacmac, Settings } from "../lib/icons";

export default function Simulation({width}: {width: number}) {
    return (
        <div className="w-full h-full relative" style={{width: `${width}px`}}>
            <div className="absolute left-3.5 top-5 space-y-2">
                <div className="p-[2px] rounded border border-border bg-background">
                    <button className="w-9 h-9 rounded-sm grid place-items-center hover:bg-background-hover relative group">
                        <Settings className="text-white w-4 h-4" />
                        <span className="absolute left-12 bg-background-hover text-[13px] rounded px-1.5 py-[2px] text-secondary opacity-0 group-hover:opacity-100 transition-opacity">Settings</span>
                    </button>
                </div>
                <div className="p-[2px] rounded border border-border space-y-1 bg-background">
                    <button className="w-9 h-9 rounded-sm grid place-items-center hover:bg-background-hover group">
                        <Pacmac className="text-white w-4 h-4" />
                        <span className="absolute left-12 bg-background-hover text-[13px] rounded px-1.5 py-[2px] text-secondary opacity-0 group-hover:opacity-100 transition-opacity">Activity</span>
                    </button>
                    <button className="w-9 h-9 rounded-sm grid place-items-center hover:bg-background-hover group">
                        <DoorOpen className="text-white w-4 h-4" />
                        <span className="absolute left-12 bg-background-hover text-[13px] rounded px-1.5 py-[2px] text-secondary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Start Point</span>
                    </button>
                    <button className="w-9 h-9 rounded-sm grid place-items-center hover:bg-background-hover group">
                        <MapPin className="text-white w-4 h-4" />
                        <span className="absolute left-12 bg-background-hover text-[13px] rounded px-1.5 py-[2px] text-secondary opacity-0 group-hover:opacity-100 transition-opacity">End</span>
                    </button>
                    <button className="w-9 h-9 rounded-sm grid place-items-center hover:bg-background-hover group">
                        <MapPin className="text-white w-4 h-4" />
                        <span className="absolute left-12 bg-background-hover text-[13px] rounded px-1.5 py-[2px] text-secondary opacity-0 group-hover:opacity-100 transition-opacity">Queue</span>
                    </button>
                </div>
                <div className="p-[2px] rounded border border-border space-y-1 bg-background">
                    <button className="w-9 h-9 rounded-sm grid place-items-center hover:bg-background-hover group">
                        <Magic className="text-white w-4 h-4" />
                        <span className="absolute left-12 bg-background-hover text-[13px] rounded px-1.5 py-[2px] text-secondary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">AI Generation</span>
                    </button>
                    <button className="w-9 h-9 rounded-sm grid place-items-center hover:bg-background-hover group">
                        <DNA className="text-white w-4 h-4" />
                        <span className="absolute left-12 bg-background-hover text-[13px] rounded px-1.5 py-[2px] text-secondary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Genetic Algorithm Solver</span>
                    </button>
                </div>
            </div>
            <canvas className="w-full h-full"></canvas>
        </div>
    );
}