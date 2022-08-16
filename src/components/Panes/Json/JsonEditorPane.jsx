import React, { useRef, useEffect } from 'react';
import { EditorView, keymap } from '@codemirror/view';
import { EditorState, basicSetup } from '@codemirror/basic-setup';
import { defaultTabBinding } from '@codemirror/commands';
import { json } from '@codemirror/lang-json';

const basicExtensions = [
  basicSetup,
  keymap.of([defaultTabBinding]),
  json(),
  EditorState.tabSize.of(2),
];

export default function JsonEditorPanel({
  paneValue,
  setPaneValue,
  isEditable = true,
}) {
  const editorRef = useRef();

  useEffect(() => {
    if (editorRef.current === null) return;

    const state = EditorState.create({
      doc: paneValue,
      extensions: [
        ...basicExtensions,
        EditorView.updateListener.of((view) => {
          if (view.docChanged) {
            setPaneValue(view.state.doc);
          }
        }),
        EditorView.editable.of(isEditable),
      ],
    });

    const view = new EditorView({
      state,
      parent: editorRef.current,
    });

    return () => {
      view.destroy();
    };
    // eslint-disable-next-line
  }, [editorRef.current, paneValue]);

  return <div ref={editorRef}></div>;
}
