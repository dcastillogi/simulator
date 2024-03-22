import EditorJS from "@editorjs/editorjs";
// @ts-ignore
import Table from "@editorjs/table";
import "./editor.css";
import { useEffect } from "react";

export default function Editor() {
    useEffect(() => {
        const editor = new EditorJS({
            placeholder: "Type your notes or document here",
            holder: "editorjs",
            tools: {
                table: Table,
            },
        });

        return () => {
            if (editor) editor.isReady.then(() => {
                editor.destroy();
            });
        };
    }, []);
    return <div id="editorjs" className="text-primary font-light"></div>
}