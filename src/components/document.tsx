import dynamic from "next/dynamic";

export default function Document({ width }: { width: number }) {
    const Editor = dynamic(() => import('./editor'))
    return (
        <div
            className="w-full h-full bg-background-dimmed py-8 overflow-y-auto"
            style={{ width: `${width}px` }}
        >
            <div className="max-w-xl mx-auto px-6">
                <h1
                    className="text-placeholder font-semibold text-3xl mb-7 outline-none"
                    contentEditable
                >
                    Untitled Simulation
                </h1>
                <Editor />
            </div>
        </div>
    );
}
