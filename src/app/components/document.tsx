import EditorJS from '@editorjs/editorjs';
// @ts-ignore
import Table from '@editorjs/table'
import "./editorjs.css";

export default function Document({width}: {width: number}) {
    const editor = new EditorJS({
        placeholder: 'Type your notes or document here',
        tools: {
            table: Table,
          }        
    })
    return (
        <div className="w-full h-full bg-background-dimmed py-8 overflow-y-auto" style={{width: `${width}px`}}>
            <div className="max-w-xl mx-auto px-6">
                <h1 className="text-placeholder font-semibold text-3xl mb-7" contentEditable>Untitled Simulation</h1>
                <div id="editorjs" className='text-primary font-light'></div>
            </div>
        </div>
    );
}