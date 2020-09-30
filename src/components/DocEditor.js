import 'braft-editor/dist/index.css'
import React, {Component} from 'react'
import BraftEditor from 'braft-editor'
import {convertToRaw, convertFromRaw, EditorState} from 'draft-js';

export default class DocEditor extends Component {

    state = {
        editorState: BraftEditor.createEditorState('<p>Hello <b>World!</b></p>'), // set initial contents for the editor
        // outputHTML: '<p></p>'
    }

    saveContent = (content) => {
        window.localStorage.setItem('content', JSON.stringify(convertToRaw(content)));
    }

    handleChange = (editorState) => {
        const contentState = editorState.getCurrentContent();
        console.log('content state', convertToRaw(contentState));
        this.saveContent(contentState);
        this.setState({
            editorState: editorState,
            outputHTML: editorState.toHTML()
        })
    }

    componentDidMount () {
        this.isLivinig = true
        // contents change in editor after 3 seconds
        setTimeout(this.setEditorContentAsync, 300)
    }

    componentWillUnmount () {
        this.isLivinig = false
    }

    setEditorContentAsync = () => {
        const content = window.localStorage.getItem('content');

        if (content) {
            console.log("content exist")
            this.isLivinig && this.setState({
                editorState: EditorState.createWithContent(convertFromRaw(JSON.parse(content)))
            })
        } else {
            this.isLivinig && this.setState({
                editorState: BraftEditor.createEditorState('<p>Hello，<b>World!</b><p>')
            })
        }
    }

    preview = () => {

        if (window.previewWindow) {
            window.previewWindow.close()
        }

        window.previewWindow = window.open()
        window.previewWindow.document.write(this.buildPreviewHtml())
        window.previewWindow.document.close()

    }

    buildPreviewHtml () {

        return `
      <!Doctype html>
      <html>
        <head>
          <title>Preview Content</title>
          <style>
            html,body{
              height: 100%;
              margin: 0;
              padding: 0;
              overflow: auto;
              background-color: #f1f2f3;
            }
            .container{
              box-sizing: border-box;
              width: 1000px;
              max-width: 100%;
              min-height: 100%;
              margin: 0 auto;
              padding: 30px 20px;
              overflow: hidden;
              background-color: #fff;
              border-right: solid 1px #eee;
              border-left: solid 1px #eee;
            }
            .container img,
            .container audio,
            .container video{
              max-width: 100%;
              height: auto;
            }
            .container p{
              white-space: pre-wrap;
              min-height: 1em;
            }
            .container pre{
              padding: 15px;
              background-color: #f1f1f1;
              border-radius: 5px;
            }
            .container blockquote{
              margin: 0;
              padding: 15px;
              background-color: #f1f1f1;
              border-left: 3px solid #d1d1d1;
            }
          </style>
        </head>
        <body>
          <div class="container">${this.state.editorState.toHTML()}</div>
        </body>
      </html>
    `

    }

    render () {

        const { editorState, outputHTML } = this.state

        const extendControls = [
            {
                key: 'custom-button',
                type: 'button',
                text: 'Preview',
                onClick: this.preview
            }
        ]

        return (
            <div>
                <div className="editor-wrapper">
                    <BraftEditor
                        value={editorState}
                        onChange={this.handleChange}
                        extendControls={extendControls}
                        contentStyle={{height: 400}}
                        language="en"
                    />
                </div>
                {/*<h5>output</h5>*/}
                {/*<div className="output-content">{outputHTML}</div>*/}
            </div>
        )

    }

}