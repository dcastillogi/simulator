"use client";

import { useEffect, useState } from "react";
import Simulation from "../components/simulation";
import { Link, Loader, Play, Stop } from "../lib/icons";
import cn from "classnames";
import Document from "../components/document";

export default function Simulator() {
    const [view, setView] = useState<"document" | "both" | "simulation">(
        "both"
    );
    const [loading, setLoading] = useState(true);
    const [documentWidth, setDocumentWidth] = useState(0);
    const [simulationWidth, setSimulationWidth] = useState(0);
    const [running, setRunning] = useState(false);
    useEffect(() => {
        const screenWidth = window.innerWidth;
        setDocumentWidth(screenWidth / 2);
        setSimulationWidth(screenWidth / 2);
        setTimeout(() => setLoading(false), 1000);
    }, []);

    if (loading) {
        return (
            <div className="w-screen h-screen bg-background p-10">
                <div className="w-full h-full grid place-items-center relative">
                    <div className="flex gap-2 items-center">
                        <Play className="w-8 h-8 text-primary" />
                        <h1 className="text-lg text-primary mt-px">
                            Let&apos;s Simulate
                        </h1>
                    </div>
                    <div className="absolute bottom-0 left-0 text-primary/50 flex gap-2 items-center text-sm">
                        <Loader className="w-5 h-5 animate-spin" />
                        <span className="mt-px">Cargando simulador</span>
                    </div>
                </div>
            </div>
        );
    }

    const selectView = (view: "document" | "both" | "simulation") => {
        if (view == "document") {
            setDocumentWidth(window.innerWidth);
            setSimulationWidth(0);
        } else if (view == "simulation") {
            setDocumentWidth(0);
            setSimulationWidth(window.innerWidth);
        } else {
            setDocumentWidth(window.innerWidth / 2);
            setSimulationWidth(window.innerWidth / 2);
        }
        setView(view);
    };

    const handleRun = () => {
        setRunning(!running);
    }

    return (
        <div className="w-screen h-screen bg-background flex flex-col">
            <header className="border-b border-border">
                <div className="w-full py-2 px-4 grid grid-cols-3 items-center">
                    <button onClick={handleRun} className="inline w-6 h-6">
                        {
                            running ? <Stop className="w-6 h-6 text-white/80 hover:text-white" /> : <Play className="w-6 h-6 text-white hover:text-white/80 transition-colors" />
                        }
                    </button>
                    <div className="flex justify-center">
                        <div className="rounded border-border border grid grid-cols-3 text-white text-[13px] divide-x divide-border">
                            <button
                                className={cn({
                                    "py-1 px-2 transition-colors": true,
                                    "bg-background-accent": view == "document",
                                    "hover:bg-background-hover":
                                        view != "document",
                                })}
                                onClick={() => selectView("document")}
                            >
                                Document
                            </button>
                            <button
                                className={cn({
                                    "py-1 px-2 transition-colors": true,
                                    "bg-background-accent": view == "both",
                                    "hover:bg-background-hover": view != "both",
                                })}
                                onClick={() => selectView("both")}
                            >
                                Both
                            </button>
                            <button
                                className={cn({
                                    "py-1 px-2 transition-colors": true,
                                    "bg-background-accent":
                                        view == "simulation",
                                    "hover:bg-background-hover":
                                        view != "simulation",
                                })}
                                onClick={() => selectView("simulation")}
                            >
                                Simulation
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button className="py-1 px-3 text-[13px] text-white bg-accent rounded flex items-center gap-2">
                            Share <Link className="h-3.5 w-auto" />
                        </button>
                    </div>
                </div>
            </header>
            <main className="flex flex-grow overflow-hidden">
                {(view == "document" || view == "both") && (
                    <Document width={documentWidth} />
                )}
                {view == "both" && (
                    <div className="w-4 cursor-col-resize -ml-2 flex justify-center">
                        <span className="h-full w-px bg-border"></span>
                    </div>
                )}
                {(view == "simulation" || view == "both") && (
                    <Simulation width={simulationWidth} />
                )}
            </main>
        </div>
    );
}
